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
        name: "officeNum",
        message: "What is the Managers office number?",
      },
    ])
    .then((input) => {
      const manager = new Manager(
        input.name,
        input.id,
        input.email,
        input.officeNum
      );
      team.push(manager);
    });
};
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        choices: ["Engineer", "Intern"],
        message: "What position is the employee?",
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

      {
        when: (input) => input.position === "Engineer",
        type: "input",
        name: "github",
        message: "What is the employee's github username?",
      },
      {
        when: (input) => input.position === "Intern",
        type: "input",
        name: "school",
        message: "What school is the intern from?",
      },
      {
        type: "confirm",
        name: "anotherEmployee",
        message: "Would you like to add more employees?",
        default: false,
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
      if (input.anotherEmployee) {
        return addEmployee();
      } else {
        return team;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) =>
    err ? console.log(err) : console.log("Successfully created html")
  );
};
//true false if so i can create another employee or finish loop and create html
addManager().then(addEmployee).then; //generate html or something
//.writeFile
