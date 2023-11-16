// Truthy Values

const userEmail = coder.ai

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Falsy Values

// --> false , 0 , -0 , BigInt --> 0n , ""(Empty String) , null , undefined , NaN

// Truthy Values

// --> "0" , 'false' , " "(Space Inside String) , [] , {} , function(){} --> Empty Function


// --------------------- To check Array is empty or not ------------------------

if (userEmail.length === 0) {
    console.log("Array is empty");
}

// ---------------------- To check Object is empty or not ------------------------

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undfined
// Nullish Coalescing Operator srif 'null' aur 'undefined' ke liye bana hai.


let val1;
val1 = 5 ?? 10
val2 = null ?? 10
var3 = undefined ?? 15

console.log(val1);
console.log(val2);
console.log(val3);

val5 = null ?? 10 ?? 20  // Output --> 10      Yaha pr jo bhi first value isse milegi woh yeh print kr dega.

console.log(val5);

// Ternary Operator

//  SYNTEX ------>  condition ? true :false

const iceCream = 100
iceCream >=60 ? console.log("Less then 60") : console.log("More then 60");