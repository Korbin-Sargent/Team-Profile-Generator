const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("initilization", () => {
    it("Should create an object", () => {
      const emp = new Engineer("Jerry", 50, "jerry@yahoo.com", "jerry-hub");
      expect(typeof emp).toBe("object");
    });
    it("Should add a name, id, email, and github to the new object", () => {
      const emp = new Engineer("Jerry", 50, "jerry@yahoo.com", "jerry-hub");

      expect(emp.name).toEqual("Jerry");
      expect(emp.id).toEqual(50);
      expect(emp.email).toEqual("jerry@yahoo.com");
      expect(emp.github).toEqual("jerry-hub");
    });
    it("should throw an error if no argument is provided", () => {
      const emp = () => new Engineer();
      expect(emp).toThrow();
    });
    it("should throw an error if name is not a string", () => {
      const emp = () => new Engineer(22, 50, "jerry@yahoo.com", "jerry-hub");
      const err = new Error(
        "expected parameter 'name' to be a non-empty string"
      );
      expect(emp).toThrowError(err);
    });
    it("should throw an error if id is not a number", () => {
      const emp = () =>
        new Engineer("jerry", "jerry", "jerry@yahoo.com", "jerry-hub");
      const err = new Error(
        "expected parameter 'id' to be a non-string positive number"
      );
      expect(emp).toThrowError(err);
    });
    it("should throw an error if id is not a positive number", () => {
      const emp = () =>
        new Engineer("jerry", -50, "jerry@yahoo.com", "jerry-hub");
      const err = new Error(
        "expected parameter 'id' to be a non-string positive number"
      );
      expect(emp).toThrowError(err);
    });
    it("should throw an error if email is not a string email address", () => {
      const emp = () => new Engineer("jerry", 50, "jerry", "jerry-hub");
      const err = new Error(
        "expected parameter 'email' to be a non-empty string email address"
      );
      expect(emp).toThrowError(err);
    });
    it("should throw an error if 'github' is not a string", () => {
      const emp = () => new Engineer(22, 50, "jerry@yahoo.com", 5);
      const err = new Error(
        "expected parameter github to be a non-empty string"
      );
      expect(emp).toThrowError(err);
    });
  });
  describe("getName", () => {
    it("Returns name with getName() is called", () => {
      const testName = "Jerry";
      const emp = new Engineer("Jerry", 50, "jerry@yahoo.com", "jerry-hub");
      expect(emp.name).toEqual(testName);
    });
  });
  describe("getId", () => {
    it("Returns ID when getID() is called", () => {
      const testId = 50;
      const emp = new Engineer("Jerry", 50, "jerry@yahoo.com", "jerry-hub");
      expect(emp.id).toEqual(testId);
    });
  });
  describe("getEmail", () => {
    it("Returns Email when getEmail() is called", () => {
      const testEmail = "jerry@yahoo.com";
      const emp = new Engineer("Jerry", 50, "jerry@yahoo.com", "jerry-hub");
      expect(emp.email).toEqual(testEmail);
    });
  });
  describe("getGitHub", () => {
    it("Returns Github when getGitHub() is called", () => {
      const testGitHub = `https://github.com/uncle-jerry`;
      const emp = new Engineer("Jerry", 50, "jerry@yahoo.com", "uncle-jerry");
      expect(emp.getGitHub()).toEqual(testGitHub);
    });
  });
  describe("getRole", () => {
    it("Returns Email when getRole() is called", () => {
      const testRole = "Engineer";
      const emp = new Engineer("Jerry", 50, "jerry@yahoo.com", "jerry-hub");
      expect(emp.getRole()).toEqual(testRole);
    });
  });
});
