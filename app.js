const inquirer = require('inquirer')

const fs = require('fs')

function userInfo() {
    inquirer.prompt([
        {
            type :"input",
            name:"title",
            message:"Enter Project Title"
        },
        {
            type :"input",
            name:"description",
            message:"Enter Project Description"
        },
        {
            type :"input",
            name:"contributors",
            message:"Enter Contribution Guidelines"
        },
        {
            type :"input",
            name:"installation",
            message:"Enter Installation instructions"
        },
        {
            type :"input",
            name:"usage",
            message:"Enter Usage Requirements"
        },
        {
            type :"input",
            name:"test",
            message:"Enter Tests Instructions"
        },
        {
            type :"input",
            name:"github",
            message:"Enter GitHub User Name  "
        },
        {
            type :"list",
            name:"license",
            message:"Enter License",
            choices: ["MIT", "ISC", "GPL", "APACHE"]
        },
        {
            type :"input",
            name:"email",
            message:"Enter your Email"
        },
        

    ]).then(function(answers){
        console.log(answers);
        var readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage) 
* [License](#license)
* [Contributors](#contributors)
* [Tests](#test)
* [GitHub](#github)
* [Email](#email)

### Installation
${answers.installation}

### Usage
${answers.usage}

### License
![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)

### Contributors
${answers.contributors}

### Tests
${answers.test}

### GitHub
${answers.github}

### Email
If you have any questions, feel free to reach me at ${answers.email}

}
        `
        console.log(readmeContent);
        fs.writeFileSync("README.md", readmeContent, function(err){
            if(err) throw err
        })
        console.log("readme generated")
    })
}

userInfo();