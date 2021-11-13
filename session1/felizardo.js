// Official playground / sandbox for Brylle Felizardo
// let array1 = ["sceptile", "torchic", "mudkip", "absol"];
// let array2 = ["treecko", "blaziken", "swampert", "lucario"];

// console.log([...array1, ...array2]);

const prod = (x,y) => x*y;

console.log(prod(10,9));

// how to use spread

/**
 * example 1:
 * const arr = [1,2,3,4,5]
 * const [...valuesOfArr] = arr;
 * note: the values of "valuesofArr" are [1,2,3,4,5]
 * 
 * using the head-tail analogy in erlang
 * const [head, ...tail] = arr;
 * 
 * note: value of "head" = 1, value of "tail" = [2,3,4,5]
 * 
 * example 2:
 * using spread to copy values of an array into another array
 * 
 * const arr1 = [1,2,3,4,5]
 * const arr2 = [6,7,8,9,10]
 * 
 * const combinedArray = [...arr1, ...arr2]
 * 
 * note: values of "combinedArray" are [1,2,3,4,5,6,7,8,9,10]
 */