// ******************************* Loops/Iterations In Javascript ************************************

// for Loop

// ********** Structure of a for Loop **************

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
    
}
// console.log(element);  // Yaha pr error aayigi because jo 'element' variable hai woh block scope ke bahar accessible nhi hai.

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best");
    }
    console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop Value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner Loop Value: ${j}`);  
        console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

let myArray = ["Flash", "Batman", "Superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

console.log(myArray.length);



// Break and Continue Statement

// ------------- Break Statement -------------------

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(`value of i is ${i}`);
}

// ------------- Continue Statement -------------------

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`value of i is ${i}`);
}


// While Loop

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}


let myArray1 = ['Ironman', 'Hulk', 'Thor', 'Captain America']
arr = 0
while (arr < myArray1.length) {
    console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1
}

// Do - While Loop

let score = 100
do {
    console.log(`Value is ${score}`);
    score++
} while (score <= 200);


// For - of Loop

const array05 = [1, 2, 3, 4, 5]

for (const num of array05) {
    console.log(num);
}

const greetings = " Hello World"

for (const str of greetings) {
    console.log(str);
}


// Maps In Javascript

const map = new Map()
map.set('IN', "India")
map.set('US', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India") // Yaha pr Yeh dobaara print nhi hoga because map humesha unique value store krta hai. Aur ek value ek hi baar store krta hai. 


console.log(map);

for (const key of map) {
    console.log(key);
}

// Output --------->
// [ 'IN', 'India' ]
// [ 'US', 'United States Of America' ]
// [ 'Fr', 'France' ]

// ----------- De-structure Of Array --------------

for (const [key, value] of map) {
    console.log(key, "-->", value);
}

// Output ------------->
// IN --> India
// US --> United States Of America
// Fr --> France

// --------------- Object Ke Upar For - Of Loop ---------------

const myObject = {
    'game1': "NFS",
    'game2' : "Vice City"
}

for (const [key, value] of myObject) {
    console.log(key, "-->", value);
}

// Output -----> myObject is not iterable. Yaha pr error show hoga because object iterable nhi hai.


// ------------------- For - in Loop On Objects ----------------------

const myObject01 = {
    js: "Javascript",
    py: "Python",
    rb: "Ruby",
    swift: "Swift By Apple"
}

for (const key in myObject01) {
   console.log(key);
}

// Output ---> js
// py
// rb
// swift


for (const key in myObject01) {
   console.log(myObject01[key]);
}

// Output ---> Javascript
// Python
// Ruby
// Swift By Apple

for (const key in myObject01) {
   console.log(`${key} shortcut is for ${myObject01[key]}`);
}

// Output ---> js shortcut is for Javascript
// py shortcut is for Python
// rb shortcut is for Ruby
// swift shortcut is for Swift By Apple 


// ------------------- For - in Loop On Arrays ----------------------

const programming = ["js", "cpp", "py", "java", "ruby"]

for (const key in programming) {
    console.log(key);
}

// Output ---> 0
// 1
// 2
// 3
// 4
// NOTE -----> Yeh array ki keys print kr dega, Array ki keys mtlb index hi.

for (const key in programming) {
    console.log(programming[key]);
}

// Output ----> js
// cpp
// py
// java
// ruby

// --------------- ForEach Loop In JS ---------------------------

const coding = ["Javascript", "C++", "Python", "Java", "Ruby"]

// ---------- ForEach Using Normal Function ------------------

coding.forEach( function (val) {
      console.log(val);
} )

// ---------- ForEach Using Arrow Function ------------------

coding.forEach( (num) => {
    console.log(num);
} )


function printMe(val) {
    console.log(val);
}

coding.forEach(printMe)


coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

// Format ---------->     [{}, {}, {}]

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
} )