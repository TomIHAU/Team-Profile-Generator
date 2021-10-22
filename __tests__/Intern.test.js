const Intern = require("../lib/Intern");

describe("Intern", () => {
  const testSchool = "myTestSchool";

  it("Can set the school with constructor", () => {
    const test = new Intern("Hades", 1, "test@test.com", testSchool);
    expect(test.school).toBe(testSchool);
  });

  it("The getRole() should return 'Intern'", () => {
    const testGetRole = new Intern("Timmy", 14, "testy@tesy.com", "testygit");
    expect(testGetRole.getRole()).toBe("Intern");
  });

  it("Can get school with the getSchool() method", () => {
    const testGithub = new Intern("Lilly", 34, "rose@petal.com", "Monash");
    expect(testGithub.getSchool()).toBe("Monash");
  });
});
