// I am prompted to enter the engineer’s name, ID, email, and GitHub username

const inquirer = require("inquirer")

function engineerInfo() {
    console.log('Please fill out information for your engineer.');

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the engineer's name",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the engineer's employee ID",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email address",
        },
        {
            type: 'input',
            name: 'gitUser',
            message: "Please enter the engineer's GitHub username",
        },
    ])
    .then((data) => {
        console.log(data);
    })
}

module.exports = {engineerInfo};