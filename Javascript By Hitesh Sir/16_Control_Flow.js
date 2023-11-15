// if Statement

// if (condition) {
    
// }

if (true) {
    console.log("CODE EXECUTED");
}

if (false) {
    console.log("CODE NOT EXECUTED");
}

const isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log("Condition is True");
}

// Conditional Operators

// < , > , <= , >= , == , != , === , !==

if (3 != 2) {
    console.log("Statement is True");
}

if (2 == "2") {
    console.log("Executed");
}

if (2 === "2") {
    console.log("Not Executed");
}


const temperature = 41

if (temperature < 50) {
   console.log("Less then 50"); 
} else {
   console.log("Temp is greater then 50");
}

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User Power: ${power}`);
}

// console.log(`User Power: ${power}`); // --> In this line error will come because of scope.

// Short-Hand Notation

const balance = 1000

// Implicit Scope --> It means user ne maan liya hai ki scope ("{}") already laga hua hai.

if (balance > 500) console.log("It is Implicit Scope "),
console.log("Unreadable Code");

if (balance < 500) {
    console.log("Less then");
} else if (balance < 750) {
    console.log("Less then 750");
} else if (balance < 900) {
    console.log("Less then 900");
} else {
    console.log("Less then 1200");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false

// AND (&&) --> Agar dono conditions true hai toh hi execute hoga statement warna nhi hoga agar ek bhi condition false hui toh.

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

// OR (||) --> Agar ek bhi conditions true hai toh  execute ho jayigi statement.

if (userLoggedIn || debitCard) {
    console.log("User LoggedIN");
}


// Switch Case Statement

switch (key) {
    case value:
        
        break;

    default:
        break;
}


const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}


