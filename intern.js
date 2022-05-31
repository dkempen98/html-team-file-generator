// I am prompted to enter the intern’s name, ID, email, and school

const inquirer = require("inquirer")

function internInfo() {
    console.log('Please fill out information for your intern.');

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the intern's name",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the intern's employee ID",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email address",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
        },
    ])
    .then((data) => {
        console.log(data);
    })
}

module.exports = {internInfo};