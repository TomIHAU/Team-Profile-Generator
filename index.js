const fs = require("fs");
const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let team = [];

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Managers id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Managers email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Managers office number?",
      },
    ])
    .then((input) => {
      const manager = new Manager(
        input.name,
        input.id,
        input.email,
        input.officeNumber
      );
      team.push(manager);
    });
};
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "position",
        message: "what is the employee's role at the company?",
      },
      {
        type: "input",
        name: "name",
        message: "what is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },
      /// if statement for eng or int
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Managers name?",
      },
    ])
    .then((input) => {
      if (input.position === "Engineer") {
        const employee = new Engineer(
          input.name,
          input.id,
          input.email,
          input.github
        );
        team.push(employee);
      } else if (input.position === "Intern") {
        const employee = new Intern(
          input.name,
          input.id,
          input.email,
          input.school
        );
        team.push(employee);
      }
    });
};
//true false if so i can create another employee or finish loop and create html
addManager().then(addEmployee).then; //generate html or something
