<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/devangmalhotra/ai-agent-tic-tac-toe">
    <img src="src/assets/Red_TicTacToe_Icon.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">A.I. Tic-Tac-Toe</h3>

  <p align="center">
    A deterministic game created to understand artificial intelligence and game theory.
    <br />
    <br />
    <a href="https://devangmalhotra-tic-tac-toe.netlify.app/"><strong>Try It Out »</strong></a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<img width="1728" height="999" alt="Screenshot 2025-11-08 at 12 09 35 AM" src="https://github.com/user-attachments/assets/837fe4f0-24fa-472d-9221-410b8a28e697" />
<br />

The aim of this project was to explore the practical applications of decision-making in competitive environments, with a focus on artificial intelligence and game theory. I decided to use Tic-Tac-Toe to demonstrate the effectiveness of the algorithms included in this game as it's easy to understand which in turn makes the process of explaining each algorithm in relation to the game much easier.

Apart from the algorithms, I also implemented a leaderboard on the website which tracks the following metrics for each player:
* Current streak
* Highest streak
* Highest global streak (of all players)

Each player has a unique UUID attached to the localStorage in their browser. These metrics are tracked based on these UUID's.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This project was built with the PERN stack and gave me the opportunity to gain exposure to PostgreSQL. Having always used MySQL databases in the past, Neon was much simpler to use and set up in my Express application.

* [![PostgreSQL][PostgreSQL.org]][PostgreSQL-url]
* [![Express][Express.js]][Express-url]
* [![React][React.js]][React-url]
* [![Node.js][Node.js]][Node-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
<!--## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```-->

<!--### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap
### MiniMax Algorithm
This was the first algorithm I wrote code for. In this particular back-tracking algorithm, one player is trying to maximize their score while the other is trying to minimize their score. Each board state has a particular value associated with it, and each turn will build a set of game trees recursively to find the lowest or highest score.
### Alpha-Beta Pruning Algorithm
text
### ExpectiMiniMax Algorithm
text

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Devang Malhotra - [malh2226@mylaurier.ca](mailto:malh2226@mylaurier.ca)

Project Link: [https://github.com/devangmalhotra/ai-agent-tic-tac-toe](https://github.com/devangmalhotra/ai-agent-tic-tac-toe)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-61DAFB?style=plastic&logo=react&logoColor=black
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Express.js]: https://img.shields.io/badge/Express-000000?style=plastic&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[PostgreSQL.org]: https://img.shields.io/badge/PostgreSQL-%23336791.svg?&style=plastic&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=plastic&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
