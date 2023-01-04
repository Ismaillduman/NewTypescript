class Persony {
  //private name:string;
  protected name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  public getName() {
    return this.name;
  }
}

class Admin extends Persony {
  public getAdminName() {
    return this.name;
  }
}
let persony: Persony = new Persony("scott", "scott@email", "vgfkjg");
let adminx: Admin = new Admin("Dumbledor", "hagvort@email", "lumos");
console.log(persony.getName());
console.log(adminx.getAdminName());

// A private variable can only be accessed from its parent class.
// A protected variabel can be accessed from the child class.
// For this, I have to write a method and
// return the variable I want to call in this method with this keyword.
//public getAdminName() {
//     return this.name;
//   }