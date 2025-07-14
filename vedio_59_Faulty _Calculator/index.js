let random = Math.random()
let a = prompt("Enter the first number")
let b = prompt("Enter the second number")
let c = prompt("Enter operation")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}



if (random > 0.1) {
    // perform correct calculation
    console.log('the result is ${a} ${c} ${b} ')

}

if (random > 0.1) {
    // perform wrong calculation
    c = obj[c]
    console.log('the result is ${a} ${c} ${b} ')

}