// function sayMyName(){
// console.log("p");
// console.log("r");
// console.log("e");
// console.log("m");
// }
// sayMyName()

// function addTwoNum(number1, number2){ //number1nNUmber2 is parametere
//     console.log(number1+number2);

// }
// addTwoNum(3,4) //3,4is arguments

function welcome(username) {

  return {
      message:`welcome ${username}`,
      email:`${username}@niu.com`,
      phone:13123123,

  }
}

// const result = welcome("gandu");
// console.log(result.email);

function LoginUser (user){
    if (user === undefined){
        console.log("please check username");
        return
    }
    return `${user} just logged in`
}
// console.log(LoginUser());


function calculateCartPrice(var1, var2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 1000))

const obj = {
    username : "prem",
    price : 900
}
function handleObj(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
    
}
// handleObj(obj)
handleObj({
    username: "ram",
    price: 200
})

const myArray = [200, 300, 100, 500]

function returnSecondArray(getArray){
    return getArray[2]
}
// console.log(returnSecondArray(myArray));
console.log(returnSecondArray([200,300,400,500]));

