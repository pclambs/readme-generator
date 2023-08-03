// Packages needed for this application
import fs from 'fs'
import inquirer from 'inquirer'
import generateMarkdown from './utils/generateMarkdown'

// An array of questions for user input
inquirer
    .prompt([
        {
            type:'input',
            name:'title',
            message:'What is the title of your project?',
            validate: (value) => { if (value) {return true} else {return 'Please enter a value.'}},
        },
        {
            type:'input',
            name:'motivation',
            message:'What was your motivation to build this project?',
            validate: (value) => { if (value) {return true} else {return 'Please enter a value.'}},
        },
        {
            type:'input',
            name:'why',
            message:'Why did you build it? What problem does it solve?',
            validate: (value) => { if (value) {return true} else {return 'Please enter a value.'}},
        },
        {
            type:'input',
            name:'learn',
            message:'What did you learn?',
            validate: (value) => { if (value) {return true} else {return 'Please enter a value.'}},
        },
        {
            type:'checkbox',
            name: 'license',
            choices:['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'none'],
            default: 'none',
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'List any project dependencies here.',
            validate: (value) => { if (value) {return true} else {return 'Please enter a value.'}},
        },
        {
            type: 'input',
            name: 'usage',
            message: 'List the languages or technologies associated with this project.',
            validate: (value) => { if (value) {return true} else {return 'Please enter a value.'}},
        },
        {
            type: 'input',
            name: 'creator',
            message: 'State your GitHub username?',
            validate: (value) => { if (value) {return true} else {return 'Please enter a value.'}},
        },
        {
            type: 'input',
            name: 'name',
            message: 'State your full name?',
            validate: (value) => { if (value) {return true} else {return 'Please enter a value.'}},
        },
        {
            type: 'input',
            name: 'email',
            message: 'State is your email address?',
            validate: (value) => { if (value) {return true} else {return 'Please enter a value.'}},
        },
        {
            type: 'input',
            name: 'tests',
            message: 'List the GitHub usernames of any contributors to the project',
            validate: (value) => { if (value) {return true} else {return 'Please enter a value.'}},
        },
    ])
    .then(answers => {
        console.log(answers)
    })


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
