const Intern = require('../lib/intern');

describe('internTests', () => {
    test('interns school should be returned', () => {
        const newIntern = new Intern ('Diane', 5271, 'D5271@gmail.com', 'Ole Miss University');
        expect(newIntern.getSchool()).toBe('Ole Miss University');
    })
    test("getRole returns Intern role", () => {
        const answers = new Intern("Diane", 5271, "D5271@gmail.com", 6895);
        expect(answers.getRole()).toBe("Intern");
    });
})