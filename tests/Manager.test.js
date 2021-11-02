const Manager = require('../lib/manager');

describe('managerTests', () => {
    test('managers officeNumber should be returned', () => {
        const newManager = new Manager ('Diane', 5271, 'D5271@gmail.com', 6895);
        expect(newManager.getOfficeNumber()).toBe(6895);
    })
    test("getRole returns Manager role", () => {
        const answers = new Manager("Diane", 5271, "D5271@gmail.com", 6895);
        expect(answers.getRole()).toBe("Manager");
    });
})