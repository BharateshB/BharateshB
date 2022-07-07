
// Closure
// function normal() {
//     let y=2;
//     console.log(++y); 
// }
// normal();
// normal()
// function outer() {
//     let x=3;
//     function inner() {
//         // console.log(++x) ;
//         return ++x
//     }
//     return inner
// }
// let retfun=outer()
// retfun();
// retfun()
// let val=retfun()
// console.log(val);
// val=retfun()
// console.log(val);

// currying - closure
// function outer(a) {
//     function inner(b) {
//          console.log(a+b) ;
//     }
//     return inner
// }
// let refun=outer(6);
// refun(5)
// refun(9)


function clos(){
    let a=10;
    let b=a;
    function inc() {
        console.log(a++);
    }
    function squ() {
        console.log(b*b);
    }
    function add() {
        console.log(a+50);
    }
    return{
        inc,
        add,a,squ
    }
}

let res=clos();
res.inc()
res.inc()
// res.add()
// res.add()
console.log(res.a);
res.squ()