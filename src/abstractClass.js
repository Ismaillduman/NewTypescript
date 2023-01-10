"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    addHolidays(holidays) {
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }
    }
}
class ItDepartment extends Department {
    constructor() {
        super("It Department");
        this.holidays = [];
    }
    printHolidays() {
        if (this.holidays.length === 0) {
            return console.log("There are no holidays ((: ");
        }
        console.log(`Here is the list of ${this.name} holidays`);
        this.holidays.forEach((holiday, index) => {
            console.log(`${index + 1}.${holiday.reason}, ${holiday.date}`);
        });
    }
}
class AdminDepartment extends Department {
    constructor() {
        super("Admin Department");
        this.holidays = [];
    }
    printHolidays() {
        if (this.holidays.length === 0) {
            return console.log("There are no holidays ((: ");
        }
        console.log(`Here is the list of ${this.name} holidays`);
        this.holidays.forEach((holiday, index) => {
            console.log(`${index + 1}.${holiday.reason}, ${holiday.date}`);
        });
    }
}
const itHolidays = [
    {
        date: new Date(2023, 10, 25),
        reason: "ITdepartment Day",
    },
    {
        date: new Date(2023, 12, 25),
        reason: "Christmas",
    }
];
const adminDepartmentHolidays = [
    {
        date: new Date(2023, 10, 25),
        reason: "Admin department Day",
    },
    {
        date: new Date(2023, 12, 25),
        reason: "Christmas",
    }
];
const itDepartment = new ItDepartment();
const adminDepartment = new AdminDepartment();
itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminDepartmentHolidays);
itDepartment.printHolidays();
adminDepartment.printHolidays();
//If I define an abstract method in an abstract class,
// I must have this method in the child class.
