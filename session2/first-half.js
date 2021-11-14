// =============== START OF ARRAY METHODS ===============
const numArr = [9, 21, 1, 5, 11, 17];
const jpadArr = ["dave", "adrian", "junel", "brylle", "sean", "benjie", "adrian"];

/**
*  .sort()
*    - sorts the elements of an array in place and
*      returns the sorted array
*    - sorts in ASCENDING order by default
*/
jpadArr.sort();                           // sorts the array in ascending order
console.log("Sort (ASC): ", jpadArr);

numArr.sort((a,b) => { return b-a });    // sorts the array in descending order
console.log("Sort (DESC): ", numArr);


/**
*  .forEach()
*     - executes a provided function once for each array element
*     - does not return anything (undefined)
*     - use cases: anything that doesn't involve array modification 
*       (e.g. for saving data in the array to a database or 
*       logging)
*/
jpadArr.forEach((name, index) => {
  return greeting = "Hello, " + name;          // this line doesn't do anything (comment this out)
  // console.log("Hello, ${name}! You are in position ${index} of the array");     // uncomment this line
})


/**
*  .map()
*     - also executes a provided function once for each array element
*     - returns a new array that contains the resulting values of each
*       function call
*     - preferable when data in the array has to be changed/altered
*/
const squaredArr = numArr.map((x) => x * x);
console.log("Squared array: ", squaredArr);

const uppercaseArr = jpadArr.map((name) => name.toUpperCase());
console.log("Uppercase array: ", uppercaseArr)


/**
*  .filter()
*     - creates a new array with all elements that pass the test 
*       implemented by the provided function.
*/
const filteredArr = jpadArr.filter((name) => name[0] === 'b');
console.log("Filtered array: ", filteredArr);


/**
*  .reduce()
*    -  executes a user-supplied “reducer” callback function on each
*       element of the array
*    - returns a single value
*    - Basic syntax: reduce((previousValue, currentValue) => { ... }, initialValue)
*/

// Example 1: Summation
const sum = numArr.reduce((result, currentVal) => {
  return result + currentVal;
}, 0);
console.log("Sum: ", sum);

// Example 2: Counting the occurrence of each name
const count = jpadArr.reduce((result,name) => {
	if(result[name]) result[name]++;
	else result[name] = 1;
	return result;
}, {})
console.log("Counted names: ",count);


/**
*  Other common array methods (for further reading):
*  - .every()
*  - .some()
*  - .indexOf()
*  - .lastIndexOf()
*/
// ================ END OF ARRAY METHODS ================



// ============== START OF PROMISE-CALLBACK =============

// Sample situation: Bank transaction
var balance = 0;

// Function for depositing money
function deposit(value, pin) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pin === '1234') {
        balance += value;
        resolve();
      }
      else reject("Incorrect PIN!");
    }, 2000);
  });
}

// Function for withdrawing money
function withdraw(value, pin) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pin === '1234') {
        if (balance < value) {
          reject("Insufficient balance!");
        }
        else {
          balance -= value;
          resolve();
        } 
      }
      else reject("Incorrect PIN!");
    }, 2000);
  });
}

// Sample transactions without then-catch blocks (comment these out later)
deposit(1000, '1234');
console.log(balance);
withdraw(500, '1234');
console.log(balance);


// Sample deposit transaction w/ then-catch block 
// deposit(1000, '1234')
//   .then(() => console.log(`Transaction successful! Current balance: Php ${balance}\n`))
//   .catch((err) => console.log(`Transaction failed! ${err}\n`))

// Sample withdrawal w/ then-catch-finally block
// withdraw(200, '1234')
//   .then(() => console.log("Transaction successful!"))
//   .catch((err) => console.log(`Transaction failed! ${err}`))
//   .finally(() => console.log(`Current balance: Php ${balance}\n`))
// =============== END OF PROMISE-CALLBACK ==============