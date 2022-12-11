class Department {
    name:string;
    constructor(n: string) {
        this.name=n;
    }
    describe(){
console.log('DEPARTMENT: '+ this.name);


    }
}


const accouinting= new Department('Accounting');
console.log(accouinting);
accouinting.describe();



