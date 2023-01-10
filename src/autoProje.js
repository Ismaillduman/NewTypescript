"use strict";
var AutoTypes;
(function (AutoTypes) {
    AutoTypes["car"] = "car";
    AutoTypes["bus"] = "bus";
    AutoTypes["van"] = "van";
    AutoTypes["truck"] = "truck";
    AutoTypes["bike"] = "bike";
})(AutoTypes || (AutoTypes = {}));
var AutoBrands;
(function (AutoBrands) {
    AutoBrands["ferrari"] = "ferrari";
    AutoBrands["honda"] = "honda";
    AutoBrands["bmw"] = "bmw";
    AutoBrands["auidi"] = "auidi";
})(AutoBrands || (AutoBrands = {}));
var AutoColor;
(function (AutoColor) {
    AutoColor["red"] = "red";
    AutoColor["black"] = "black";
    AutoColor["blue"] = "blue";
    AutoColor["white"] = "white";
    AutoColor["silver"] = "silver";
})(AutoColor || (AutoColor = {}));
const ferrari = {
    type: AutoTypes.car,
    brand: AutoBrands.ferrari,
    color: [AutoColor.black, AutoColor.blue],
    description: "This is a king of the autos"
};
const honda = {
    type: "car",
    brand: "Honda",
    color: ["yellow", "white"],
    description: "this is HONDA"
};
const bmw = {
    type: "car",
    brand: AutoBrands.bmw,
    color: [14587, 96584],
    description: "This is a BMW"
};
console.log(honda);
console.log(ferrari);
console.log(bmw);
