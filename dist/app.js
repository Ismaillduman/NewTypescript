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
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'accouinting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}

const it = new Department('d1', 'department');
console.log(it);
it.addEmployee('Snow');
it.addEmployee('Targaryen');
it.printEmployeeInformation();
const accounting = new AccountingDepartment('d2', []);
accounting.addReport('something wrong');
accounting.printReports();


const accouinting = new Department('d1', 'accounting');
console.log(accouinting);

accouinting.addEmployee('Snow');
accouinting.addEmployee('Targaryen');
accouinting.printEmployeeInformation();
accouinting.describe();

