const Manager = require("../lib/Manager");

describe("Manager", () => {
  const ofNumber = 404;

  it("Can set the office number with constructor", () => {
    const test = new Manager("Poseidon", 3, "wet@water.com", ofNumber);
    expect(test.officeNum).toBe(ofNumber);
  });

  it("The getRole() should return 'Manager'", () => {
    const testGetRole = new Manager("Scott", 74, "ez@pz.com", "greatScott");
    expect(testGetRole.getRole()).toBe("Manager");
  });
});
