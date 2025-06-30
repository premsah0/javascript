const name = "prem"
const repoCount = 50
// console.log(name + repo + " value");

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('preeemmm')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase( ));
console.log(gameName. charAt(3));
console.log(gameName. indexOf('r'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString= gameName.slice(-8, 4)
console.log(anotherString); 


const newstringOne = "    prem    "
console.log(newstringOne);
console.log(newstringOne.trim());


const url = "https://prem.com/prem%20shah"
console.log(url.replace('%20' , '-'))
console.log(url.includes('prem'))
