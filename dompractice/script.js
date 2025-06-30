var h1 = document.querySelector("h1");

var btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let currentValue1 = Number(h1.innerHTML)
if(currentValue1 == 10){
    
}else{
    
    let value = Number(h1.innerHTML) + 1;
    h1.innerHTML = value;
  }
});

let decrement = document.getElementById("decrement");

decrement.addEventListener("click", function () {
  let currentValue = Number(h1.innerHTML);

  if (currentValue == 0) {
  } else {
    let value1 = currentValue - 1;
    h1.innerHTML = value1;
  }
});
