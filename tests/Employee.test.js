const Employee = require('../lib/employee');

describe('getName', () => {
    it('employees name should be returned', () => {
        const newEmployee = new Employee ('Diane', 5271, 'D5271@gmail.com');
        expect(newEmployee.name).toBe('Diane');
    })
})

describe('getId', () => {
    it('employees id should be returned', () => {
        const newEmployee = new Employee ('Diane', 5271, 'D5271@gmail.com');
        expect(newEmployee.id).toBe(5271);
    })
})

describe('getEmail', () => {
    it('employees email should be returned', () => {
        const newEmployee = new Employee ('Diane', 5271, 'D5271@gmail.com');
        expect(newEmployee.email).toBe('D5271@gmail.com');
    })
})