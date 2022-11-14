// add HTML for each type of employee
const generateEngineer = (engineer) => {
    return `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <p class="card-text">Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${engineer.id}</li>
                <li class="list-group-item">
                <form action="mailto: ${engineer.email}">
                    <input type="submit" value="${engineer.email}" />
                </form>
                </li>
                <li class="list-group-item">
                    <span>Github: </span>
                    <a href="https://github.com/${engineer.github}" class="card-link">github.com/${engineer.github}</a>
                </li>
            </ul>
        </div>
    </div>
    `
}

const generateIntern = (intern) => {
    return `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <p class="card-text">Intern</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${intern.id}</li>
                <li class="list-group-item">
                <form action="mailto: ${intern.email}">
                    <input type="submit" value="${intern.email}" />
                </form>
                </li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `
}

const generateManager = (manager) => {
    return `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <p class="card-text">Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${manager.id}</li>
                <li class="list-group-item">
                <form action="mailto: ${manager.email}">
                    <input type="submit" value="${manager.email}" />
                </form>
                </li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
}

const generateHTML = (team) => {
    employeeContainer = []
    console.log(team)
    //team shows undefined value
    for (let i = 0; i < team.length; i++) {
        const employee = team[i]
        const position = employee.getPosition()

        if(position === 'Engineer') {
            const engineerCard = generateEngineer(employee)
            employeeContainer.push(engineerCard)
        }

        if(position === 'Intern') {
            const internCard = generateIntern(employee)
            employeeContainer.push(internCard)
        }

        if(position === 'Manager') {
            const managerCard = generateManager(employee)
            employeeContainer.push(managerCard)
        }
    }

    const employeeCards = employeeContainer.join('')

    const generatedTeam = generatedHTML(employeeCards)
    return generatedTeam
}

const generatedHTML = (employeeCards) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link href="./style.css" rel="stylesheet" >
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div class="row row-cols-1 row-cols-md-3 g-4" id="container">
                ${employeeCards}
            </div>
        </main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}









module.exports = generateHTML