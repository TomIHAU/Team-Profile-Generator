const Employee = require("./Employee");

/*In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`*/
class Engineer extends Employee {
  constructor(github) {
    this.github = github;
    super(name, id, email);
  }
  getGithub() {}
  getRole() {
    return "Engineer";
  }
}
