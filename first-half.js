// ============= START OF VARIABLES =============

// Three ways to declare a JavaScript variable:

/*
  1. Using 'var'
      - Variables can be re-declared and updated
      - The value of the variable is initialized as 'undefined'
      - The scope of the variable can be global or function-scoped
*/
var name = "John";
var name = "Jane";        // These declarations will not produce an error

/*
  2. Using 'let'
      - The variable name must be unique
      - The value of the variable can be updated but not re-declared within its scope
      - The variable's value is not initialized (gives a Reference Error if used before declaring a value)
      - It is block-scoped and is usually used in for-loops and function blocks
*/
let age;
console.log("age = ", age);     // this will throw an error since age is not initialized
age = 18;
let age = 25;       // this will also throw an error since 'age' has already been declared

/*
  3. Using 'const'
      - has the same features as the 'let' keyword but the variable will be read-only (cannot be updated or re-declared)
*/
const pi = 3.14;
pi = 3.14159;     // this will throw an error

// ============== END OF VARIABLES ==============



// ============= START OF PRIMITIVE DATA TYPES =============

// Number: can be written with or without decimals
let num1 = 1;
let num2 = 2.25;
console.log("num1 = ", num1);
console.log("num2 = ", num2);

// String: series of characters; can be written with single or double quotes
let string1 = 'YSES';
let string2 = "'YSES' stands for Young Software Engineers' Society";
console.log(string1);
console.log(string2);

// Boolean: 'true' or 'false'
let isFlatUno1 = (num1 == 1.00);     // returns true
let isFlatUno2 = (num2 == 1.00);     // returns false
console.log("isFlatUno1 = ", isFlatUno1);
console.log("isFlatUno2 = ", isFlatUno2);

// Undefined: a variable without a value
let name;
console.log("name = ", name);

// Null: represents intentional absence of any object value; is treated as 'falsy' for boolean operations
name = null;
console.log("name = ", name);

// 'typeof' operator can be used to find the type of a variable/expression
console.log(typeof num1);
console.log(typeof (10.00 + 2));
console.log(typeof string1);
console.log(typeof isEqual);

// ============== END OF PRIMITIVE DATA TYPES ==============
 

// ============ START OF ARITHMETIC OPERATIONS =============
/*
    +    (Addition)
    -    (Subtraction)
    *    (Multiplication)
    **   (Exponentiation)
    /    (Division)
    %    (Modulo/Remainder)
    ++   (Increment)
    --   (Decrement)
*/
console.log(1 + "1");              // prints "11"
console.log(2 * "2");              // prints 4
console.log(2 + "ha");             // prints "2ha"
console.log(2 * "ha");             // prints NaN (Not a Number)
// ============= END OF ARITHMETIC OPERATIONS ==============



// =============== START OF STRING OPERATIONS ===============

// .length: gets the length of the string
console.log(string3.length);

// .concat(): joins two or more strings
let string3 = "Hello";
let string4 = "World";
console.log(string3.concat(" ", string4, "!"));

// .trim(): removes whitespaces from both sides of the string
let string5 = "     Banana Waffles!     ";
console.log(string5.trim());

// .split(): converts the string into an array; accepts a separator as an argument
let string6 = "1,2,3,4,5";
console.log(string6.split(','));

/* String interpolation (a.k.a. string formatting or variable substitution)
    - replacing placeholders with values in a string literal
    - Syntax: `string text ${expression} string text`
*/
const username = "Juan Dela Cruz"
const message = `Welcome, ${username}!`;
console.log(message);


// *For more string methods, you may visit https://www.w3schools.com/js/js_string_methods.asp
// ================ END OF STRING OPERATIONS ================



// ================ START OF ARRAYS AND OBJECTS ================
/*
    Arrays are a special type of objects that uses "numbers" (index)
    to access its "elements".
*/
let arr1 = ["septile", "torchic", "mudkip", "absol"];
console.log(arr1)
console.log(`arr1[0]: ${arr1[0]}`);         // Prints the 1st element of arr1

// Array Destructuring
var [a, b] = arr1;                          // Assign the first two elements of arr1 to a and b
console.log(`a: ${a}\tb: ${b}`);

var [a, b, , c] = arr1;
console.log(`a: ${a} \tb: ${b} \tc: ${c}`);    // Assign the 1st, 2nd, and 4th element of arr1 to a, b, c

var [a, ...b] = arr1;                 // Spread operator (...)
console.log(`a: ${a} \tb: ${b}`);     // Assign the 1st element to a, and the rest of the elements to b

/*
    Objects use "names" (keys) to access its "members".
*/
const user = {
  id: 19,
  first_name: "Raphael Marco",
  middle_initial: "C",
  last_name: "Mirandilla",
};

// Object destructuring
const {first_name: first_name, middle_initial, last_name: last_name} = user;
console.log(`${first_name} ${middle_initial} ${last_name}`);
// ================= END OF ARRAYS AND OBJECTS =================