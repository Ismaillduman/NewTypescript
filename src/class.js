"use strict";
class Personx {
    greet() {
        return `Hello ${this.name} `;
    }
    constructor(name, email) {
        this.email = email;
        this.name = name;
    }
}
const personx = new Personx('scott', 'adam');
const person2 = new Personx('scarlet', 'johnson');
console.log(personx);
console.log(person2);
console.log(personx.greet());
//INHERITANCE
class User1 {
    constructor(name, email, age) {
        this.age = age;
        this.email = email;
        this.name = name;
    }
}
class AdminUser1 extends User1 {
    constructor(name, email, age, user1Reporting) {
        //super keyword when i want to use my constructor on child class 
        super(name, email, age); // attention to order
        this.isAdmin = true;
        this.user1Reporting = user1Reporting;
    }
}
const user1 = new User1("jack", "jack@email", 45);
const admin = new AdminUser1("Cavin", "cavin@email", 56, 5);
console.log(user1);
console.log(admin);
