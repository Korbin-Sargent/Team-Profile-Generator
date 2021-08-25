const Employee = require("./employee");

//extends key value pairs from class Employee. Adding github property

class Engineer extends Employee {
  constructor(name, id, email, github) {
    if (typeof github !== "string" || !github.trim().length) {
      throw new Error("expected parameter github to be a non-empty string");
    }
    super(name, id, email);
    this.github = github;
  }

  getGitHub() {
    return `https://github.com/${this.github}`;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
