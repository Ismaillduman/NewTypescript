function intro(name:string,_age:number):string {
    return `My Name Is ${name} and age is ${23}`;
}

const intro2= (name:string,_age:number):string=>{

    return `My Name Is ${name} and age is ${23}`;
}


//Custom parameters and Return types
//function call signatures
enum Ageunit{
    years= "years",
    months="months"
}
type greetingFunction=(greeting: string)=>string;

type Person = {
    name:string;
    age:number;
    country:string;
    ageunit:Ageunit;
    greet:greetingFunction;
}
const personX:Person={
    name: "John",
    age: 55,
    country: "London",
    ageunit: Ageunit.years,
    greet:(greeting:string)=>{
        return `${greeting} ${personX.name}`;
    },
};

function converAgeToMonths(personX:Person):Person{
    personX.age= personX.age*12;
    personX.ageunit=Ageunit.months;
    return personX;
};
console.log(personX.greet("guten Morgen wie geht's dir"));


//Function overloading

type Reservation1={
departureDate:Date;
returnDate:Date;
departingFrom:string;
destination:string;

};

type Reserve1={

    (
        departureDate:Date,
        returnDate:Date,
        departingFrom:string,
        destination:string
    ):Reservation;
}

//neeed for polymorpfic functions
type Filter = {
    (array: number[], predicate: (item: number) => boolean): number[];
    (array: string[], predicate: (item: string) => boolean): string[];
    (array: object[], predicate: (item: object) => boolean): object[];
  };
const filter= (array:any[], predicate:Function)=> {
    let result:any[] = [];

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (predicate(item)) {
            result.push(item);
            
        }
        
    }
    return result;
}
let numbers=[1,2,5,7,8,9,45];

function greaterThanSeven1(item:number){
    return item>7;
}

let animals= ['cat','dog','lion','rat'];
function filtersCats1(item:string){
    return item==='cat';
}
console.log(filter(numbers, greaterThanSeven1));
console.log(filter(animals,filtersCats1));

