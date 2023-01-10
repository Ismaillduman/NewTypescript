"use strict";
class Department1 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // private name:string;
        // private id:string;
        this.employees = [];
        // this.name=n;
        // this.id = id;
    }
    desscribe() {
        console.log(`Department1 (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department1 {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department1 {
    constructor(id, reports) {
        super(id, 'accouinting');
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
// const it= new Department1('d1','department');
// console.log(it);
// it.addEmployee('Snow');
// it.addEmployee('Targaryen');
// it.printEmployeeInformation();
// const accounting= new AccountingDepartment('d2',[]);
// accounting.addReport('something wrong');
// accounting.printReports();
// //it.employees[2]='Anna';
// //public or private typescript supprt but JS NOT
