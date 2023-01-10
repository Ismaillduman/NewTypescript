


enum Roles{
    admin="Admin",
    author="Author",
    editor="Editor"
}

interface Role{
role:Roles;
}

enum PermissionList{
    read="read",
    write="write",
    execute="ececute",
}
interface UserPermissions{
    permissions:PermissionList[];
}
interface User {
    name:string;
    email:string;
    phone:number;
    gender:string;

}
interface UserWithAdresse extends User{
    adresse:string,
}


interface AdminUser extends User, Role, UserPermissions{
    numberOfUsersReporting:number;
}

const Alex:AdminUser={
    numberOfUsersReporting: 5,
    name: "Alex",
    email: "deSouza@email",
    phone: 125698,
    gender: "Male",
    role:Roles.admin,
    permissions: [
        PermissionList.execute,
        PermissionList.read,
        PermissionList.write
    ]
}

const user:User={
    name: "Martin",
    email: "luther@email",
    phone: 1664486,
    gender: "Male"
}

const userWithAdresse:UserWithAdresse={
    adresse: "Germany",
    name: "Harison",
    email: "ford@email",
    phone: 123564,
    gender: "male"
}

console.log(user);
console.log(userWithAdresse);
console.log(Alex);

