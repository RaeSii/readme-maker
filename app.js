const inquirer = require('inquirer')

const fs = require('fs')

function userInfo() {
    inquirer.prompt([
        {
            type :"input",
            name:"title",
            message:"Enter Project title"
        },
        {
            type :"input",
            name:"description",
            message:"Enter Project Description"
        },
        {
            type :"input",
            name:"contributors",
            message:"Enter Project title"
        },
        {
            type :"input",
            name:"installation",
            message:"Enter "
        },
        {
            type :"input",
            name:"usage",
            message:"Enter Usage Requirements"
        },
        {
            type :"input",
            name:"Test",
            message:"Enter Project title"
        },
        {
            type :"input",
            name:"GitHub",
            message:"Project Usage Requireme"
        },
        {
            type :"list",
            name:"License",
            message:"Enter Project title",
            choices: ["MIT", "ISC", "GPL", "APACHE"]
        },
        {
            type :"input",
            name:"Email",
            message:"Enter Email"
        },
        

    ]).then(function(answers){
        console.log(answers);
        var readmeContent = `
# ${answers.title}

## Table of Contents:
* [Installation](#installation)
* [GitHub](#github)
* [Usage](#usage) 
* [Description](#description)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Email](#Email)

### Instalation
${answers.instllation}

### GitHub
${answers.github}

### Usage
${answers.usage}

### Description
${answers.description}

### License
![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)

### Contributors
${answers.contributors}

### Tests
${answers.tests}

### Email
If you have any questions, feel free to reach me at ${answers.email}

}
        `
        console.log(readmeContent);
    })
}

userInfo();