class Employee {
    constructor(name, id, email){
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = role;
    }
    getName(){return this.name}
    getEmail(){return this.email}
    getRole(){return this.role}
    getId(){return this.id}
}

module.exports = Employee;