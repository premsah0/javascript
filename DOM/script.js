//selection of html
// var a = document.querySelector("h1")
// console.log(a.innerHTML)

//changing of html
// var a = document.querySelector("h1")
// a.innerHTML = "hiiiiiii"

// changing CSS
// var a = document.querySelector("h1")
// a.style.color="red"
// a.style.backgroundColor="black"

//simple example of bulb switch on n off
// var bulb = document.querySelector("#bulb")
// var butn = document.querySelector("button")

// var flag = 0;

// butn.addEventListener("click", function(){
//     if (flag == 0){
//         bulb.style.backgroundColor = "yellow"
//         console.log("clickedin")
//         flag = 1 
//     }else{
//         bulb.style.backgroundColor = "transparent"
//         console.log("clickedout")
//         flag = 0
//     }
// })

//selecting multiple element at a same time
var h = document.querySelectorAll("h1")
console.log(h)
h.forEach(function(e){
    console.log(e);
    
})