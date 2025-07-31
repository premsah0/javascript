const ticket = new Promise(function (resolve, reject) {
    const isBoarded = false;
    if(isBoarded){
        resolve('you are not in a flight');
    }else{
        reject('your flight has been cancelled')
    }
})
ticket.then((data) => {
    console.log("wowwww", data);
    
}).catch((data) => {
    console.log("ohh no" ,data);
    
})
.finally(() => {
    console.log("i will execute any how");
    
})