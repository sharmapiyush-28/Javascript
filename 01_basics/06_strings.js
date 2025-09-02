const name = "Piyush"
const repoCount = 10

console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Piyushsharma-ps')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);   // this gave the object


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)

console.log(newString);

const anotherString = gameName.slice(-12, 7)
console.log(anotherString);

const newStringOne = "  piyush  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://piyush.com/piyush%20sharma"
console.log(url.replace('%20', '-'))

console.log(url.includes('savage'))

console.log(gameName.split('-'))