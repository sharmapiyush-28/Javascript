// Primtive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);


const bigNumber = 3443672783232n


// Reference(Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myObj =
{
    name: "Piyush",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);