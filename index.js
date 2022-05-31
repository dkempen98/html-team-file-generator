// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// Add manager prompt, email should be a link

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// While loop entered when done with manager, list prompt determines outcome

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// engineer file triggers when selected, github user and emails should be links

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// intern file used, email should be a link

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// exit while loop and generate file

const fs = require('fs');
const inquirer = require('inquirer');
const manager = require('./manager')
const engineer = require('./engineer')
const intern = require('./intern')

var fileText = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <title>Team</title>
</head>
<body>
    <h1 class="d-flex justify-content-center bg-dark text-light p-5">My Team</h1>
    <section class="d-flex justify-content-around flex-wrap">`;

console.log('Please fill out information for your manager.');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Please enter the manager's name",
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's employee ID",
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email address",
    },
    {
        type: 'input',
        name: 'office',
        message: "Please enter the manager's office number",
    },
])
.then((data) => {
    console.log(data);
    fileText = manager.managerInfo(data, fileText)
    addMember();
})

function addMember() {
    let options = ['Yes, add an engineer', 'Yes, add an intern', 'No, I am done adding people']
    let [engineer, intern, complete] = options
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberType',
            message: 'Would you like to add an employee?',
            choices: options
        }
    ])
    .then((data) => {
        console.log(data);
        if (data.memberType === engineer) {
            console.log('ENGINEER');
        } else if (data.memberType === intern) {
            console.log('INTERN');
        } else if (data.memberType === complete) {
            console.log('DONE');
        } else {
            console.log('ERROR: Invalid Option Selected');
        }
    })
}

