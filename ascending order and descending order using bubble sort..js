var arr=[2,1,5,3,4]
let ascending=arr.slice().sort((a,b)=>a - b)
let descending=arr.slice().sort((a,b)=>b - a)

console.log("Original Array:",arr);
console.log("Ascending Array:",ascending);
console.log("Descending Array:",descending);