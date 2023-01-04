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
class User{
    name:string;
    email:string;
    age:number;


    constructor(name:string,email:string,age:number){
        this.age=age;
        this.email=email;
        this.name=name;

    }
}

class AdminUser extends User{
isAdmin:boolean=true;
userReporting:number;

constructor(
    name:string,
    email:string,
    age:number,
    usersReporting:number
    ){
        //super keyword when i want to use my constructor on child class 
        super(name,email,age); // attention to order
        this.userReporting= usersReporting;

}

}
const user:User=new User("jack", "jack@email", 45);
const admin:AdminUser=new AdminUser("Cavin","cavin@email",56 , 5);
console.log(user);
console.log(admin);

