// ============== START OF Loops ==================

// While ==========================================
let i = 0; // initialization
while (i < 5) {
	// condition
	console.log(i); // loop body
	i++; // update
}

// Do-While =======================================
let j = 0;
do {
	console.log(j);
	j++;
} while (j < 5);

// For ============================================
for (let k = 0; k < 5; k++) {
	console.log(k);
}

// continue
for (let k = 0; k < 5; k++) {
	if (k === 2) continue;
	console.log(k);
}

// break
for (let k = 0; k < 5; k++) {
	if (k === 2) break;
	console.log(k);
}

// Array Iteration
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
	console.log(`${i}: ${array[i]}`);
}

for (const element of array) {
	console.log(element);
}

// array.entries() returns an `Array Iterator` object
for (const [index, element] of array.entries()) {
	console.log(`${index}: ${element}`);
}

array.forEach(function (element, index) {
	console.log(`${index}: ${element}`);
});

// Object Iteration

const user = {
	id: 19,
	first_name: "Raphael Marco",
	middle_initial: "C",
	last_name: "Mirandilla",
};

const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);

for (const key of keys) {
	console.log(key);
}

for (const value of values) {
	console.log(value);
}

for (const [key, value] of entries) {
	console.log(`${key}: ${value}`);
}

for (const key in user) {
	const value = user[key];
	console.log(`${key}: ${value}`);
}

// ======== END OF LOOPS ========

// ============== START OF LOGICAL, RELATIONAL, & EQUALITY ==================

// If Else ================================================
let time_remaining = 0;
let message;

if (time_remaining <= 0) {
	message = "Pls stop kuya RM!";
} else {
	message = "Tuloy mo lang!";
}

/**
 * > - greater than
 * < - less than
 * >=- greater than or equal to
 * <=- less than or equal to
 * != - not equal to
 * && - and
 * || - or
 * ! - not / negation
 */

// == vs ===
// "2" == 2 results to true
// "2" === 2 results to false

console.log(message);

// Ternary Operator / Short-circuit
message = time_remaining <= 0 ? "Pls stop kuya RM!" : "Tuloy mo lang!";
console.log(message);

// Switch ================================================
switch (time_remaining) {
	case 120:
		console.log("Yay! Kaka-excite!");
		break;
	case 90:
		console.log("Wow! Ganun pala yun...");
		break;
	case 60:
		console.log("Hmmm....okay...");
		break;
	case 30:
		console.log("Ano daw???");
		break;
	default:
		console.log("Hindi pa ba tapos?! :<");
}
// ============== END OF LOGICAL, RELATIONAL, & EQUALITY ==================

// ============== START OF DATES ==================

// Creating a new Date
const date = new Date();

// some date methods;
// date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
console.log(Date.now());
// .toISOString() method returns a string in simplified extended ISO format
console.log(date.toISOString());
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// ============== END OF DATES ==================

// ============== START OF FUNCTIONS ==================

// Function format 1: Named Function or ES5 Function Declaration

function add(x, y) {
	return x + y;
}

// Function format 2: ES6 Function ( aka Fat Arrow Function )
const add2 = (x, y) => {
	return x + y;
};

// shorthand version using ES6 function
const add3 = (x, y) => x + y;

// ============== END OF FUNCTIONS ==================
