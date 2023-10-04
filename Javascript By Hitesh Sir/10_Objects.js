// ------------------------------------- Objects In Js Part 1 -------------------------------------------

// SINGLETON --> Koi bhi constructor se aap banayoge toh boject singleton hi banega. Yeh aapne tarah ka ek hi object hai.
// Agar 'Constructor' se banega toh humesha singleton banega.
// object.create --> Aaise bhi aap ek object bna skte hai. Isko Constructor method bhi bolte hai. Aur iske andar hi singleton banta hai.

// Jb hum literals ki tarah declare krenge toh singleton nhi banega.
// Object literals

// --> Object mein jo keys hai woh ek string ki tarah track ho rahi hai.
// Example -->  "name" : "User", --> "name" -> Yeh key string jaisa behave kr rhi hai.
// "full name" : "Rahul Singh" --> Iss value ko aap .(dot) se print nhi kra skte. So we have one way left --> console.log(JsUser["full name"]);


const mysym = Symbol("Key1")

const JsUser = {
    name : "User",
    "full name" : "Rahul Singh",
    [mysym] : "myKey1",
    age : 21,
    location : "Rajasthan",
    email : "user@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Saturday", "Tuesday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);
console.log(typeof mysym);


JsUser.email = "user@chat.com"
// Object.freeze(JsUser)  // --> Ek baar agar aapne object ko freeze kr diya toh aap usse change nhi kr skte.
JsUser.email = "user@microsoft.com"
console.log(JsUser);


JsUser.greetings = function() {
    console.log("Hello Js");
}
JsUser.greetingsTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetings);
console.log(JsUser.greetings()); // --> It will throw an error when object is freeze.
console.log(JsUser.greetingsTwo());



// ------------------------------------- Objects In Js Part 2 -------------------------------------------


const tinderUser = new Object() // --> It is a Singleton Object.
console.log(tinderUser);

const  tinderUser1 = {} // --> It is a Non-Singleton Object.
console.log(tinderUser1);

tinderUser.id = "123abc"
tinderUser.name = "Sameer"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email : "user@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Sameer",
            lastname : "Khan"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

// Optional chaining 
// --> console.log(regularUser.fullname?.userfullname.firstname); ==> Jb API'S Se data aayga toh agar jaise ussmein 'fullname?'Yeh available nhi hai toh kuch aur kr do. 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2} --> Output == { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2, obj4) ---> Syntex 1
// {} --> Empty Array.
const obj3 = Object.assign({}, obj1, obj2, obj4)  // --> {} --> Target  || obj1, obj2, obj4 --> Source
console.log(obj3);

// ----- Spread Operator ( Most Used Operator ) -------
const obj6 = {...obj1, ...obj2}
console.log(obj6);

// ------------ Database Values (Most Used Syntex) ---------------------

const users = [
    {
        id : 1,
        email : "h@google.com"
    },
    {
        id : 1,
        email : "h@google.com"
    },
    {
        id : 1,
        email : "h@google.com"
    }
]


// users = [1].email
console.log(users[1].email);     // --> Accessing the value from array in objects.
console.log(tinderUser);
console.log(Object.keys(tinderUser));  // Output --> [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  //  Output --> [ '123abc', 'Sameer', false ]
console.log(Object.entries(tinderUser)); // Output --> [ [ 'id', '123abc' ], [ 'name', 'Sameer' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// hasOwnProperty('isLoggedIn') --> Yeh cheez use hoti hai question krne ke liya ki 'isLoggedIn' --> Kya aapke pass yeh property hai yeh nahi.






// ------------------------------------- Objects De-structure And Json API Intro ----------------------------------------------


// De-structuring 'Array' ki Bhi hoti hai aur 'Objects' ki bhi.

const course = {
    coursename : "Js in hindi",
    price : "999",
    courseInstructor : "Hitesh Sir"
}

// course.courseInstructor

// const {'Kis value ko extract krna hai'} = 'Kis Object se value Extract krni hai'

const {courseInstructor : Instructor} = course  // {courseInstructor : Instructor} --> Renaming the Key.

console.log(Instructor);

const navbar = ({company}) => {

}

navbar(company = "xyz pvt ltd")

console.log(company);

