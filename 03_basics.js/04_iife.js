//Immediately invoked function expressions (IIFE)

(function chai(){
    console.log(`DB connected`);
})();

( (name) => {
    console.log(`DB Connected Two ${name}`)
})('Piyush')