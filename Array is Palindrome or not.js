var arr=[1,2,3,2,1]
let palindrome=arr.join('')===arr.slice().reverse().join('')
console.log(arr,"This Number is",palindrome,"Palindrome Number.");