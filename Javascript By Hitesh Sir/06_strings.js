
// -------------------------------- Outdated Syntex of String ---------------------------------
const name = "Haseeb"
const repoCount = 76


console.log(name);
console.log(repoCount);

const str = name + repoCount

console.log(str);

console.log(name + repoCount + "Value");

// ---------------------------------- Nowadays syntex of string ------------------------------------

// This is also known as "String InterPolation"

const string = `My Name is ${name} and my repocount is ${repoCount}`;
console.log(string);

const gameName = new String('harshsingh')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(5));  // --> Yeh btata hai ki kis index pr kon sa character hai issmein index no dena padega.
console.log(gameName.indexOf('g'));  // --> Yeh humein character ka index no btata hai issmein humein character dena padega.
console.log(gameName.slice(0, 5));
console.log(gameName.slice(-8, 5)); // --> Issmein hum negative values de skte.
console.log(gameName.substring(0, 7)); // --> Issmein hum negative values nhi de skte.
console.log(gameName.replace("harshsingh", "amitsingh"));


const anotherName = "                  harsh              "


console.log(anotherName);
console.log(anotherName.trim());

// Replace in another form......

const url = "https://orange-barista-wfsyi.pwskills.app/?folder=%config/workspace"
console.log(url.replace('%', '/'));
console.log(url.includes('orange'));
console.log(url.includes('hello'));