const coding = ["Javascript", "C++", "Python", "Java", "Ruby"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
} )

console.log(values); 
// Note ----> forEach() values return nhi krta.

// Basics Of Filter()

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.filter( (num) => num > 4 )

console.log(newNums);
// Note ----> filter() values return krta hai.

// Jb bhi hum filter use krte hai toh filter ke andar aapko ek call back function milega jiske andar har value ko seperate access kiya jayga magar uske baad aapko ek condition deni padti hai toh jo jo value true hogi woh print ho jayigi means value return kr dega.


const newNums1 = myNumbers.filter( (num) => {
        num > 4
} )

console.log(newNums1);

// -------> Agar object use krenge toh return likhna padega warna empty array aaygi output mein.

const newNums2 = myNumbers.filter( (num) => {
        return num > 4
} )

console.log(newNums2);

// Using for - each 

myNumbers.forEach( (num) => {
    if (num > 4) {
        newNums.push()
    }

} )


console.log(newNums);


// ----------- Example of Filter ------------------------

const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publicationYear: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publicationYear: 1949
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      publicationYear: 1813
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      publicationYear: 1925
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationYear: 1937
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        publicationYear: 1951
      },
      {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publicationYear: 1954
      },
      {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Dystopian",
        publicationYear: 2008
      },
      {
        title: "Moby-Dick",
        author: "Herman Melville",
        genre: "Adventure",
        publicationYear: 1851
      },
      {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        publicationYear: 2003
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        publicationYear: 1997
      },
      {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        publicationYear: 1979
      }
  ];


let userBooks = books.filter( (books) => books.genre === "Fantasy" )

userBooks = books.filter( (books) => {
    return books.publicationYear >= 1950 && books.genre === 'Mystery'
})

console.log(userBooks);

// ----------------------- Maps ------------------------

// maps() ------> Yeh automatically return krta hai values ko.

const myNumberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const value = myNumbers.map( (num) => num + 10 )

console.log(value);  

 
// ------------------- Chaining In Maps ------------------------

const newNumss = myNumberss
              .map( (num) => num * 10 )
              .map( (num) => num + 1 )
              .filter( (num) => num >=30 )


console.log(newNumss); 

// -------------------------- Reduce In Javascript ---------------------------------

// -------------------------- Syntex Of Reduce -------------------------------------

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

// --------------------- Reduce with Simple Function --------------------------


const array = [1, 2, 3, 4, 5];

const myTotal = array.reduce( function(acc, currentValue) {
  console.log(`acc: ${acc} and CurrentValue: ${currentValue}`);
  return acc + currentValue
}, 0)

console.log(myTotal);

// ------------- Output ---------------

// acc : accumulator
// Initial Value will be 0 
// Jo initial value hogi woh accumulator mein chali jayigi as shown in the output.

// acc: 0 and CurrentValue: 1
// acc: 1 and CurrentValue: 2
// acc: 3 and CurrentValue: 3
// acc: 6 and CurrentValue: 4
// acc: 10 and CurrentValue: 5



// --------------------- Reduce with Arrow Function --------------------------


const arrayy = [1, 2, 3, 4, 5]

const myTotal1 = arrayy.reduce( (acc, currentValue) => acc + currentValue, 0)

console.log(myTotal1);



// ------------- Same Output ---------------

// acc : accumulator
// Initial Value will be 0 
// Jo initial value hogi woh accumulator mein chali jayigi as shown in the output.

// acc: 0 and CurrentValue: 1
// acc: 1 and CurrentValue: 2
// acc: 3 and CurrentValue: 3
// acc: 6 and CurrentValue: 4
// acc: 10 and CurrentValue: 5


// -------------------- Example Of a shopping Cart -------------------------

const shoppingCart = [
  {
    itemName: " Java Course",
    price: "1000"
  },
  {
    itemName: " Python Course",
    price: "2000"
  },
  {
    itemName: " Web Development Course",
    price: "3000"
  },
  {
    itemName: " Full Stack Web Development Course",
    price: "5000"
  },
  {
    itemName: " Data Science Course",
    price: "12999"
  },
  {
    itemName: " Backend Course",
    price: "4999"
  },
];


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);





