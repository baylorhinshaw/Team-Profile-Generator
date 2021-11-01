const Engineer = require('../lib/engineer');

describe('getGithub', () => {
    it('engineers github should be returned', () => {
        const newEngineer = new Engineer ('Diane', 5271, 'D5271@gmail.com', 'dianesgithub');
        expect(newEngineer.getGithub()).toBe('dianesgithub');
    })
})