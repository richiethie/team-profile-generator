class Employee {
    constructor (position, name, id, email) {
        this.position = position
        this.name = name
        this.id = id 
        this.email = email
    }

    getPosition() {
        return this.position
    }

    getName () {
        return this.name
    }

    getId () {
        return this.id
    }

    getEmail() {
        return this.email
    }

}


module.exports = Employee