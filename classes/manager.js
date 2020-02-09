const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.github = github;
        this.role = "Manager";

    }
    getOfficeNumber() {return this.officeNumber}
    getRole() {return this.role}
}

module.exports = Engineer