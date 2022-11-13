const inquirer = require('inquirer')

const fs = require('fs')

const generateHTML = require('./src/generateHTML')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const team = []

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: 'What is your position in the company?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the employees name.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email address.'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?',
            when: (input => input.position === 'Manager')
        },
        {
           type: 'input',
           name: 'github',
           message: 'What is the GitHub username of this engineer?',
           when: (input => input.position === 'Engineer')
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does this intern attend?',
            when: (input => input.position === 'Intern')
        },
        {
            type: 'confirm',
            name: 'addMoreEmployees',
            message: 'Would you like to add another employee to the team?',
            default: false
        }
    ])
    .then(employeeInfo => {
        let {position, name, id, email, officeNumber, github, school, addMoreEmployees} = employeeInfo
        let employee;

        if (position === 'Manager') {
            employee = new Manager (name, id, email, officeNumber)

        } else if (position === 'Engineer') {
            employee = new Engineer (name, id, email, github)

        } else if (position === 'Intern') {
            employee = new Intern (name, id, email, school)

        }

        team.push(employee)

        if (addMoreEmployees) {
            addEmployee(team)
            writeFile(team)
            
        } else {
            return
        }
    })
}

//team shows undefined value
const writeFile = (team) => {
    fs.writeFile('./dist/index.html', generateHTML(team), err => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log('You successfully created your team profile! Open the index.html in the browser to view your teams webpage!')
        }
    })
}

addEmployee()
