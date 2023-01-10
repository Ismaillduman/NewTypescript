enum AutoTypes {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}
enum AutoBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  auidi = "auidi",
  toyota="toyota"
}

enum AutoColor {
  red = "red",
  black = "black",
  blue = "blue",
  white = "white",
  silver = "silver",
}

interface Automobile<Type, Brand, Color> {
  type: Type;
  brand: Brand;
  color: Color[];
  description: string;
}
interface CommercialVehicle {
  capacity: string;
  licenseRenewalDate: Date;
}

/* we can implement two interface to one class
in TypeScript, we can inherit from only one parent class, 
but classes can implement as many
interfaces added once too, and there is no limitation on that.
*/
class Truck
  implements Automobile<string, AutoBrands, AutoColor>, CommercialVehicle
   {
    public type:string="truck";
    constructor(
        public brand: AutoBrands,
        public color: AutoColor[],
        public description: string,
        public capacity: string,
        public licenseRenewalDate: Date,
        //private driverName: string = "Scott"
        ){}
   
  }

  const toyotaTruck:Truck=new Truck(
    AutoBrands.toyota,
    [AutoColor.black,AutoColor.red],
    "This a toyota truck",
    "15 ton", new Date(), 
  );

const ferrari: Automobile<AutoTypes, AutoBrands, AutoColor> = {
  type: AutoTypes.car,
  brand: AutoBrands.ferrari,
  color: [AutoColor.black, AutoColor.blue],
  description: "This is a king of the autos",
};

const honda: Automobile<string, string, string> = {
  type: "car",
  brand: "Honda",
  color: ["yellow", "white"],
  description: "this is HONDA",
};
const bmw: Automobile<string, AutoBrands, number> = {
  type: "car",
  brand: AutoBrands.bmw,
  color: [14587, 96584],
  description: "This is a BMW",
};

console.log(honda);
console.log(ferrari);
console.log(bmw);
