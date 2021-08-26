const Employee = require("./employee");

//extends key value pairs from class Employee. Adding github property

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    if (
      typeof officeNumber !== "number" ||
      isNaN(officeNumber) ||
      officeNumber < 0
    ) {
      throw new Error(
        "expected parameter 'officeNumber' to be a non-string positive number"
      );
    }
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
