const Employee = require("../lib/Employee");

describe("Employee", () => {
  const testName = "Bilbo";
  const testId = 111;
  const testEmail = "test@test.com";

  it("Can set the name with constructor", () => {
    const test = new Employee(testName);
    expect(test.name).toBe(testName);
  });

  it("Can set the id with constructor", () => {
    const test = new Employee("Randy", testId);
    expect(test.id).toBe(testId);
  });

  it("Can set the email with constructor", () => {
    const test = new Employee("Steve", 13, testEmail);
    expect(test.email).toBe(testEmail);
  });

  it("Can use the getName() method to return the name value", () => {
    const test = new Employee("Kate");
    expect(test.getName()).toBe("Kate");
  });

  it("Can use the getId() method to return the id value", () => {
    const test = new Employee("Max", 86);
    expect(test.getId()).toBe(86);
  });

  it("Can use the getEmail() method to return the value of email", () => {
    const test = new Employee("Judas", 13, "silver@gmail.com");
    expect(test.getEmail()).toBe("silver@gmail.com");
  });
});
