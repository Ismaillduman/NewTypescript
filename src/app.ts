class Department {
    // private name:string;
    // private id:string;
    private employees: string[]=[];
    constructor(public name: string, private id:string) {
        // this.name=n;
        // this.id = id;
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


const accouinting= new Department('d1','department');
console.log(accouinting);
accouinting.addEmployee('Snow');
accouinting.addEmployee('Targaryen');
accouinting.printEmployeeInformation();

//accouinting.employees[2]='Anna';
//public or private typescript supprt but JS NOT