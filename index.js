const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const fs = require("fs");
const { restoreDefaultPrompts } = require("inquirer");

const questions = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee's id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's email address?",
    name: "email",
  },
  {
    type: "list",
    message: "What is the employee's role",
    name: "role",
    choices: ["Manager", "Intern", "Engineer"],
  },
];

const manangerQuestion = [
  {
    type: "number",
    message: "What is the office number for this Manager?",
    name: "officeNumber",
  },
];
const internQuestion = [
  {
    type: "input",
    message: "What is the name of the school the Intern attended or attends?",
    name: "school",
  },
];
const engineerQuestion = [
  {
    type: "input",
    message: "What is the github username for this engineer",
    name: "github",
  },
];
const finishQuestion = [
  {
    type: "list",
    message: "Would you like to add another team member?",
    name: "finishQuestion",
    choices: ["Yes", "No"],
  },
];

const teamArray = [];
let generatedHTML = "";
let spec;

function finishQuestionPrompt() {
  inquirer.prompt(finishQuestion).then((answer) => {
    console.log(teamArray);
    if (answer.finishQuestion === "No") {
      // generate html function should go here
      teamArray.map((result) => {
        console.log(result.getRole());

        if (result.getRole() === "Manager") {
          spec = result.getOfficeNumber();
        } else if (result.getRole() === "Engineer") {
          spec = result.getGitHub();
        } else {
          spec = result.getSchool();
        }
        generatedHTML += `
          <div class="card-body">
            <h1 class="card-title">${result.getName()}</h1>
            <h2 class="card-title">${result.getRole()}</h2>
          </div>
            <p class="card-text textStyling">${result.getId()}</p>
            <p class="card-text textStyling">${result.getEmail()}</p>
            <p class="card-text textStyling">${spec}</p>
        </div>
        `;
      });
      console.log(generatedHTML);
    } else {
      addNewEmployee();
    }
  });
}

function addNewEmployee() {
  //present the user with questions
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    if (data.role === "Manager") {
      inquirer.prompt(manangerQuestion).then((managerData) => {
        console.log(managerData);
        const newManager = new Manager(
          data.name,
          Number(data.id),
          data.email,
          Number(managerData.officeNumber)
        );
        console.log(newManager);
        teamArray.push(newManager);
        finishQuestionPrompt();
      });
    }
    if (data.role === "Intern") {
      inquirer.prompt(internQuestion).then((internData) => {
        console.log(internData);
        const newIntern = new Intern(
          data.name,
          Number(data.id),
          data.email,
          internData.school
        );
        console.log(newIntern);
        teamArray.push(newIntern);
        console.log(teamArray);
        finishQuestionPrompt();
      });
    }
    if (data.role === "Engineer") {
      inquirer.prompt(engineerQuestion).then((engineerData) => {
        console.log(engineerData);
        const newEngineer = new Engineer(
          data.name,
          Number(data.id),
          data.email,
          engineerData.github
        );
        console.log(newEngineer);
        teamArray.push(newEngineer);
        console.log(teamArray);
        finishQuestionPrompt();
      });
    }
  });
}

addNewEmployee();
