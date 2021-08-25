class Employee = require('../lib/employee');

describe("Employee", () => {
    describe("initilization", () => {
        it("Should create an object with a Name, ID, and Email", () => {
            const emp = new Employee();

            expect(typeOf(emp)).toBe("object");
            });
        it("Should add a name, id and email to the new object", () => {
            const emp = new Employee ("Jerry", 69, "jerry@yahoo.com");

            expect(emp.name).toEqual("Jerry");
            expect(emp.id).toEqual(69);
            expect(emp.email).toEqual("jerry@yahoo.com");
        });
    });
    describe("getName", () => {
        it("Returns name with getName() is called", () => {
            const testName = "Jerry";
            const emp = new Employee("Jerry");
            expect(emp.name).toEqual(testName);
        });
    });
    describe("getId", () => {
        it("Returns ID when getID() is called", () => {
            const testId = 50
            const emp = new Employee("Jerry", 50);
            expect(emp.id).toEqual(testId);
        });
    });
    describe("getEmail", () => {
        it("Returns Email when getEmail() is called", () => {
            const testEmail = "jerry@yahoo.com";
            const emp = new Employee("Jerry", 50);
            expect(emp.email).toEqual(testEmail);
        });
    });
     describe("getEmail", () => {
        it("Returns Email when getEmail() is called", () => {
            const testRole = "Employee"
            const emp = new Employee("Jerry", 50, "jerry@yahoo.com");
            expect(emp.role).toEqual(testRole);
        });
     });
});    