const Employee = require("./Employee");


class Manager extends Employee  {
    constructor(ID, name, email, officenum) {
        super(ID, name, email, 'Manager');
        this.officenum = officenum;
    }
}
 
module.exports = Manager;