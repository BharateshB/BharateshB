
// let pr=new Promise((resolve,reject)=>{
//     let x=2,
//     y=3;
//     if(x==y){
//         resolve("equal")
//     }
//     else{
//         reject("not equal")
//     }
// })

// pr.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})


// async function p1() {
//     console.log("start");
//     let p=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("in progress");    
//             },2000)
//     })
//     await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
//     console.log("end");
// }
// p1()

function f1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("p1 resolved");   
        },2000)
    })    
}

function f2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("p2 resolved");   
        },3000)
    })    
}

function f3() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("p3 resolved");   
        },1000)
    })    
}

Promise.all([f1(),f2(),f3()]).then((msg)=>{console.log(msg);}).catch()
Promise.race([f1(),f2(),f3()]).then((msg)=>{console.log(msg);}).catch()
