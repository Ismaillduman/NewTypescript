"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    desscribe() {
        console.log('Department:' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accouinting = new Department('Accounting');
console.log(accouinting);
accouinting.addEmployee('Snow');
accouinting.addEmployee('Targaryen');
accouinting.printEmployeeInformation();
//# sourceMappingURL=app.js.map