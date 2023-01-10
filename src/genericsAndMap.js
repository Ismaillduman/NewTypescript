"use strict";
// type Filter1=
//     <T>(array: T[], predicate: (item: T) => boolean)=> T[]
const filter1 = (array, predicate) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
};
let numbers1 = [1, 2, 5, 7, 8, 9, 45];
function greaterThanSeven(item) {
    return item > 7;
}
let animals1 = ['cat', 'dog', 'lion', 'rat'];
function filtersCats(item) {
    return item === 'cat';
}
console.log(filter1(numbers1, greaterThanSeven));
console.log(filter1(animals1, filtersCats));
//maps
const map = (array, func) => {
    // check if the array is empty
    if (array.length === 0) {
        return array;
    }
    // Create a new array to collect values
    let results = [];
    // Loop through each item and call the func
    for (let i = 0; i < array.length; i++) {
        // @ts-ignore 
        results[i] = func(array[i]);
    }
    // return new array
    return results;
};
let numbers2 = [4, 5, 6, 7, 8];
const converted = map(numbers2, (num) => num.toString());
console.log(converted);
