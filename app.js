const inquirer = require("inquirer");
const jest = require("jest");
const util = require("util");
const fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile);

//const Manager = require(".lib/Manager");
//const Intern = require(".lib/Intern");
//const Engineer = require(".lib/Engineer");

var ID = 0;

function promptuser() {
    return inquirer.prompt([
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
        //{
        //type: "list",   
        //message: "Enter additional employees?",
        //choices: ['Yes', 'No'],
        //name: "continue"
        //}
    ])
    .then(function(answers){
        var employeeName = answers.employeeName;

        var position = answers.position;
        if (position === "Manager") {
            return inquirer.prompt({
                message: "Please enter office number:",
                name: "info"
            });
        }
        else if (position === "Engineer") {
            return inquirer.prompt({
                message: "Please enter Github profile name:",
                name: "info"
            });
        }
        else if (position === "Intern") {
            return inquirer.prompt({
                message: "Please enter school name:",
                name: "info"
            })
        }
        var info = answers.info;
        var email = answers.email;
        ID++;
        console.log("Employee Name: " + employeeName);
        console.log("ID: " + ID);
        console.log("Position: " + position);
        console.log("Info: " + info);
        console.log("Employee Email: " + email);
        //if (answers.continue === "Yes") {
        //   promptuser();
        //}
        //else {
        //    console.log("Employee submissions complete.");
        //}
    })
}

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