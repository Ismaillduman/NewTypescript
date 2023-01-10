"use strict";
//Function Overloading
const reserve = (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDateOrDepartingFrom,
            departingFrom: departingFromOrDestination,
            destination: destination,
        };
    }
    else if (typeof returnDateOrDepartingFrom === 'string') {
        return {
            departureDate: departureDate,
            departingFrom: returnDateOrDepartingFrom,
            destination: departingFromOrDestination,
        };
    }
    throw new Error("Please provide valid details to reserve a ticket");
};
console.log(reserve(new Date(), new Date(), 'Koln', 'Berlin'));
console.log(reserve(new Date(), 'Koln', 'Berlin'));
