"use strict";
function intro(name, age) {
    return `My Name Is ${name} and age is ${23}`;
}
const intro2 = (name, age) => {
    return `My Name Is ${name} and age is ${23}`;
};
var Ageunit;
(function (Ageunit) {
    Ageunit["years"] = "years";
    Ageunit["months"] = "months";
})(Ageunit || (Ageunit = {}));
const personX = {
    name: "John",
    age: 55,
    country: "London",
    ageunit: Ageunit.years,
    greet: (greeting) => {
        return `${greeting} ${personX.name}`;
    },
};
function converAgeToMonths(personX) {
    personX.age = personX.age * 12;
    personX.ageunit = Ageunit.months;
    return personX;
}
;
console.log(personX.greet("guten Morgen wie geht's dir"));
//# sourceMappingURL=functions.js.map