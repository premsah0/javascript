// singleton

// object literals

const mySym = Symbol("key1")
const jsUser = {
    name: "prem",
    "full name": "prem sah",
    [mySym]: "mykey1",
    age : 20,
    location: "noida",
    email : "prem@gmail.com",
    isLoggedIn : false,
    lastLogindays: ["monday", "tuesday"]


}
// console.log(jsUser.name);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email= "prem@outlool.com"
// Object.freeze(jsUser)
jsUser.name= "prem"
// console.log(jsUser);

jsUser.greeting = function(){
    // console.log("hello JS user");

    
}
jsUser.greetingtwo = function(){}
    // console.log(`hello JS user, ${this.name}`);

    
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());

const data = 
{
    noOfPage:29,
    id:425462546254,
    data:
    {
        email:
        {
            email1:"prem@gmail.com",
            email2:"prem2@gmail.com",
            phone:
            {
                phone1:787687687,
                phone2:99999999,
            }
        }
    }
    
}

// const phone1 = data.data.email.phone.phone1
console.log(data.data.email.phone.phone1);
