"use strict";
function intro(name, _age) {
    return `My Name Is ${name} and age is ${23}`;
}
const intro2 = (name, _age) => {
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
const filter = (array, predicate) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
};
let numbers = [1, 2, 5, 7, 8, 9, 45];
function greaterThanSeven1(item) {
    return item > 7;
}
let animals = ['cat', 'dog', 'lion', 'rat'];
function filtersCats1(item) {
    return item === 'cat';
}
console.log(filter(numbers, greaterThanSeven1));
console.log(filter(animals, filtersCats1));
//# sourceMappingURL=functions.js.map