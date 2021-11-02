const Engineer = require('../lib/engineer');

describe('engineerTests', () => {
    test('engineers github should be returned', () => {
        const newEngineer = new Engineer ('Diane', 5271, 'D5271@gmail.com', 'dianesgithub');
        expect(newEngineer.getGithub()).toBe('dianesgithub');
    })
    test("getRole returns Engineer role", () => {
        const answers = new Engineer("Diane", 5271, "D5271@gmail.com", 6895);
        expect(answers.getRole()).toBe("Engineer");
    });
})