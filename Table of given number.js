let number=parseInt(prompt("Enter Any Number:"));
let range=parseInt(prompt("Enter Any Range:"));
function Table(number,range){
    let i=1;
    while(i<=range){
        console.log(`${number} x ${i} = ${number*i}`);
        i++;
    }
}
Table(number,range);