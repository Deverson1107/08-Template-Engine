const inquirer = require("inquirer");
const jest = require("jest");

//const Manager = require(".lib/Manager");
//const Intern = require(".lib/Intern");
//const Engineer = require(".lib/Engineer");

function promptuser() {
    return inquirer.prompt([
        {
        message: "Please enter employee name:",
        name: "employeeName"
        },
        {
        type: "list",
        message: "Please choose employee position:",
        choices: ['manager', 'engineer', 'intern'],
        name: "position"
        },
        {
        message: "Please enter employee email:",
        name: "email"
        },
        {
        type: "list",   
        message: "Enter additional employees?",
        choices: ['Yes', 'No'],
        name: "continue"
        }
    ])
    .then(function(answers){
        if (answers.continue === "Yes") {
            promptuser();
        }
        else {
            console.log("Employee submissions complete.");
        }
    })
}
promptuser();