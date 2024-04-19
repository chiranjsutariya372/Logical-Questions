let number=parseInt(prompt("Enter Any Number:"));
function sumOfMiddleDigits(number) {
    const numString = number.toString();
    const middleIndex = Math.floor(numString.length / 2);
    let sum = parseInt(numString.charAt(middleIndex), 10);
    
    if (numString.length % 2 === 0) {
        sum += parseInt(numString.charAt(middleIndex - 1), 10);
    }
    
    return sum;
}

console.log("Sum of middle digits:", sumOfMiddleDigits(number));