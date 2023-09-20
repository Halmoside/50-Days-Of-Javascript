let score = "78abcd"  // --> It is 'not a number'(NaN)

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof  valueInNumber );
console.log(valueInNumber );

// Number ca converted into string
// Ex --> 67 => "67"
// "67abd" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// ""(Empty string) => false
// "coder" => true

let number = 88
let stringNumber = String(number)
console.log(stringNumber);
console.log(typeof stringNumber);  // --> Number '88' is converted into string.




// ********************************************* Operations *******************************************


let value = 3
let negValue = -value
console.log(negValue);


console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);


let str1 = "hello"
let str2 = "coder"

let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2 + 2);
console.log(1 + 2 + "2");
console.log(1 + 2 * 5 % 10); // --> Not a good code.


console.log(true);
console.log(+true);
console.log(+""); // --> Do not prefer this.

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  // --> Not a good code

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
