function nice(name) {
    console.log("Hey " + name + " you are very nice!")
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " your teshirt is nice!")
    console.log("Hey " + name + " your shirt is nice!")
}

function sum(a, b , c=9) {
    //console.log(a+b)
    console.log(a,b,c)
    return a + b + c

}
results1 = sum(2)
results2 = sum(2, 5)
results3 = sum(2, 6)

console.log("the sum of the number is: ", results1)
console.log("the sum of the number is: ", results2)
console.log("the sum of the number is: ", results3)

const func1 = (x)=>{
    console.log("I am a arrow function", x)

}
func1(32);
func1(38);
func1(35);