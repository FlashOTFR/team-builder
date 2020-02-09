const inquirer = require("inquirer");

const makeManager = () => {
    inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?'
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?'
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is your office number?'
        }
      ]).then(answers =>{
          console.log(answers);
      });
}
const makeEngineer = () => {
    inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?'
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?'
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is your github?'
        }
      ]).then(answers =>{
          console.log(answers);
      });
}
const makeIntern = () => {
    inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?'
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?'
        },
        {
          type: 'input',
          name: 'school',
          message: 'What is your school?'
        }
      ]).then(answers =>{
          console.log(answers);
      });
}


const makeEmployee = () => {
         inquirer.prompt([
          {
            type: 'list',
            name: 'job',
            message: 'What is your job title?',
            choices: ['Manager', 'Engineer', 'Intern']
          }
        ]).then(answer => { 
            if(answer.job === 'Manager'){
                makeManager();
            }
            else if(answer.job === 'Engineer'){
                makeEngineer();
            }
            else if(answer.job === 'Intern'){
                makeIntern();
            }
        });
      }







makeEmployee();