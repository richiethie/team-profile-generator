const Employee = require('../lib/Employee')

describe('employee class', () => {
    it('creates employee object', () => {
        const employee = new Employee('Richie', 345, 'richiethie@gmail.com')
        expect(employee.name).toEqual(expect.any(String))
        expect(employee.id).toEqual(expect.any(Number))
        expect(employee.email).toEqual(expect.any(String))
    });

    it('gets an employee name', () => {
        const employee = new Employee('Richie', 345, 'richiethie@gmail.com')
        expect(employee.getName()).toEqual(expect.any(String))
    });

    it('gets an employee id', () => {
        const employee = new Employee('Richie', 345, 'richiethie@gmail.com')
        expect(employee.getId()).toEqual(expect.any(Number))
    });

    it('gets the employee email address', () => {
        const employee = new Employee('Richie', 345, 'richiethie@gmail.com')
        expect(employee.getEmail()).toEqual(expect.any(String))
    });

    it('gets the current position of a team member', () => {
        const employee = new Employee('Richie', 345, 'richiethie@gmail.com')
        expect(employee.getPosition()).toEqual("Employee")
    });
})