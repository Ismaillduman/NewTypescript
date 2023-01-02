"use strict";
const airplane = {
    model: "Airbus A350",
    flightNumber: "12564",
    dateOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: 'lutfansa',
        adress: 'Germany',
        phone: 123456789,
    },
};
console.log(airplane);
function addNumberOrString(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(addNumberOrString(12, 15));
console.log(addNumberOrString('25', 5));
const hybridAnimal = {
    name: 'max',
    color: 'blue',
    barks: false,
    purrs: true
};
console.log(hybridAnimal);
const airplane1 = {
    flightNumber: "Ba125",
    model: "Airbus a350",
    dateOfDeparture: "12/12/2023",
    timeOfArrival: "13:00",
    from: "Köln",
    to: "Madrid",
    seats: {
        "A12": "Ismail",
        "A11": "Busra"
    },
    caterer: {
        name: 'lutfansa',
        adress: 'Germany',
        phone: 123456789,
    },
};
console.log(airplane1);
let c = [1, 2, 3, 'b', 'n'];
console.log(c);
const airplanes = [
    { model: "Airbus A350",
        flightNumber: "12564",
        dateOfDeparture: new Date(),
        timeOfArrival: new Date(),
        caterer: {
            name: 'lutfansa',
            adress: 'Germany',
            phone: 123456789,
        },
    },
    {
        model: "Airbus B250",
        flightNumber: "125664",
        dateOfDeparture: new Date(),
        timeOfArrival: new Date(),
        caterer: {
            name: 'rynaair',
            adress: 'England',
            phone: 12356896789,
        },
    }
];
console.log(airplanes);
const passingStudents = [
    3, true, 'Scott', 'Jane', 'Jack'
];
console.log(passingStudents);
let person = ['john', 'apple', 54];
console.log(person);
//# sourceMappingURL=types.js.map