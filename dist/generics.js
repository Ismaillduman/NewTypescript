"use strict";
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
const map = (array, func) => {
    if (array.length === 0) {
        return array;
    }
    let results = [];
    for (let i = 0; i < array.length; i++) {
        results[i] = func(array[i]);
    }
    return results;
};
let numbers2 = [4, 5, 6, 7, 8];
const converted = map(numbers2, (num) => num.toString());
console.log(converted);
//# sourceMappingURL=generics.js.map