const Manager = require('../lib/manager');

describe('getOfficeNumber', () => {
    it('managers officeNumber should be returned', () => {
        const newManager = new Manager ('Diane', 5271, 'D5271@gmail.com', 6895);
        expect(newManager.officeNumber).toBe(6895);
    })
})