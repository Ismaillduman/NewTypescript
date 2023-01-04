class Personx{
    name:string;
    email:string;
    greet(){
        return `Hello ${this.name} `;
    }

    constructor(name:string,email:string){
this.email=email;
this.name=name;
    }
}

const personx = new Personx('scott', 'adam');
const person2 = new Personx('scarlet', 'johnson');
console.log(personx);
console.log(person2);
console.log(personx.greet());


//INHERITANCE
class User1{
    name:string;
    email:string;
    age:number;


    constructor(name:string,email:string,age:number){
        this.age=age;
        this.email=email;
        this.name=name;

    }
}

class AdminUser1 extends User1{
isAdmin:boolean=true;
user1User1Reporting:number;

constructor(
    name:string,
    email:string,
    age:number,
    user1User1sReporting:number
    ){
        //super keyword when i want to use my constructor on child class 
        super(name,email,age); // attention to order
        this.user1User1Reporting= user1User1sReporting;

}

}
const user1:User1=new User1("jack", "jack@email", 45);
const admin:AdminUser1=new AdminUser1("Cavin","cavin@email",56 , 5);
console.log(user1);
console.log(admin);

