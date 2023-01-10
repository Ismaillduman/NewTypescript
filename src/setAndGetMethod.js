"use strict";
class Personz {
    fixUserAge(age) {
        if (age < 0 || age > 200) {
            throw new Error(" The age must be with in 0-200");
        }
        return age;
    }
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this.fixUserAge(_age);
    }
    set name(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set age(age) {
        this.fixUserAge(age);
        this._age = age;
    }
    get age() {
        return this._age;
    }
}
const personz = new Personz("Carter", 78);
console.log(personz.name);
console.log(personz.age);
//set method can be able to have only one parameters
//get method can't have a parameters
