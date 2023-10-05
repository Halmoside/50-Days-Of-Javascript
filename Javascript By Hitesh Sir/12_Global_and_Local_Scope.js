// Global And Local Declaration

// -------------------------- Global Scope Declaration ----------------------------------

// let a = 10
// const b = 20
// var c = 30

var c = 500  // Yaha pr [var c = 500] Re-declear kiya hai pr output 30 hi aa rha hai.
let a = 1000

// ---------------------------- Local Or Block Scope Declaration ---------------------------------------

if(true) {
     let a = 10
     const b = 20
     var c = 30
     console.log("Local Scope:", a);
}

// ----------- Example -------------

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

console.log(a);
// console.log(b);
console.log(c); // Output will come 30.


function one() {                // Parent Function
     const username = "Sameera"

     function two() {           // ------> Child Function
          const website = "xyz.com"
          console.log(username);
     }
     // console.log(website); --> This will give error Because of 'function two()' scope.

two()
}

one()

if (true) {
     const username = "Sameera"

     if (username === "Sameera") {
          const website = " Youtube"
          console.log(username + website);
          
     }
     // console.log(website);   ---> This will give error Because of 'if' scope.

     
}

// console.log(username);  ---> This will also give error because of scope.



// ------------------------------- Case 1 ---------------------------------------
 
// console.log(addOne(5));  // // --> This will not show an error "Can access 'addOne' before initialization".
function addOne(num) {
     return num + 1
}

console.log(addOne(5));

// ----------------------------- Case 2 ----------------------------------------------

// console.log(addTwo(5));   // --> This will show an error "Cannot access 'addTwo' before initialization".
const addTwo = function(num) {
     return num + 2
}

console.log(addTwo(5)); 
