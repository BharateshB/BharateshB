// let mycar=new Map();
// mycar.set("model","eon");
// mycar.set("brand","hyundai")
// console.log(mycar.get("model"));
// console.log(mycar);

// let arr=[["year","2016"],["color","gray"]] 
// let mycar=new Map(arr);         //passing array to define properties
// mycar.set("model","eon");
// mycar.set("brand","hyundai")
// console.log(mycar.get("model"));
// console.log(mycar);

//for...of loop to get properties
// for (const [key,value] of mycar) {
//     console.log(key+" : "+value);
// }

//for...of loop to get only keys
// for (const key of mycar.keys()) {
//     console.log(key);
// }

// //to clone
// let yourcar=new Map(mycar);
// console.log(yourcar);
// console.log(yourcar===mycar);

//set
let arr=[2,3,6,5,6,5,8,9,2,1]
let setarr=new Set(arr)
console.log(setarr);
console.log(typeof(setarr));
let arrback=Array.from(setarr)
console.log(arrback);
