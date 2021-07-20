/*

// While ==========================================
let i = 0 // initialization
while (i < 5){ // condition
  console.log(i) // loop body
  i++ // update
}


// Do-While =======================================
let j = 0
do{
  console.log(j)
  j++
}while(j < 5)


// For ============================================
for (let k = 0; k < 5; k++){
  console.log(k)
}

// continue
for (let k = 0; k < 5; k++){
  if (k === 2) continue
  console.log(k)
}

// break
for (let k = 0; k < 5; k++){
  if (k === 2) break
  console.log(k)
}

// Other Important Stuffs =========================

// String Formatting
const baryabol = "I'm  a variable UwU"
console.log(`======= ${baryabol} ========`)

// Array Destructuring
const rendon = ["Iwan", "Pati", "Pamilya", "Mo"]

const [a, b] = rendon
console.log(`${a} ${b}`)

// const [a, b, , c] = rendon
// console.log(`${a} ${b} ${c}`)

// const [a, ...b] = rendon
// console.log(`${a} ${b}`)
/*

// Object Destructuring
const user = {
  id: 19,
  first_name: "Raphael Marco",
  middle_initial: "C",
  last_name: "Mirandilla",
}

const {first_name: last_name, middle_initial, last_name: first_name} = user
console.log(`${first_name} ${middle_initial} ${last_name}`)


// Array Iteration
const array = [1, 2, 3, 4, 5]

for (let i = 0; i < array.length; i++){
  console.log(`${i}: ${array[i]}`)
}

for (const element of array){
  console.log(element)
}

// array.entries() returns an `Array Iterator` object
for (const [index, element] of array.entries()){
  console.log(`${index}: ${element}`)
}

array.forEach(function (element, index){
  console.log(`${index}: ${element}`)
})

// Object Iteration

// returns an array
const keys = Object.keys(user)
const values = Object.values(user)
const entries = Object.entries(user)

for (const key of keys){
  console.log(key)
}

for (const value of values){
  console.log(value)
}

for (const [key, value] of entries){
  console.log(`${key}: ${value}`)
}

for (const key in user){
  const value = user[key]
  console.log(`${key}: ${value}`)
}

*/