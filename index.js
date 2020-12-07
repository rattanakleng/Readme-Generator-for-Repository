//create JSON file --> npm init -y
//install inquirer package --> npm i inquirer
//var store inquirer
//var store fs file

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
console.log(generateMarkdown)
const licenseList = ["Apache",
    "MIT",
    "ISC",
    "GNU GPLv3"];

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
        type: "input",
        name: "test",
        message: "Bugs and Issues",
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
