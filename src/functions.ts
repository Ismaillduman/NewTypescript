function intro(name:string,age:number):string {
    return `My Name Is ${name} and age is ${23}`;
}

const intro2= (name:string,age:number):string=>{

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