

//object types
type Caterer ={
    name:string;
    adress:string;
    phone:number;
};

type Airplane={
    model:string;
    flightNumber:string;
    dateOfDeparture:Date;
    timeOfArrival:Date;
    caterer: Caterer;
}

const airplane:Airplane={
    model:"Airbus A350",
    flightNumber:"12564",
    dateOfDeparture: new Date(),
    timeOfArrival:new Date(),
    caterer:{
        name:'lutfansa',
        adress:'Germany',
        phone: 123456789,
    },
}

console.log(airplane);

//union types

type stringOrNumber = number | string;

function addNumberOrString (a: stringOrNumber, b: stringOrNumber) {
    if (typeof a === "number" && typeof b === "number") {
        return a+b;
    } else { return a.toString() + b.toString();
        
    }
}
console.log(addNumberOrString(12 , 15));
console.log(addNumberOrString('25' , 5));


//intersection types
type Cat={
    name:string;
    color:string;
    purrs:boolean;

}
type Dog={
    name:string;
    color:string;
    barks:boolean;
}

type HybridAnimal =Dog & Cat;

const hybridAnimal:HybridAnimal= {
name:'max',
color:'blue',
barks: false,
purrs:true
}

console.log(hybridAnimal);


//Index Signatures
type Airplane1={
    flightNumber:string;
    model:string;
    dateOfDeparture:string;
    timeOfArrival:string;
    from: string;
    to:string;
    caterer: Caterer;
    seats:{
        [key:string]: string;
    };
}
 const airplane1:Airplane1={
     flightNumber: "Ba125",
     model: "Airbus a350",
     dateOfDeparture: "12/12/2023",
     timeOfArrival: "13:00",
     from: "Köln",
     to: "Madrid",
     seats: {
        "A12":"Ismail",
        "A11":"Busra"
     },
     caterer:{
        name:'lutfansa',
        adress:'Germany',
        phone: 123456789,
    },
 }
 console.log(airplane1);

 //let b = [1,2,3,4] as Array<number>;

 let c:Array<number|string> = [1,2,3, 'b', 'n'] ;
  console.log(c);
  

  type Airplanes=Airplane[];

  const airplanes:Airplanes=[
    {model:"Airbus A350",
    flightNumber:"12564",
    dateOfDeparture: new Date(),
    timeOfArrival:new Date(),
    caterer:{
        name:'lutfansa',
        adress:'Germany',
        phone: 123456789,
    },
},
    {
        model:"Airbus B250",
    flightNumber:"125664",
    dateOfDeparture: new Date(),
    timeOfArrival:new Date(),
    caterer:{
        name:'rynaair',
        adress:'England',
        phone: 12356896789,
    },
    }

  ]
  console.log(airplanes);

  //Tuples

  type listOfStudents = [number, boolean, ...string[]]
  const passingStudents: listOfStudents= [
    3, true,'Scott','Jane','Jack'
  ];
  console.log(passingStudents);
  //readonly tupels
  type readOnlyPerson= readonly[string,string,number];

  let person:readOnlyPerson=['john','apple',54];
  console.log(person);
  


//   import { Roles } from "./roles";

//   type Person={
//     name:string;
//     email:string;
//     password:string;
//     role:Roles;
//   }
//   const person1:Person={
//       name: "Ismail",
//       email: "bclaLweb.ge",
//       password: "123456",
//       role: Roles.author
//   }
//   console.log(person1);
  




