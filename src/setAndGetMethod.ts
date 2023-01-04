class Personz {
  private fixUserAge(age: number) {
    if (age < 0 || age > 200) {
      throw new Error(" The age must be with in 0-200");
    }
    return age;
  }

  constructor(private _name: string, private _age: number) {
    this.fixUserAge(_age);
  }
  public set name(name: string) {
    this.name = name;
  }
  public get name() {
    return this._name;
  }

  public set age(age: number) {
    this.fixUserAge(age);
    this._age = age;
  }

  public get age() {
    return this._age;
  }
}
const personz: Personz = new Personz("Carter", 78);

console.log(personz.name);

console.log(personz.age);
//set method can be able to have only one parameters
//get method can't have a parameters
