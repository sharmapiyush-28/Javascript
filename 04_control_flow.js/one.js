// if
/*
const isUserLoggedIn = true
const temperature = 51
*/
/*if(isUserLoggedIn){

}
*/
/*
if(2 === "2"){
    console.log("Executed");
}


if(temperature < 50){
    console.log("Less than 50");
} else{
    console.log("Temperature is greater than 50")
}
console.log("Execute");
*/

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// const balance = 1000
// // if(balance > 500) console.log("test"), console.log("test2");

// if(balance < 500){
//     console.log("less than 500")
// }
// else if (balance < 750){
//     console.log("less than 750")
// }
// else{
//     console.log("greater than 750")
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
    
}
