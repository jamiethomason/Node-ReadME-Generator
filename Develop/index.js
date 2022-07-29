const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer
    .prompt ([
        //Create Title based on answer
        {
            type: "input",
            name: "project title",
            message: "What is your project title?",
        },
        //Sections will be created with answers: Description, Installation, Usage, Contributing, and Tests.
        {
            type: "input",
            name: "description",
            message: "Give a description of your project:",
        },
        {
            type: "input",
            name: "installation instructions",
            message: "What are the installation instructions?",
        },
        {
            type: "input",
            name: "usage information",
            message: "What is the usage information?",
        },
        {
            type: "input",
            name: "contribution guidelines",
            message: "What are your contribution guidelines?",
        },
        {
            type: "input",
            name: "test instructions",
            message: "What are the test instructions?",
        },
        //License badge will show at top of ReadMe and notice will be added to License section to explain which license app is covered under.
        {
            type: "list",
            name: "license",
            message: "What license is your project using?",
            //Add in choices and connect badge/license description
            choices: ['', '', ''],
        },
        //Username goes under Questions, with a link to my GitHub profile
        {
            type: "input",
            name: "github Username",
            message: "What is your GitHub Username?",
        },
        //Email added to Questions, with instructions on how to reach me with additional questions
        {
            type: "input",
            name: "email",
            message: "What is your Email Address?",
        },
    ])

//Do I need this??
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

//Make sections populate a Table of Contents that can be clicked/go to the corresponding section (Title, Description, Installation, Usage, Contributing, Tests, License, Questions)

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();