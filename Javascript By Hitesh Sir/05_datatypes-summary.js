// Primitive Data types

// 1. Number
// 2. null
// 3. string
// 4. Symbol
// 5. Boolean
// 6. BigInt
// 7. undefined


const score = 100
const scoreValue = 100.7
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 254265425674165247163n  // --> Not generally used in production level



// Reference (Non-Primitive Data types)

// 1. array
// 2. object
// 3. function 


const arr = [2, 4, 6, "coder", "hello"]

let myobj = {
    name : "harsh",
    age: 21,
}


const myFunction = function(){
    console.log("Hello World");
}


//    Type                                      'typeof' return value

// 1. Null	              ==>                    "object"	
// 2. Undefined     	  ==>                    "undefined"	
// 3. Boolean             ==>                    "boolean"	
// 4. Number   	          ==>                    "number"	
// 5. BigInt   	          ==>                    "bigint" --> "undefined"	
// 6. String	          ==>                    "string"	
// 7. Symbol	          ==>                    "symbol"	
// 8. Function              ==>                  "function" --> "objectfunction"




// ------------------------------------------ Stack And Heap Memory -------------------------------------

// 1. Stack Memory  (Primitive Data types)
// 2. Heap Memory   (Non-Primitive Data types)


// --> Example of Stack Memory.....

let myEmail = "harshsinghdotcom"

let myAnotherEmail = myEmail
anotherEmail = "chaiaurcodedotcom"

console.log(myAnotherEmail);
console.log(anotherEmail);


let userOne = {
    myEmail: "user@google.com",
    upi: "user@ybl"
}

let userTwo =userOne
userTwo.email = "harshsingh@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);