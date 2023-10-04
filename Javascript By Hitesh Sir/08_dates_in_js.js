// Dates

let myDate = new Date()
console.log(myDate.toString());  // --> Output : Sat Sep 16 2023 13:15:30 GMT+0530 (India Standard Time)
console.log(typeof myDate);  // --> Object 
console.log(myDate.toDateString());  // --> Output : Sat Sep 16 2023
console.log(myDate.toISOString()); // --> Output : 2023-09-16T07:45:30.093Z
console.log(myDate.toJSON());  // --> Output : 2023-09-16T07:45:30.093Z
console.log(myDate.toLocaleDateString());  // --> Output : 9/16/2023
console.log(myDate.toLocaleString());  // --> Output : 9/16/2023, 1:15:30 PM

//----------------------- Taking Date as UserInput -------------------------------

let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate1 = new Date(2023, 0, 23, 5, 7)
let myCreatedDate2 = new Date("2023-01-14")
let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());

// -------------------------------- Time Stamp ---------------------------------------

let myTimeStamp = Date.now()
console.log(myTimeStamp);  // --> Output : 1694851735749 [ Came in Milli second (ms)]
// --> Yeh waha use hoga jaise ki hum ko hotel room app bna rahe hai yeh koi poll kr rhe hai toh isse hum waha compare karenge.
console.log(myCreatedDate3.getTime());
console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now()/1000));  // --> Converting Seconds into milliseconds (ms).


let myDate1 = new Date()
console.log(myDate1);
console.log(myDate1.getDate());
console.log(myDate1.getDay());
console.log(myDate1.getFullYear());
console.log(myDate1.getHours());
console.log(myDate1.getMinutes());
console.log(myDate1.getMonth() + 1);
console.log(myDate1.getSeconds());
console.log(myDate1.getTime());
