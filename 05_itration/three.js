//for of

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hellow worlds!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}


// Maps

const map = new Map()
map.set('IN' , "india")
map.set('NPL' , "nepal")
map.set('FR' , "france")


// console.log(map);


for (const [key,value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    game1 : 'NFS',
    game2 : 'spiderman'
}
for (const [key, value] of myObject){
    console.log(key, ':-', value);
    
}