//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Piyush",
    "full name": "Piyush Sharma",
    [mySym]: "mykey1",
    age: 19,
    location: "chandigarh",
    email: "sharmapiyush5783@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

/*
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
*/
JsUser.email = "sharmapiyush5784@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "sharmapiyush70821@gmail.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo= function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());