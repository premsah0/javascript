const user = {
    username : "prem",
    price : 900,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "ram"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "prem"
//     console.log(this);
    
// }
// chai()


// const chai = function(){
//     let username = "prem"
//     console.log(this.username);
    
// }
// chai()

// const chai = () => {
//     let username = "prem"
//     console.log(this);
    
// }
// chai()


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) =>  num1 + num2

// const addtwo = (num1, num2) => ( num1 + num2)

const addtwo = (num1, num2) => ({username : "prem"})


console.log(addtwo(3,4));
