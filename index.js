// Imports
import fs from 'fs'
import inquirer from 'inquirer'
import { generateMarkdown } from './utils/generateMarkdown.js'

// An array of questions for user input
inquirer
    .prompt([
        {
            type:'input',
            name:'title',
            message:'1/13 What is the title of your project?',
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
        {
            type:'input',
            name:'motivation',
            message:'2/13 What was your motivation to build this project?',
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
        {
            type:'input',
            name:'why',
            message:'3/13 Why did you build it?',
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
        {
            type:'input',
            name:'what',
            message:'4/13 What problem does it solve?',
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
        {
            type:'input',
            name:'learn',
            message:'5/13 What did you learn?',
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
        {
            type: 'input',
            name: 'dependencies',
            message: '6/13 List any project dependencies here.',
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
        {
            type:'input',
            name:'install',
            message:'7/13 How do you install your project?',
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
        {
            type:'input',
            name:'use',
            message:'8/13 Provide instructions and examples for use.',
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
        {
            type: 'input',
            name: 'creator',
            message: '9/13 State your GitHub username?',
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
        {
            type: 'input',
            name: 'name',
            message: '10/13 State your full name?',
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
        {
            type: 'input',
            name: 'email',
            message: '11/13 State is your email address?',
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
        {
            type: 'input',
            name: 'contributors',
            message: '12/13 List the GitHub usernames of any contributors to the project',
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
        {
            type:'list',
            name: 'license',
            message: '13/13 Choose a license for your project.',
            choices:['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'none'],
            validate: (value) => { if (value) {return true} else {return 'Please input a value.'}},
        },
    ])
    .then(answers => {
        console.log(answers)
        const md = generateMarkdown(answers)
        
        fs.writeFile(`./new-readme/${answers.title}.md`, md, err => {
          if (err) {
            throw err
          }    
          console.log(`${answers.title}.md saved!`)
        })
    })
    .catch(error => console.log(error))

// Initialize app
function init() {}

// Function call to initialize app
init()
