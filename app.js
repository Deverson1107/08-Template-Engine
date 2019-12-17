const inquirer = require("inquirer");
const jest = require("jest");
const util = require("util");
const fs = require("fs");

//const writeFileAsync = util.promisify(fs.writeFile);

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var ID = 0;
const Managers = [];
const Engineers = [];
const Interns = [];


var promptForBasicInfo = function () {
    inquirer.prompt(
        [
            {
                message: "Please enter employee name:",
                name: "employeeName"
            },
            {
                type: "list",
                message: "Please choose employee position:",
                choices: ['Manager', 'Engineer', 'Intern'],
                name: "position"
            },
            {
                message: "Please enter employee email:",
                name: "email"
            },
            {
                message: "Please enter office number:",
                name: "officeNumber",
                when: (answers) => answers.position === 'Manager'
            },
            {
                message: "Please enter github profile name:",
                name: "profileName",
                when: (answers) => answers.position === 'Engineer'
            },
            {
                message: "Please enter school name:",
                name: "profileName",
                when: (answers) => answers.position === 'Intern'
            },
        ]
    ).then(
        function(answers)
        {
            ID++;
            if (answers.position === 'Manager') {
                var manager = new Manager(ID, answers.employeeName, answers.email, answers.officeNumber);
                Managers.push(manager);
            }
            if (answers.position === 'Engineer') {
                var manager = new Engineer(ID, answers.employeeName, answers.email, answers.github);
                Managers.push(engineer);
            }
            if (answers.position === 'Intern') {
                var manager = new Intern(ID, answers.employeeName, answers.email, answers.school);
                Managers.push(intern);
            }
        }
    );
}

   
function promptuser() {
    promptForBasicInfo();
};
  
function generateHTML(answers) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>
<body>
    <h1 class="col-12 py-4 display-4 text-center my-4" style= "background-color:black; color: white";>My Team</h1>
    <div class="row">
        
        <div class="card" style="width: 18rem;">
            <div class="card-body" style= "background-color:black; color: white">
                <h5 class="card-title text-center">${answers.employeeName}</h5>
                <p class="card-text text-center">${answers.position}</p>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answers.ID}</li>
                    <li class="list-group-item">EMAIL: ${answers.email}</li>
                    <li class="list-group-item">INFO:</li>
                </ul>
        </div>
        
    </div>  
</body>
</html>`;
}

promptuser()
//  .then(function(answers) {
//    const html = generateHTML(answers);
//    return writeFileAsync("index.html", html);
//  })
//  .then(function() {
//    console.log("Successfully wrote to index.html");
//  })
//  .catch(function(err) {
//    console.log(err);
//  });