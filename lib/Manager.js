const Employee = require("./Employee");

/*In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`*/
class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
    super(name, id, email);
  }
  getRole() {
    return "Manager";
  }
}
