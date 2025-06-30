let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());


// let myCreatedDate = new Date(2003, 0 , 1)
// let myCreatedDate = new Date(2003, 0 , 1, 5 , 3)
let myCreatedDate = new Date("2004-01-23")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamps = Date.now()

// console.log(myTimeStamps);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long"
})



