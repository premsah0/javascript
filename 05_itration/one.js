// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
    
}
// console.log(element);
for (let i = 0; i <= 20; i++) {
    // console.log(`outer loop value ${i}`);
    
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value ${j} and inner loop value ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
        
    }
}
let MyArray = ["flash","superman", "batman"]
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    // console.log(element);
    
}

// for (let index = 0; index<= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break
//     }
//     console.log(index);
    
    
// }
for (let index = 0; index<= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
    console.log(index);
    
    
}