const Employee = require("./Employee");

/*In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`*/
class Intern extends Employee {
  constructor(school) {
    this.school = school;
    super(name, id, email);
  }
  getSchool() {}
  getRole() {
    return "Intern";
  }
}
