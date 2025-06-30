// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "prem"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = 
{
    email : "prem@gmail.com",
    fullName : 
    {
        userfullName : 
        {
            firstName : "prem",
            lastName : "shah"
        }
    }
}
// console.log(regularUser.fullName.userfullName);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id : 1,
        email : "p@gmai.com"
    },
    {
        id : 1,
        email : "p@gmai.com"
    }, 
    {
        id : 1,
        email : "p@gmai.com"
    },
    {
        id : 1,
        email : "p@gmai.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('prem') );


const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "prem"

}
const {courseInstructor : instructor} = course
// console.log(courseInstructor);

console.log(instructor);



