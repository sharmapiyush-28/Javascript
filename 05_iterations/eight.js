const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentvalue){
//     console.log(`accumulator: ${accumulator} and currrentvalue: ${currentvalue}`)
//     return accumulator + currentvalue
// }, 0)

const myTotal = myNums.reduce( (accumulator, currentvalue) => accumulator + currentvalue, 0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "cpp course",
        price: 3999
    }
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay)