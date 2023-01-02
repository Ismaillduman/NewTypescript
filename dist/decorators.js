"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
//# sourceMappingURL=decorators.js.map