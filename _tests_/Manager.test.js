const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("initilization", () => {
    it("Should create an object", () => {
      const emp = new Manager("Jerry", 50, "jerry@yahoo.com", 1);
      expect(typeof emp).toBe("object");
    });
    it("Should add a name, id, email, and github to the new object", () => {
      const emp = new Manager("Jerry", 50, "jerry@yahoo.com", 1);

      expect(emp.name).toEqual("Jerry");
      expect(emp.id).toEqual(50);
      expect(emp.email).toEqual("jerry@yahoo.com");
      expect(emp.officeNumber).toEqual(1);
    });

    it("should throw an error if no argument is provided", () => {
      const emp = () => new Manager();
      expect(emp).toThrow();
    });

    it("should throw an error if name is not a string", () => {
      const emp = () => new Manager(22, 50, "jerry@yahoo.com", 1);
      const err = new Error(
        "expected parameter 'name' to be a non-empty string"
      );
      expect(emp).toThrowError(err);
    });

    it("should throw an error if id is not a number", () => {
      const emp = () => new Manager("jerry", "jerry", "jerry@yahoo.com", 1);
      const err = new Error(
        "expected parameter 'id' to be a non-string positive number"
      );
      expect(emp).toThrowError(err);
    });

    it("should throw an error if id is not a positive number", () => {
      const emp = () => new Manager("jerry", -50, "jerry@yahoo.com", 1);
      const err = new Error(
        "expected parameter 'id' to be a non-string positive number"
      );
      expect(emp).toThrowError(err);
    });

    it("should throw an error if email is not a string email address", () => {
      const emp = () => new Manager("jerry", 50, "jerry", 1);
      const err = new Error(
        "expected parameter 'email' to be a non-empty string email address"
      );
      expect(emp).toThrowError(err);
    });

    it("should throw an error if office number is a string", () => {
      const emp = () => new Manager(22, 50, "jerry@yahoo.com", "five");
      const err = new Error(
        "expected parameter 'officeNumber' to be a non-string positive number"
      );
      expect(emp).toThrowError(err);
    });
    it("should throw an error if office number is a negative number", () => {
      const emp = () => new Manager(22, 50, "jerry@yahoo.com", -8);
      const err = new Error(
        "expected parameter 'officeNumber' to be a non-string positive number"
      );
      expect(emp).toThrowError(err);
    });
  });

  describe("getName", () => {
    it("Returns name with getName() is called", () => {
      const testName = "Jerry";
      const emp = new Manager("Jerry", 50, "jerry@yahoo.com", 1);
      expect(emp.name).toEqual(testName);
    });
  });

  describe("getId", () => {
    it("Returns ID when getID() is called", () => {
      const testId = 50;
      const emp = new Manager("Jerry", 50, "jerry@yahoo.com", 1);
      expect(emp.id).toEqual(testId);
    });
  });
  describe("getEmail", () => {
    it("Returns Email when getEmail() is called", () => {
      const testEmail = "jerry@yahoo.com";
      const emp = new Manager("Jerry", 50, "jerry@yahoo.com", 1);
      expect(emp.email).toEqual(testEmail);
    });
  });

  describe("getOfficeNumber", () => {
    it("Returns Office Numer when getOfficeNumber() is called", () => {
      const testOfficeNumber = 1;
      const emp = new Manager("Jerry", 50, "jerry@yahoo.com", 1);
      expect(emp.getOfficeNumber()).toEqual(testOfficeNumber);
    });
  });

  describe("getRole", () => {
    it("Returns Email when getRole() is called", () => {
      const testRole = "Manager";
      const emp = new Manager("Jerry", 50, "jerry@yahoo.com", 1);
      expect(emp.getRole()).toEqual(testRole);
    });
  });
});
