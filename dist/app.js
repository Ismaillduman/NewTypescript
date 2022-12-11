"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('DEPARTMENT: ' + this.name);
    }
}
const accouinting = new Department('Accounting');
console.log(accouinting);
accouinting.describe();
//# sourceMappingURL=app.js.map