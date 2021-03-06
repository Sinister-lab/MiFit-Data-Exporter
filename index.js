const puppeteer = require('puppeteer');
const moment = require('moment');
const config = require("./config.json");

let start_date = moment().subtract(1, 'day').format('DD')
let end_date = moment().format('DD')

async function start () {
    const browser = await puppeteer.launch({
        headless: true,
        slowMo:10,
        args: [
            "--no-sandbox"
        ]
    });
    const page = await browser.newPage();
    await page.goto('http://mifit.huami.com/t/account_mifit');
    await page.waitForSelector('.output');
    await page.click('.output');
    await page.waitForSelector('#step1');
    await page.click('#step1');
    await page.waitForSelector('#usr');
    await page.waitForSelector('#psw');
    await page.focus('#usr')
    await page.keyboard.type(config.login_mail)
    await page.focus('#psw')
    await page.keyboard.type(config.login_password)
    await page.click('#login')
    await page.waitForNavigation()
    await page.waitForSelector('#clearData');
    await page.evaluate(() => {
        let parent = document.getElementById('clearData');
        let elements = parent.getElementsByClassName('timex-abandon');
        for (let element of elements) {
            element.click();
        }
    });

    const datePicker = await page.$$('.datePick');
    for (let i = 0;  i < datePicker.length; i++) {
        await datePicker[i].click();
        if(i == 0) {
            await page.click(`.react-datepicker__day--0${start_date}`);
        } else {
            await page.click(`.react-datepicker__day--0${end_date}`);
        }
    }
    await page.click('#ok')
    await page.waitForSelector('#codeImg');
    const captcha = await page.evaluate(async () => {
        return await new Promise(resolve => {
        let parent = document.getElementById('codeImg');
        let elements = parent.getElementsByTagName('span');
        let captchaText = ""
        for (let element of elements) {
            console.log(element.textContent)
            captchaText += element.textContent;
        }
        resolve(captchaText)
        })
    });
    await page.waitForSelector('#email');
    await page.focus('#email');
    await page.keyboard.type(config.login_mail);
    await page.focus('#code');
    await page.keyboard.type(captcha);
    await page.click('#ok');
    await browser.close();
};

start();
