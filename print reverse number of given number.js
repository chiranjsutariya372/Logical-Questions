let number=parseInt(prompt("Enter Any Number:"));
function reverseNumber(number) {
    return parseInt(number.toString().split('').reverse().join(''));
}

console.log("Reverse of is:", reverseNumber(number));