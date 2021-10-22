const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const testGithub = "myTestGit";

  it("Can set the github with constructor", () => {
    const test = new Engineer("Zues", 2, "test@test.com", testGithub);
    expect(test.github).toBe(testGithub);
  });

  it("The getRole() should return'Engineer'", () => {
    const testGetRole = new Engineer("Timmy", 14, "testy@tesy.com", "testygit");
    expect(testGetRole.getRole()).toBe("Engineer");
  });

  it("Can get github username with the getGithub() method", () => {
    const testGithub = new Engineer("tiger", 44, "tisty@tisty.com", "myGithub");
    expect(testGithub.getGithub()).toBe("myGithub");
  });
});
