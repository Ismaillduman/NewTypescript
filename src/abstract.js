"use strict";
class colorOfApple {
    constructor(renkler) {
        this.renkler = renkler;
    }
}
class Apple extends colorOfApple {
    constructor(price, renkler) {
        super(renkler);
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
let newApple = new Apple(3, ["rot", "blau"]);
class Creature {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    talk() {
        this.name;
        'MART';
        console.log(`My name is ${this.name}`);
    }
}
class Human extends Creature {
    talk() {
        super.talk;
        console.log(`I m human my name is ${this.name}`);
    }
}
class Goblin extends Creature {
}
let newHuman = new Human(5, 'max');
let newgoblin = new Goblin(3, 'mor');
console.log(newHuman.id, newHuman.name);
newgoblin.name;
