

## union and intersection types

So this is the major difference between a union and an intersection.

Union types can be of either type dog or can be a cat type, but in case of intersection, it is all

the unique properties combined with the common properties of the two types.
## Functions

Functions are the fundamental building block of any application in JavaScript. They’re how you build up layers of abstraction, mimicking classes, information hiding, and modules. In TypeScript, while there are classes, namespaces, and modules, functions still play the key role in describing how to do things. TypeScript also adds some new capabilities to the standard JavaScript functions to make them easier to work with.

# Functions
To begin, just as in JavaScript, TypeScript functions can be created both as a named function or as an anonymous function. This allows you to choose the most appropriate approach for your application, whether you’re building a list of functions in an API or a one-off function to hand off to another function.

To quickly recap what these two approaches look like in JavaScript:

// Named function
```java
function add(x, y) {
  return x + y;
}
 
// Anonymous function
let myAdd = function (x, y) {
  return x + y;
};
```

Try
Just as in JavaScript, functions can refer to variables outside of the function body. When they do so, they’re said to capture these variables. While understanding how this works (and the trade-offs when using this technique) is outside of the scope of this article, having a firm understanding how this mechanic works is an important piece of working with JavaScript and TypeScript.

```java
let z = 100;
 
function addToZ(x, y) {
  return x + y + z;
}
Try
Function Types
Typing the function
Let’s add types to our simple examples from earlier:

function add(x: number, y: number): number {
  return x + y;
}
 
let myAdd = function (x: number, y: number): number {
  return x + y;
};
```
Try
We can add types to each of the parameters and then to the function itself to add a return type. TypeScript can figure the return type out by looking at the return statements, so we can also optionally leave this off in many cases.

Writing the function type
Now that we’ve typed the function, let’s write the full type of the function out by looking at each piece of the function type.

```java
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
Try
A function’s type has the same two parts: the type of the arguments and the return type. When writing out the whole function type, both parts are required. We write out the parameter types just like a parameter list, giving each parameter a name and a type. This name is just to help with readability. We could have instead written:

let myAdd: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
```
Try
As long as the parameter types line up, it’s considered a valid type for the function, regardless of the names you give the parameters in the function type.

The second part is the return type. We make it clear which is the return type by using an arrow (=>) between the parameters and the return type. As mentioned before, this is a required part of the function type, so if the function doesn’t return a value, you would use void instead of leaving it off.