let a=parseInt(prompt("Enter Any Number:"))
function lastfirstsum(a){
    var last,first;
    var num=a;
    while(num >= 10){
        num=Math.floor(num/10)
    }
    first=num;
    last=a%10;

    const sum=last+first;
    return sum;
}

console.log("sum:",lastfirstsum(a));