let a=parseInt(prompt("Enter Any Number:"))

function digitsum(a){
    var sum=0;
    while(a > 0){
        sum+= a % 10;
        a=Math.floor(a / 10);
    }
    return sum;
}

console.log("Sum of All degit:",digitsum(a));