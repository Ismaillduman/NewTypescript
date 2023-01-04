type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;

  protected constructor(protected name: string) {
   
  }
  public addHolidays(holidays:Holidays){ 

    if (Array.isArray(holidays)) {
        for (const holiday of holidays){
            this.holidays.push(holiday);
        }
    }
  }

   public abstract printHolidays():void;
//     if (this.holidays.length===0){
// return console.log("There are no holidays ((: ");
//     }
//     console.log("Here is the list of holidays");

//     this.holidays.forEach((holiday, index )=>{
    
//     console.log(
//         `${index + 1}.${holiday.reason}, ${holiday.date}`
//     )});
    
//   }
}

class ItDepartment extends Department {
  protected holidays: Holidays = [];

  constructor(){
    super("It Department");
  }
  public printHolidays(){
    if (this.holidays.length===0){
return console.log("There are no holidays ((: ");
    }
    console.log(`Here is the list of ${this.name} holidays`);
    this.holidays.forEach((holiday, index )=>{
    
    console.log(
        `${index + 1}.${holiday.reason}, ${holiday.date}`
    )});
    
  }
}
class AdminDepartment extends Department {
  protected holidays: Holidays = [];
  constructor(){
    super("Admin Department");
  }

  public printHolidays(){
    if (this.holidays.length===0){
return console.log("There are no holidays ((: ");
    }
    console.log(`Here is the list of ${this.name} holidays`);
    this.holidays.forEach((holiday, index )=>{
    
    console.log(
        `${index + 1}.${holiday.reason}, ${holiday.date}`
    )});
    
  }
}

const itHolidays:Holidays=[
    {
        date:new Date(2023,10,25),
        reason: "ITdepartment Day",
    },
    {
        date:new Date(2023,12,25),
        reason: "Christmas",
    }
];
const adminDepartmentHolidays:Holidays=[
    {
        date:new Date(2023,10,25),
        reason: "Admin department Day",
    },
    {
        date:new Date(2023,12,25),
        reason: "Christmas",
    }
];


const itDepartment:ItDepartment= new ItDepartment();
const adminDepartment:AdminDepartment= new AdminDepartment();

itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminDepartmentHolidays);

itDepartment.printHolidays();
adminDepartment.printHolidays();


//If I define an abstract method in an abstract class,
// I must have this method in the child class.

