class Department {
    name:string;
    private employees: string[]=[]
    constructor(n: string) {
        this.name=n;
    }

    desscribe(){
        console.log('Department:' + this.name);
        
    }

    addEmployee(employee: string){
this.employees.push(employee);

    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);        
    }
}


const accouinting= new Department('Accounting');
console.log(accouinting);
accouinting.addEmployee('Snow');
accouinting.addEmployee('Targaryen');
accouinting.printEmployeeInformation();

//accouinting.employees[2]='Anna';
//public or private typescript supprt but JS NOT