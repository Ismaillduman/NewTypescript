
//Function Overloading

type Reservation={
    departureDate:Date;
    returnDate?:Date;
    departingFrom:string;
    destination:string;
    
    };
    
    type Reserve={
    
        (
            departureDate:Date,
            returnDate:Date,
            departingFrom:string,
            destination:string
        ):Reservation |never; //it means that it can throw an error.

        (departureDate:Date,
            departingFrom:string,
            destination:string):|Reservation|never;
    };

    const reserve:Reserve=(
departureDate:Date,
returnDateOrDepartingFrom:Date|string,
departingFromOrDestination:string,
destination?:string
    )=>{

    if (returnDateOrDepartingFrom instanceof Date && destination){
    return{
        departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
}else if (typeof returnDateOrDepartingFrom==='string'){
return{
    departureDate: departureDate,
    departingFrom: returnDateOrDepartingFrom,
    destination: departingFromOrDestination,
};
}
    throw new Error("Please provide valid details to reserve a ticket");
    };
    console.log(reserve(new Date(), new Date(),'Koln', 'Berlin'));
    console.log(reserve(new Date(),'Koln', 'Berlin'));
    