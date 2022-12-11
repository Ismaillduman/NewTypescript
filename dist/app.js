"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    desscribe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    describe() {
        console.log('DEPARTMENT: ' + this.name);
    }
}
const accouinting = new Department('d1', 'accounting');
console.log(accouinting);

accouinting.addEmployee('Snow');
accouinting.addEmployee('Targaryen');
accouinting.printEmployeeInformation();
accouinting.describe();
