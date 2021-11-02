// First I included everything I needed for application.
// Making a empty array to put new employees 
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
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
// Will be using for loop to go through employees to make cards and use getRole to know which cards to make
// Will need to make body empty so cards can be created into it

const makeHtml = () => {
    let body = '';

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].getRole() === 'Manager') {
            body += makeManagerCard(employees[i]);
        } else if (employees[i].getRole() === 'Engineer') {
            body += makeEngineerCard(employees[i]);
        } else if (employees[i].getRole() === 'Intern') {
            body += makeInternCard(employees[i]);
        } 
    };

    let htmlPage = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div>
            ${body}
        </div>
    </body>
    </html>`;
    
    fs.writeFile('./dist/index.html', htmlPage, function (err) {
    if (err) {
        console.log('There was an error!');
    }
    });
}

const makeManagerCard = (manager) => {
    return `<div class="card text-white bg-dark mb-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${getRole(manager)}</h5>
      <div class="card-text">Name: ${manager.name} Id: ${manager.id} Email: ${manager.email} Office Number: ${manager.officeNumber} </div>
    </div>
  </div>`
}

const makeEngineerCard = (engineer) => {
    return `<div class="card text-white bg-dark mb-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${getRole(engineer)}</h5>
      <div class="card-text">Name: ${engineer.name} Id: ${engineer.id} Email: ${engineer.email}</div>
      <a href="https://www.github.com/${engineer.github}" target=''>GitHub: ${engineer.github}</a>
    </div>
  </div>`
}

const makeInternCard = (intern) => {
    return `<div class="card text-white bg-dark mb-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${getRole(intern)}</h5>
      <div class="card-text">Name: ${intern.name} Id: ${intern.id} Email: ${intern.email} School: ${intern.school} </div>
      </div>
  </div>`
}