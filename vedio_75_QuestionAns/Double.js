// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.




function doubleTrouble(arr) {

    let result = [];

     for (let i = 0; i < arr.length; i++) {
        if(i==0 || arr[i]!==arr[i-1] ){
            result.push(arr[i]*2);
        }
        else{
            result.push(arr[i]);
        }
        return result;

    }
}

 const input = [2, 2, 3, 4, 4, 4, 5];
const output = doubleTrouble(input);

console.log(output);  // [4, 2, 6, 8, 4, 4, 10]
