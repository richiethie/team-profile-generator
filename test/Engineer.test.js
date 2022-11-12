const Engineer = require('../lib/Engineer')

describe('creates an engineer object', () => {
    it('gets github username from engineer', () => {
        const engineer = new Engineer('Richie', 201, 'richie.dev@gmail.com', 'richiethie')
        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))

    });
    it('gets the position of this team member', () => {
        const engineer = new Engineer('Richie', 201, 'richie.dev@gmail.com', 'richiethie')
        expect(engineer.getPosition()).toEqual("Engineer")
    })
})