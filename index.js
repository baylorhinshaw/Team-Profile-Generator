const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
    ])