const score = 600
console.log(score);

const balance = new Number(600)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  // toFixed() humesha use hoga e- commerce website ke time jb hum waha pr 'GST' waghara calculate krenge tb.
console.log(balance.toFixed(1));
console.log(balance);
console.log(typeof balance);

const otherNumber = 25.76585

console.log(otherNumber.toPrecision(4));   
//  toPrecision() --> Yeh hume precise value dega aur importance hume point ke pehle hi milegi uske baad agar no zyda bada hua toh woh exponentiation mein bhi dega value.

const hundreds = 100000000

console.log(hundreds.toLocaleString('en-IN'));
// toLocaleString('en-IN') --> Yeh humari zeroes ko count krne mein help krega. Auryeh zeros ko indian numbers mein convert krenge. 



// ################################################## Maths #############################################################

// ################################################# Math Library #######################################################

console.log(Math);
console.log(Math.abs(-4));  // Math.abs(Negative Value) --> Yeh negative value ko posiitive kr dega.
console.log(Math.round(6.3)); // Math.round() --> Yeh value ko round off kr dega.
console.log(Math.ceil(4.2));  // Math.ceil() --> Yeh top value hi lega 4 se zyda hua toh direct 5 kr dega.
console.log(Math.floor(4.9)); // Math.floor() --> Yeh lowest value lega.
console.log(Math.min(3, 4, 7, 2)); // Math.min(3, 4, 7, 2) --> Yeh minimum value return krega.
console.log(Math.max(3, 4, 7, 2)); // Math.max(3, 4, 7, 2) --> Yeh maximum value return krega.



// HUM SBSE ZYDA USE KRENGE MATH.RANDOM KA .........

console.log(Math.random());  // Iski jo value aati hai woh 0 aur 1 ke aandar/beech hi aati hai.
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1);  // Yaha pr humne 1 se plus isliye kiya hai kyuki hume 0 value nhi chahiye 1 toh hona hi chahiye aur usse zyda bhi chl skta hai.


// ------- Case 1 ----------

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);