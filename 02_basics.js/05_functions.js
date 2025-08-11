function sayHello(){
console.log("H");
console.log("E");
console.log("L");
console.log("L");
console.log("O");
console.log("O");
}

//sayHello()
/*
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
*/
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
/*
addTwoNumbers(3, "a")
addTwoNumbers(3, null)
*/
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Piyush"))
console.log(loginUserMessage())