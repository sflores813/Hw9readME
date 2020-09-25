const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
inquirer
  //question 1
  .prompt([
    {
      type: "input",
      message: "What is the name of you project?",
      name: "title",
    },
    //question 2

    {
      type: "input",
      message: "describe youre project.",
      name: "description",
    },
    //question 3

    {
      type: "input",
      message:
        "what are the instaltion instruction that are needed to run the project?",
      name: "installation",
    },
    //question 4

    {
      type: "input",
      message: "Explain why it would be used.",
      name: "usage",
    },
    //question 5

    {
      type: "list",
      message: "What license are you using?",
      name: "license",
      choices: ["MIT", "ISC", "BSD"],
    },
    //question 6

    {
      type: "input",
      message: "Who contributed to the application?",
      name: "contribution",
    },
    //question 7

    {
      type: "input",
      message: "Descripe the test instructions.",
      name: "test",
    },
    //question 8

    {
      type: "input",
      message: "Whats youre github username?",
      name: "github",
    },
    //question 9

    {
      type: "input",
      message: "Please provide your email.",
      name: "email",
    },
  ])

  // function to write README file
  .then(function (response) {
    let readMeToWrite = `
## Title
  ${response.title}
## Description
  ${response.description}
## Table of Contants
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Licens](#License)
* [Contributing](#Contribution)
* [Test](#Test)
* [Questions](#Questions)
## Installation
  ${response.installation}
## Usage
  ${response.usage}
## License
  ${response.license}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
  For information about the License visit this link: [License](https://opensource.org/licenses/MIT)
  ## Contribution
  

  ${response.contribution}
## Test
  ${response.test}
## Questions
If you have any questions please feel free to reach me via: [sflores813](https://github.com/) 
Or send me an email: (sflores813@gmail.com)
    `;
    // function to initialize program
    async function generatMarkdown() {
      try {
        await writeFileAsync("readme.md", readMeToWrite);
        console.log(`It worked!`);
      } catch (err) {
        console.log(err);
      }
    }
    generatMarkdown();
  });
