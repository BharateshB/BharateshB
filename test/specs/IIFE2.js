//without IIFE
var userName = "Bill";
let obj={
    display:function (name)
{
    alert("IIFE2.js : " + name);
}
}
obj.display(userName);

//With IIFE

// var userName = "Bill";
// (function () {
//     let obj={
//         display:function (name)
//     {
//         alert("IIFE2.js : " + name);
//     }
//     }
//     obj.display(userName);
    
// })(userName);