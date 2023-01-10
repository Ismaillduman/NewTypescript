"use strict";
var Roles;
(function (Roles) {
    Roles["admin"] = "Admin";
    Roles["author"] = "Author";
    Roles["editor"] = "Editor";
})(Roles || (Roles = {}));
var PermissionList;
(function (PermissionList) {
    PermissionList["read"] = "read";
    PermissionList["write"] = "write";
    PermissionList["execute"] = "ececute";
})(PermissionList || (PermissionList = {}));
const Alex = {
    numberOfUsersReporting: 5,
    name: "Alex",
    email: "deSouza@email",
    phone: 125698,
    gender: "Male",
    role: Roles.admin,
    permissions: [
        PermissionList.execute,
        PermissionList.read,
        PermissionList.write
    ]
};
const user = {
    name: "Martin",
    email: "luther@email",
    phone: 1664486,
    gender: "Male"
};
const userWithAdresse = {
    adresse: "Germany",
    name: "Harison",
    email: "ford@email",
    phone: 123564,
    gender: "male"
};
console.log(user);
console.log(userWithAdresse);
console.log(Alex);
