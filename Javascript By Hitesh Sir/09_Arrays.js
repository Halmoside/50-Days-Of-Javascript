// Arrays In Js

const myArr = [2, 4, 10, 56, true, "coder"]

console.log(myArr);
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);
console.log(myArr[5]);


const myArr1 = new Array(1, 2, 3, 4, 5)
console.log(myArr1);

myArr.push(78)
myArr.push("hello")
myArr.pop()
myArr.unshift(7) // --> Output : [ 7, 2, 4, 10, 56, true, 'coder', 78 ] It insert the element on the 0th index no.
myArr.shift()  // --> Output : [ 2, 4, 10, 56, true, 'coder', 78 ] It removes the element which is inserted on the 0th index no.
console.log(myArr);
console.log(myArr.includes(7));  // Yeh 'true' yeh 'false' return krta hai.
console.log(myArr.includes(4));
console.log(myArr.indexOf(18));  // Yeh index no batayaga ki element kis index no pr present hai agar element present nhi hoga toh (-1) return krega.


const newArr = myArr.join()  // join() --> Yeh humari Array ko String mein convert kr dega aur print kr dega.

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// Slice And Splice in Js


console.log("A =", myArr);

const myNewArr = myArr.slice(1, 3)
console.log(myNewArr);

console.log("B =", myArr);

const myNewArr2 = myArr.splice(1, 3)
console.log(myNewArr2);



// ---------------------------------------------------- ############## ------------------------------------------------------------------


const marvel_heros = ["thor", "ironman", "hulk"]
const dc_heros =["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);  // --> Output : [ 'thor', 'ironman', 'hulk', [ 'superman', 'flash', 'batman' ] ]  ==> Yeh humein array ke andar array de dega.
console.log(marvel_heros[3][0]);

// ------------------------ Concat Operator --------------------

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // --> Output : ['thor', 'ironman', 'hulk', 'superman', 'flash', 'batman']  ==> Arrange the two arrays in single arrays.


// -------------------- Spread Operator -------------------

const all_new_heros = [...marvel_heros, ...dc_heros,]

console.log(all_new_heros); // --> Output : ['thor', 'ironman', 'hulk', 'superman', 'flash', 'batman']



const another_array = [1, 2, 3, 4, [5, 6, 7], 8, [9, 10, 11, [12, 13, 14], 15]]

const real_another_array = another_array.flat(3) // --> flat(infinity) ==> flat hum array ko sort krne ke liye krte hai number wise nhi agar array ke andar array hai yeh uske andar ek aur array hai toh uske liye.
// --> flat(depth) mein jo hum depth dete hai waise toh usse exact dena chahiye pr hum 'infinity' de skte hai .

console.log(real_another_array);  
// --> Output : [
//     1,  2,  3,  4,  5,  6,
//     7,  8,  9, 10, 11, 12,
//    13, 14, 15
//  ]



console.log(Array.isArray("Coder"));
console.log(Array.from("Coder"));
console.log(Array.from({name : "Coder"}));  // --> Output : [] Yeh empty brackets return krega.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // --> Output : [ 100, 200, 300 ]  Yeh teeno ko assemble krke array mein kr dega.

