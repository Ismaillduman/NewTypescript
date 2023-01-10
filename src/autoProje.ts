enum AutoTypes{
car="car",
bus= "bus",
van="van",
truck="truck",
bike="bike",
}
enum AutoBrands{
ferrari="ferrari",
honda="honda",
bmw="bmw",
auidi="auidi",
}

enum AutoColor{
red="red",
black="black",
blue="blue",
white="white",
silver="silver"
}

interface Automobile<Type, Brand, Color> {
    type:Type;
    brand:Brand;
    color:Color[];
    description:string;
}

const ferrari:Automobile<AutoTypes,AutoBrands, AutoColor>={
    type: AutoTypes.car,
    brand: AutoBrands.ferrari,
    color: [AutoColor.black, AutoColor.blue],
    description: "This is a king of the autos"
}

const honda:Automobile<string,string, string>={
    type: "car",
    brand: "Honda",
    color: ["yellow","white"],
    description: "this is HONDA"
}
const bmw:Automobile<string, AutoBrands, number>={
    type: "car",
    brand: AutoBrands.bmw,
    color: [14587,96584],
    description: "This is a BMW"
}

console.log(honda);
console.log(ferrari);
console.log(bmw);
