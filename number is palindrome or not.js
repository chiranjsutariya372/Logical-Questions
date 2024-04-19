let number =parseInt(prompt("Enter Palidrome Number:"));
function palidrome(number){
    return number.toString()===number.toString().split('').reverse().join('');
}
console.log(number,"This Number is",palidrome(number),"palidrome Number");