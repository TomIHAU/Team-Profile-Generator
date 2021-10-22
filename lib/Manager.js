const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    this.officeNum = officeNum;
    super(name, id, email);
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
