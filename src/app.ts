class Department {
    // private name:string;
    // private id:string;
    private employees: string[]=[];
    constructor(public name: string, private readonly id:string) {
        // this.name=n;
        // this.id = id;
    }

    describe(){
console.log('DEPARTMENT: '+ this.name);


    }
}


    desscribe(this:Department){
        console.log(`Department (${this.id}): ${this.name}`);
        
    }


    addEmployee(employee: string){
this.employees.push(employee);

    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);        
    }
}
=======
const accouinting= new Department('Accounting');
console.log(accouinting);
accouinting.describe();



const accouinting= new Department('d1','accounting');
console.log(accouinting);
accouinting.addEmployee('Snow');
accouinting.addEmployee('Targaryen');
accouinting.printEmployeeInformation();

//accouinting.employees[2]='Anna';
//public or private typescript supprt but JS NOT