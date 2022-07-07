// let arr=[1,2,3,4,5,6]
// let arr2=[10,20,30,30,50]
// function spread(a,b,c,d,e,f){
// console.log(a,b,c,d,e,f);
// }

// spread(...arr)

// function rest(a,b,...c){
//     console.log(a,b,c);
// }
// rest(...arr);

// let concatArray=[...arr,...arr2]
// console.log(concatArray);

// let obj1={
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }

// let obj2={
//     x:10,
//     y:20,
//     z:30
// }

// let concatObjects={...obj1,...obj2}
// console.log(concatObjects);

// let arrObj=Array.from(obj1)
// console.log(arrObj);
// let arr=[10,20,30,40]
// let obj=Object.assign({},arr)
// console.log(obj);

// let obj2={...arr}
// console.log(obj2);

// let arr2=Object.entries(obj2)
// console.log(arr2);

// let obj3=Object.fromEntries(arr2)
// console.log(obj3);

// let objArr=arr.reduce((obj,ele,ind)=>{
//     obj[ind]=ele;
//     return obj;
// },{})
// console.log(objArr);
// let arrEntries=arr.entries();
// for(let entry of arrEntries){
//     console.log(entry);
// }


// let str="INDIA"
// let arrStr=Array.from(str)
// console.log(arrStr);

// let arrKeys=""
// let keys=arr.keys()
// for(let key of keys){
//     arrKeys+=key
// }
// console.log(arrKeys);

function display(...args) {  
    let ans = 1;  
    for (let i of args) {  
        ans *= i;  
    }  
    console.log("Product = "+ans);  
  }  
    
  display(4, 2, 3);