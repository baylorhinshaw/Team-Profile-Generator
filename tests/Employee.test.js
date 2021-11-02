const Employee = require('../lib/employee');

describe('employeeTests', () => {
    test('employees name should be returned', () => {
        const newEmployee = new Employee ('Diane', 5271, 'D5271@gmail.com');
        expect(newEmployee.getName()).toBe('Diane');
    })
    test('employees id should be returned', () => {
        const newEmployee = new Employee ('Diane', 5271, 'D5271@gmail.com');
        expect(newEmployee.getId()).toBe(5271);
    })
    test('employees email should be returned', () => {
        const newEmployee = new Employee ('Diane', 5271, 'D5271@gmail.com');
        expect(newEmployee.getEmail()).toBe('D5271@gmail.com');
    })
    test("getRole returns Employee role", () => {
        const answers = new Employee("Diane", 5271, "D5271@gmail.com", 6895);
        expect(answers.getRole()).toBe("Employee");
    });
})