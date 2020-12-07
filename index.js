//create JSON file --> npm init -y
//install inquirer package --> npm i inquirer
//var store inquirer
//var store fs file

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
console.log(generateMarkdown)
const licenseList = ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause 'Simplified' license", "BSD", "3-clause 'New' or 'Revised' license", "BSD 3-clause Clear license", "Creative Commons license family", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The F*ck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License family", "GNU General Public License v2.0", "The Unlicense", "zLib License", "MIT", "Microsoft Public License"];

// array of questions for user
const questions = [

    {
        type: "input",
        name: "title",
        message: "What is application name?",
    },
    {
        type: "input",
        name: "description",
        message: "Description of the project",
    },
    {
        type: "input",
        name: "installation",
        message: "Download and installation instruction",
    },
    {
        type: "input",
        name: "usage",
        message: "Application usage",
    },
    {
        type: "input",
        name: "contributor",
        message: "Contributor to the projects",
    },
    {
        type: "list",
        name: "license",
        message: "License",
        choices: licenseList,
    },
    {
        type: "input",
        name: "username",
        message: "Your GitHub username",
    },
    {
        type: "input",
        name: "email",
        message: "Your email address",
    },
];

// function to write README file
function writeToFile(fileName, data) {

    const content = generateMarkdown(data);

    fs.writeFile(fileName, content, (err) => {
        if (err) console.log(err);
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            
            writeToFile("README.md", response);

        });
}

// function call to initialize program
init();