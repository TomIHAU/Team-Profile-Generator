let HTMLInput = ``;

getEngineer = (engineer) => {
  return `<div class="card">
    <div class="card-header">
        <h3>${engineer.name}</h3>
        <p>Engineer</p>
        <i class="material-icons">perm_identity</i>
    </div>
    <div class="card-body">
        <p>ID: ${engineer.id}</p>
        <p>
            Email:
            <a href="mailto:${engineer.email}">${engineer.email}</a>
        </p>
        <p>
            Github:
            <a href="https://github.com/${engineer.github}"
            >${engineer.github}</a
            >
        </p>
    </div>
</div>`;
};

getIntern = (intern) => {
  return `<div class="card">
    <div class="card-header">
        <h3>${intern.name}</h3>
        <p>Intern</p>
        <i class="material-icons">child_care</i>
    </div>
    <div class="card-body">
        <p>ID: ${intern.id}</p>
        <p>
            Email:
            <a href="mailto:${intern.email}">${intern.email}</a>
        </p>
        <p>
            School: ${intern.school}
        </p>
    </div>
</div>`;
};

getManager = (manager) => {
  return `<div class="card">
  <div class="card-header">
    <h3>${manager.name}</h3>
    <p>Manager</p>
    <i class="material-icons">record_voice_over</i>
  </div>
  <div class="card-body">
    <p>ID: ${manager.id}</p>
    <p>
      Email:
      <a href="mailto:${manager.email}">${manager.email}</a>
    </p>
    <p>
      Office Number: ${manager.officeNum}    
    </p>
  </div>
</div>`;
};

function determine(data) {
  console.log("this worked");
  console.log(data);
  data.forEach((member) => {
    if (member.getRole() === "Engineer") {
      console.log("hi en");
      HTMLInput += getEngineer(member);
    }
    if (member.getRole() === "Intern") {
      console.log("hi in");
      HTMLInput += getIntern(member);
    }
    if (member.getRole() === "Manager") {
      console.log("hi man");
      HTMLInput += getManager(member);
    }
  });
  return HTMLInput;
}
function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../assets/style.css" />
    <title>Team Profile</title>
  </head>
  <body>
    <header>
      <h1>Team Profile</h1>
    </header>
    
    <main>
      <div class="cardRow">   
      ${determine(data)}         
      </div>
    </main>
  </body>
</html>
`;
}

module.exports = generateHTML;
