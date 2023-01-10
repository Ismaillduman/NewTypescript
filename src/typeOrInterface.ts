type User0={
    name:string;
};

type AdminUser0={
    isAdmin:boolean;
}

// these ares not possible eith interface
//intersection type
const userAndAdmin: User0 & AdminUser0 ={
name: "scott",
isAdmin:true
}

//union type
const userOrAdmin: User0 | AdminUser0 ={

    name:"scott"
}

//Tuples

type PesposeTuple= [string, number];



//these are not possible with type

interface Name {
    name: string;
  }
  
  interface LastName {
    lastName: string;
  }
  
  class Person0 implements Name, LastName {
    constructor(
      public name: string,
      public lastName: string
    ) {}
  }
  
  const person0: Person0 = new Person0("John", "Doe");


