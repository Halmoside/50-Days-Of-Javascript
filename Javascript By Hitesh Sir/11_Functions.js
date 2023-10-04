// Declaring a  Function

console.log("H");
console.log("A");
console.log("R");
console.log("R");
console.log("Y");

    
function myName (){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("R");
    console.log("Y");
}

// myName --> Reference of a function.
// myName()  // --> Executing a function. Parethesis () means execute of a function.
myName()  // --> Executing a function


// Function of Adding Two Numbers

// function addTwoNumbers(Parameters){
//     console.log(number1 + number2);
// }

// addTwoNumbers(Arguments)


function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(4, 5)
addTwoNumbers(4, "5")
addTwoNumbers(4, "a")
addTwoNumbers(4, null)

// -------------------------------------------------------------------------------------

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}


const result = addTwoNumbers(4, 5) // Output --> 9
console.log("Result :", result);  // Output --> undefined



// -----------------------------------------------------------------------------------------

function addThreeNumbers(number1, number2, number3){
    
    let results = number1 + number2 + number3
    console.log("Coder"); // --> Yaha pr yeh code execute hoga.
    return results
    // console.log("Coder");  --> Yeh instruction kbhi bhi print nhi hoga because ek baar aapne 'return' kr diya uske baad koi kaam nhi krega function.
    // Hum ek aur tarike se bhi 'return' kr skte hai.
    return number1 + number2 + number3
}


const results = addThreeNumbers(4, 5, 5) 
console.log("Result :", results); 



// -------------------------------------------------------------------------------------

function loginUserMessage(userName = "Sam") {     // --> (userName = "Sam") ==> Giving the default value.
    if(userName === undefined) {
        console.log("Please enter your username!");
        return

    }
    return `${userName} is just logged in` // --> Agar hum nhii chahate ki yeh statement print ho toh hum 'if' block ke andar 'return' likh skte hai.
    
}
      
console.log(loginUserMessage("Coder")) // Output --> Coder is just logged in
console.log(loginUserMessage("")) // Output -->   is just logged in
console.log(loginUserMessage()) // Output -->   undefined is just logged in





// --------------------------------------- Functions with Object and Arrays --------------------------------------


// Function example for making a shopping Cart in the e commerce website.



// ------------------------------------ CASE 1 -------------------------------------------------

// function calculateCartPrice(val1, val2, ...num1) {   
//     return num1

// }

// console.log(calculateCartPrice(200, 500, 1000, 2000)) // Output --> [ 1000, 2000 ] Because 200 --> val1 mein chala gya Aur 500 --> val2 mein. 


// ------------------------------------------------------------------------------------

function calculateCartPrice(...num1) {   // ...num1 --> Rest Operator ( Yeh Hume jo values hai jitni bhi cart mein usse ek array yeh bundle mein pack krke de dega )
    return num1

}

console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200, 500, 1000, 2000))  // Output --> [ 200, 500, 1000, 2000 ]


// ------------------------- Passing Object in Function -----------------------------------------------

const user = {
    userName : "User",
    price : 599
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);

}

// handleObject(user)

handleObject({
    userName : "Sam",
    price : 699
})



// ------------------------------- Passing Array in Function ---------------------------------------------


// --------------------------- CASE 1 -------------------------------------

// const myNewArray = [200, 300, 600, 900]

// function returnSecondValue(myNewArray ) {
//     return myNewArray [3]

// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 300, 600, 900]));

// ------------------------- CASE 2 ---------------------------------------------

const myNewArray = [200, 300, 600, 900]

function returnSecondValue(getArray) {
    return getArray[3]

}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 600, 900]));