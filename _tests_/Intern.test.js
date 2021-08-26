const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("initilization", () => {
    it("Should create an object", () => {
      const emp = new Intern(
        "Jerry",
        50,
        "jerry@yahoo.com",
        "Denver University"
      );
      expect(typeof emp).toBe("object");
    });
    it("Should add a name, id, email, and github to the new object", () => {
      const emp = new Intern(
        "Jerry",
        50,
        "jerry@yahoo.com",
        "Denver University"
      );

      expect(emp.name).toEqual("Jerry");
      expect(emp.id).toEqual(50);
      expect(emp.email).toEqual("jerry@yahoo.com");
      expect(emp.school).toEqual("Denver University");
    });
    it("should throw an error if no argument is provided", () => {
      const emp = () => new Intern();
      expect(emp).toThrow();
    });
    it("should throw an error if name is not a string", () => {
      const emp = () =>
        new Intern(22, 50, "jerry@yahoo.com", "Denver University");
      const err = new Error(
        "expected parameter 'name' to be a non-empty string"
      );
      expect(emp).toThrowError(err);
    });
    it("should throw an error if id is not a number", () => {
      const emp = () =>
        new Intern("jerry", "jerry", "jerry@yahoo.com", "Denver University");
      const err = new Error(
        "expected parameter 'id' to be a non-string positive number"
      );
      expect(emp).toThrowError(err);
    });
    it("should throw an error if id is not a positive number", () => {
      const emp = () =>
        new Intern("jerry", -50, "jerry@yahoo.com", "Denver University");
      const err = new Error(
        "expected parameter 'id' to be a non-string positive number"
      );
      expect(emp).toThrowError(err);
    });
    it("should throw an error if email is not a string email address", () => {
      const emp = () => new Intern("jerry", 50, "jerry", "Denver University");
      const err = new Error(
        "expected parameter 'email' to be a non-empty string email address"
      );
      expect(emp).toThrowError(err);
    });
    it("should throw an error if school is not a string", () => {
      const emp = () => new Intern(22, 50, "jerry@yahoo.com", 5);
      const err = new Error(
        "expected parameter school to be a non-empty string"
      );
      expect(emp).toThrowError(err);
    });
  });
  describe("getName", () => {
    it("Returns name with getName() is called", () => {
      const testName = "Jerry";
      const emp = new Intern(
        "Jerry",
        50,
        "jerry@yahoo.com",
        "Denver University"
      );
      expect(emp.name).toEqual(testName);
    });
  });
  describe("getId", () => {
    it("Returns ID when getID() is called", () => {
      const testId = 50;
      const emp = new Intern(
        "Jerry",
        50,
        "jerry@yahoo.com",
        "Denver University"
      );
      expect(emp.id).toEqual(testId);
    });
  });
  describe("getEmail", () => {
    it("Returns Email when getEmail() is called", () => {
      const testEmail = "jerry@yahoo.com";
      const emp = new Intern(
        "Jerry",
        50,
        "jerry@yahoo.com",
        "Denver University"
      );
      expect(emp.email).toEqual(testEmail);
    });
  });
  describe("getSchool", () => {
    it("Returns School when getSchool() is called", () => {
      const testSchool = "Denver University";
      const emp = new Intern(
        "Jerry",
        50,
        "jerry@yahoo.com",
        "Denver University"
      );
      expect(emp.getSchool()).toEqual(testSchool);
    });
  });
  describe("getRole", () => {
    it("Returns role when getRole() is called", () => {
      const testRole = "Intern";
      const emp = new Intern(
        "Jerry",
        50,
        "jerry@yahoo.com",
        "Denver University"
      );
      expect(emp.getRole()).toEqual(testRole);
    });
  });
});
