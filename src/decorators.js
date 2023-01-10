"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// CLASS DECORATORS
function CarDecorator(constructor) {
    constructor.prototype.date = new Date();
    constructor.prototype.giveMeDate = function () {
        alert(this.date);
    };
}
function OtherDecorator(name) {
    if (name === "Mike") {
        return function (constructor) {
            constructor.prototype.other = "other value";
        };
    }
    else {
        return null;
    }
}
let Car = class Car {
    // date:any;
    constructor(brand) {
        this.brand = brand;
        // this.date=this.date;
        //console.log("----class constructor invoked---");
    }
};
Car = __decorate([
    OtherDecorator("Mike"),
    CarDecorator
], Car);
const car = new Car('Ford');
console.log(car.brand);
console.log(car.other);
// console.log((car as any).giveMeDate());
// @CarDecorator
// class Vehicle{}
// const vehicle= new Vehicle();
// console.log('vehicle date: ', (vehicle as any).date);
//METHOD DECORATORS
function PrintDecorator(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    descriptor.writable = true;
}
class Tool {
    constructor(name) {
        this.name = name;
    }
    price() {
        console.log('$ 200');
    }
    print() {
        console.log("print tool");
    }
}
__decorate([
    PrintDecorator
], Tool.prototype, "print", null);
const tool = new Tool("Hammer");
tool.print();
tool.print = function () {
    console.log("something else");
};
tool.print();
