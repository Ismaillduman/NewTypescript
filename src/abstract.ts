

class Apple extends colorOfApple1{
    price:number;

    constructor(price:number, renkler:string[] ){
        
        super(renkler);
        this.price= price;
    }
getPrice():number{
return this.price;
}

}



abstract class colorOfApple{
    constructor(public renkler:string[]){}
}

let newApple: Apple= new Apple(3,["rot","blau"]);




interface creatureInterface{
    id:number;
    name: string;

}
abstract class Creature implements creatureInterface{
   
    id:number;
    name: string;
    constructor(id:number, name:string){
this.id= id;
this.name=name;
    }
    talk():void{
        this.name; 'MART';
console.log(`My name is ${this.name}`);

    }
}

class Human extends Creature{
talk(): void {
    super.talk;
    console.log(`I m human my name is ${this.name}`);
    
}

}

class Goblin extends Creature{}

let newHuman : Human = new Human(5,'max');
let newgoblin: Goblin= new Goblin(3, 'mor');
console.log(newHuman.id,newHuman.name);
 
newgoblin.name;