FROM ubuntu
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get upgrade && apt-get update
RUN apt install -y cmake libgbm-dev gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
RUN apt-get install nodejs -y && apt-get install npm -y
CMD ["npm", "run", "-s", "start"]

RUN mkdir -p /usr/src/crawler
WORKDIR /usr/src/crawler


COPY package.json /usr/src/crawler/package.json

RUN npm install
RUN npm install -g pm2 nodemon

COPY . /usr/src/crawler