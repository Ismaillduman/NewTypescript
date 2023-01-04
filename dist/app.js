"use strict";
class Department1 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
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
//# sourceMappingURL=app.js.map