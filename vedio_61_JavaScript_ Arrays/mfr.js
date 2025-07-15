let arr = [1,55,66,33,8];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }

let newArr = arr.map((e, index, array)=>{
    return e**2
})

console.log(newArr)
const greaterThanseven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanseven))

let arr2 = [1,2,3,5,78]
const red =(a,b)=>{
    return a+b
}

console.log (arr2.reduce(red))
