//without IIFE
var userName = "Steve";
let obj={
    display:function (name)
{
    alert("IIFE.js :" + name);
}
}
obj.display(userName);

//With IIFE
// var userName = "Steve";
//     (function () {
//         let obj={
//     display:function (name)
//     {
//         alert("IIFE.js :" + name);
//     }
//     }
    
//     obj.display(userName);
//       })(userName);