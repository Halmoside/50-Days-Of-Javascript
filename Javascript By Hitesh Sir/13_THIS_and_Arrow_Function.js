const user = {
    username : "Coder",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, Welcome to the Website `);
        console.log(this);
        // Jab bhi aapki current context ko refer krna hai toh aap 'this.' ka use karange.

    }
}

user.welcomeMessage() // Yaha tk context same tha toh output same aayga. Output --->  Coder, Welcome to the Website 
user.username = "Sammy"  // Yaha pr current context change kr diya toh output bhi change ho jayga.  Output ---> Sammy, Welcome to the Website
user.welcomeMessage()

console.log(this); // Output ---> {} ==> It is a 'Empty Object'. 


function chai() {
    let username = "Web Dev"
    console.log(this);
    console.log(this.username);
}

chai()

const chai = function() {
    let username = "Web Dev"
    console.log(this.username);
    
}

// ------------------------- Arrow Function ------------------------

const chai = () => {
    let username = "Web Dev"
    console.log(this);
    console.log(this.username);
}

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(10, 20));

// --------------------------------------- Implicit Return in Arrow Function -----------------------------------------------
// Mostly used in React [This  method]

const addThree = (num1, num2, num3) =>  ( num1 + num2 + num3)

// --> If you have to return an 'Object'.
// const addThree = (num1, num2, num3) =>  ({username : "Coder"})
   


console.log(addTwo(10, 20, 30));

