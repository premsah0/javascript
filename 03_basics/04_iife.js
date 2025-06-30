// Immediately Invoked Function Expression (iife)

(function chai (){
    // name iife
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("prem")