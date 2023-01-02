class Department {
    // private name:string;
    // private id:string;
    protected employees: string[]=[];

  

    constructor(public name: string, private readonly id:string) {
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




class ITDepartment extends Department{
admins: string[];
constructor(id:string,admins: string[]){
super(id,'IT');
this.admins= admins;
}
}

class AccountingDepartment extends Department{

    constructor(id:string, private reports:string[]){
      super(id,'accouinting');
    }

    addEmployee(name: string) {
        if(name==='Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports);
    }
}




// const it= new Department('d1','department');
// console.log(it);
// it.addEmployee('Snow');
// it.addEmployee('Targaryen');
// it.printEmployeeInformation();



// const accounting= new AccountingDepartment('d2',[]);
// accounting.addReport('something wrong');
// accounting.printReports();
// //it.employees[2]='Anna';
// //public or private typescript supprt but JS NOT
