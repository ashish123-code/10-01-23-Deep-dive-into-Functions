
// function sum(a=0,b=1){
//     console.log(a,b)
// }


function sum(a,b){
    // if(b==undefined){
    //     b = 0
    // }
    let c = b || "default"
    console.log(a,c)
}


sum(10,20)  // 10,20


// let ans = 10<20 || 20<30


// all numbers are true except 0

// if(null){
//     console.log("A")
// }
// else{
//     console.log("B")
// }