const Intern = require('../lib/intern');

describe('getSchool', () => {
    it('interns school should be returned', () => {
        const newIntern = new Intern ('Diane', 5271, 'D5271@gmail.com', 'Ole Miss University');
        expect(newIntern.getSchool()).toBe('Ole Miss University');
    })
})