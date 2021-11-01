// First I included everything I needed for application.
// Making a empty array to put new employees 
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./Lib/manager");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const employees = [];

// Generating questions the different employees
const anotherEmployeeQuestions=[{
    type: 'list',
    message: `Would you like to add employee's?`,
    name: 'employees',
    choices: ['Engineer', 'Intern', 'Done']
}]

const managerQuestions=[{
    type: 'input',
    message: 'What is your name?',
    name: 'name',
},
{
    type: 'input',
    message: 'What is your ID#?',
    name: 'id',
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
},
{
    type: 'input',
    message: 'What is your office number?',
    name: 'officeNumber',
}]

const engineerQuestions=[{
    type: 'input',
    message: 'What is your name?',
    name: 'name',
},
{
    type: 'input',
    message: 'What is your ID#?',
    name: 'id',
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
},
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
}]

const internQuestions=[{
    type: 'input',
    message: 'What is your name?',
    name: 'name',
},
{
    type: 'input',
    message: 'What is your ID#?',
    name: 'id',
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
},
{
    type: 'input',
    message: `What is the school you're attending?`,
    name: 'school',
}]

// Will need to ask manager questions first and then push responses to array and then ask next question.
const addingManager = () => {
    inquirer.prompt(managerQuestions)
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        employees.push(manager);
        addingAnotherEmployee();
    })
}

addingManager();

// When finished answering manager questions, will ask to pick engineer, intern, or done.
const addingAnotherEmployee = () => {
    inquirer.prompt(anotherEmployeeQuestions)
        .then((response) => {
            if (response.employees === 'Engineer') {
                addingEngineer();
            } else if (response.employees === 'intern') {
                addingIntern();
            } else {
                makeHtml();
            }
        })
}


// Will be asked engineer questions if manager needs to add to employees array
const addingEngineer = () => {
    inquirer.prompt(engineerQuestions)
    .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        employees.push(engineer);
        addingAnotherEmployee();
    })
}

// Will be asked intern questions if manager needs to add to employees array
const addingIntern = () => {
    inquirer.prompt(internQuestions)
    .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        intern.push(Intern);
        addingAnotherEmployee();
    })
} 




// Start making html and create seperate cards taking in employee rolls 

// in src create a javascript file that takes the employees array and returns an html page for fs.writeFile
const makeHtml = () => {




    fs.writeFile('./dist/index.html', html, )
}

