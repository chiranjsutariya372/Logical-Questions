var arr=[1,2,3,4,5]
var sum=arr.reduce((h1,h2)=>{
    return h1 + h2;
})
var average=sum / arr.length;

console.log("Array sum:",sum);
console.log("Average sum:",average);