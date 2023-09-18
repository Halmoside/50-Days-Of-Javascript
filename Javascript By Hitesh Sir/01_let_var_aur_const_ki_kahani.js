console.log("Chai Aur Code By Hitesh Sir");

const accountId = 12354;  // --> Const can never be changed once it is assigned.
let accountEmail = "user@microsoft.com"
var accountPassword = "12345"
accountCity = "Jaipur" // --> Declearing variable like this is possible but not considered as a good practice in Js.
let accountState;  // --> It will be undefined.
// ==> Prefer not to use 'var' because of issue in 'block scope' and 'functional scope'.
// accountId = 2; --> Not allowed 
console.log(accountId);

accountEmail = "user@google.com"
accountPassword = "23541"
accountCity = "Rajasthan"

console.table([accountEmail, accountPassword, accountCity, accountState])