// array

const myArr = [0, 1, 2, 3, 4]
const myHeros = ["saktiman", "batman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// //Array methods

// myArr.push(5)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));


// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);

console.log(myn2);


  