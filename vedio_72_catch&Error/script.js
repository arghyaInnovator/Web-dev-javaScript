let a = prompt("Enter the first number")

let b = prompt("Enter the second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main() {
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true

    } catch (error) {
        console.log("error aa gaya bhai")
        return false
    }
    finally {
        console.log("files are being closed and db is closed")
    }
}

let c = main()