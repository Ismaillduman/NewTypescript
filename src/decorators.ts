// // CLASS DECORATORS
// function CarDecorator(constructor:Function){
//     constructor.prototype.date= new Date();
//     constructor.prototype.giveMeDate= function(){
//         alert(this.date);
//     };

// }
//     function OtherDecorator(name: string){
//         if (name==="Mike") {
//             return function(constructor: Function){
//             constructor.prototype.other= "other value";
//         };
//         } else {
//             return <any>null;
//         }
//     }
    
// @OtherDecorator("Mike")
// @CarDecorator

// class Car{
//     brand:string;
//    // date:any;
//     constructor(brand:string){
//         this.brand= brand;
//        // this.date=this.date;
//         //console.log("----class constructor invoked---");
//     }
// }



// const car= new Car('Ford');
// console.log(car.brand);
//  console.log((car as any).other);
// // console.log((car as any).giveMeDate());



// // @CarDecorator
// // class Vehicle{}

// // const vehicle= new Vehicle();
// // console.log('vehicle date: ', (vehicle as any).date);


//METHOD DECORATORS

function PrintDecorator(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    
console.log(target);
console.log(propertyKey);
console.log(descriptor);
descriptor.writable= true;
}
class Tool{
name:string;
constructor(name:string){
    this.name= name;
}
price(){
    console.log('$ 200');
    
}

@PrintDecorator
print(){
    console.log("print tool");
    
}
}

const tool= new Tool("Hammer");
tool.print();
tool.print = function(){
    console.log("something else");
    
};

tool.print();