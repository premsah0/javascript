const userEmail = [ ]

// if (userEmail) {
//     console.log("got email");
    
// }else{
//     console.log("don't have email");
    
// }


// falsy value

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length=== 0) {
//     console.log("array is empty");
    
// }

// const emptyObj = 0

// if (Object.keys(emptyObj).length === 0) {
//     console.log("obj is empty")
// }

// nullish coalescing Operator (??): null undefined
let var1;
// var1 = 1 ?? 5
// var1 = null ?? 3
// var1 = undefined ?? 70
var1 = null ?? 10 ?? 20


console.log(var1);


// terniary operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

