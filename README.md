


<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">MiFit Data Exporter</h3>

  <p align="center">
    A tool that allows you to export your fitness data from Xiaomi MiFit.
    <br />
    <br />
    <a href="https://github.com/Sinister-lab/MiFit-Data-Exporter/issues">Report Bug</a>
    ·
    <a href="https://github.com/Sinister-lab/MiFit-Data-Exporter/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

My good friend Ravex felt the need to export the data from his Xiaomi fitness wristband and use it for further analysis. Unfortunately, Xiaomi does not offer the possibility to retrieve his data via a REST API or similar, which is why we developed a tool that logs into the account, requests the desired data, solves the corresponding captcha and fishes the email from the mails and unzips them.

The tool can be run on any platform that supports Docker. If Docker is not available, Tesseract must be installed on the device. Genauere Infos

### Built With

* [NodeJS](https://nodejs.org/en/)
* [Puppeteer](https://github.com/puppeteer/puppeteer)
* [Tesseract](https://www.npmjs.com/package/node-tesseract-ocr)
* [Docker](https://www.docker.com/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You can configure everything important via config.js. It is important that you enter your email address and password for Xiaomi MiFit. If you don't need the email fetching then you don't have to set the email credentials.

### Installation and Usage with Docker

1. Clone the repo
   ```sh
   git clone https://github.com/Sinister-lab/MiFit-Data-Exporter
   ```
2. Run docker-compose with build flag
   ```sh
   docker-compose up -d --build
   ```



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Sinister-lab/MiFit-Data-Exporter/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

 <div style="text-align: center; margin-bottom: 20px">
     <img src="https://github.com/Sinister-lab.png?size=100">
     <h4 style="margin-bottom: 0px">Sebastian Müller</h4>
     <div>
         <a href="https://www.linkedin.com/in/sebastian-m%C3%BCller-472442105/">LinkedIn</a>
         <span>|</span>
         <a href="mailto:smueller@steinberger.co">Email</a>
     </div>
 </div>

 <div style="text-align: center">
     <img src="https://github.com/Sinister-lab.png?size=100">
     <h4 style="margin-bottom: 0px">Ravex</h4>
     <div>
         <a href="https://www.linkedin.com/in/sebastian-m%C3%BCller-472442105/">LinkedIn</a>
         <span>|</span>
         <a href="mailto:smueller@steinberger.co">Email</a>
     </div>
 </div>




<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Sinister-lab/MiFit-Data-Exporter.svg?style=for-the-badge
[contributors-url]: https://github.com/Sinister-lab/MiFit-Data-Exporter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Sinister-lab/MiFit-Data-Exporter.svg?style=for-the-badge
[forks-url]: https://github.com/Sinister-lab/MiFit-Data-Exporter/network/members
[stars-shield]: https://img.shields.io/github/stars/Sinister-lab/MiFit-Data-Exporter.svg?style=for-the-badge
[stars-url]: https://github.com/Sinister-lab/MiFit-Data-Exporter/stargazers
[issues-shield]: https://img.shields.io/github/issues/Sinister-lab/MiFit-Data-Exporter?style=for-the-badge
[issues-url]: https://github.com/Sinister-lab/MiFit-Data-Exporter/issues
[license-shield]: https://img.shields.io/github/license/Sinister-lab/MiFit-Data-Exporter.svg?style=for-the-badge
[license-url]: https://github.com/Sinister-lab/MiFit-Data-Exporter/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username