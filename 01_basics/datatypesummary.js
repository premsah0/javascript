// primitive

// 7 types : string, number, boolearn, null, undefined, symbol, bigInt

const score= 100
const scorevalue = 100.3


const isLoggedIn = false
const outsidetemp = null
let usermail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3456789325671n

// refrence (non primitive)

// types: array, objects, functions

const heros = ["batman", "superman", "saktiman"];
let myObj = {
    name : "prem",
    age: 20,
}
  
const myFunction = function(){
    console.log("hello world");
}

//+++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive),      heap (non-primitive )
//we get copy               // we get refrence
let myname = "premsah"
let anothername = myname
anothername = "premkumarsah"

console.log(anothername);
console.log(myname);



let userone = {
    email: "user@gmail.com",
    Upi: "prem@ptm",
}

let usertwo = userone

usertwo.email = "prem@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

