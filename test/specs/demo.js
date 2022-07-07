// displayNum(10, 20, 30);
// displayNum(3)

// function displayNum(...b){
//     var res=0;
//     for (const ele of b) {
       
//        res+=ele;
//     }
//     console.log(res);
// }
// displayNum(10, 20, 30,23,57);
// // displayNum(3);
let employees = [
    {
    "id": 11,
    "name":"Abhinav",
    "salary":75000
    },
    {
    "id": 2131,
    "name":"Abhinav",
    "salary":62000
    },
    {
    "id": 3012,
    "name":"Raj",
    "salary":32000
    }]
    let emprepname=employees.reduce((obj,val)=>{
        obj[val.name]?obj[val.name]++:obj[val.name]=1
        return obj
    },{})
    console.log(emprepname);
    // let empname=employees.map((ele)=>{
    //     return ele.name
    // })
    // console.log(empname);
    // let empsal=employees.filter((ele)=>{
    //     return ele.salary>60000
    // })
    // console.log(empsal);
    // let empsalTotal=employees.reduce((sum,ele)=>{
    //     return sum+=ele.salary
    // },20000)
    // console.log(empsalTotal);

// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += ","+person[x];
// }
// console.log(text);

// let numArr=[1,2,3,4,5,6]
// let sum =0;
// let j=0;
// while (j<numArr.length) {
//     sum+=numArr[j]
//     j++;
// }
// console.log(sum);

// let k=numArr.length;
// let sum2=0;
// do{
//     sum2+=numArr[0]
//     k++;
// }
// while (k<numArr.length)
// do {
    
// } while (condition);
// // for (const e in numArr){
// //     sum+=numArr[e]
// // }
// console.log(sum2);

// // for (const it of numArr) {
// //     sum+=it
// // }
// let textarr="";
// function forEach(par){
// numArr.forEach(ele => {
//     par+=ele
// })
// console.log(par);
// }

// forEach(sum)
// forEach(textarr)

// let str5="bharatesh";
// let resStr=""
// for (const ele of str5) {
//     resStr+=ele
// }

// let i=0;
// while (i<str5.length) {
//     resStr+=str5[i]
//     i++;
// }
// console.log(resStr);


// let objCar={
//     model:"eon",
//     brand:"hyundai",
//     color:"red"
// }
// //break
// for (const key in objCar) {
//     if(key=="brand"){
//         break;
//     }
//     else{
//     console.log(key+":"+objCar[key]);
//     }
// }

// //continue
// for (const key in objCar) {
//     if(key=="brand"){
//         continue;
//     }
//     else{
//     console.log(key+":"+objCar[key]);
//     }
// }

// let numArr2=[10,20,30,40,50]
//break
// for (const num of numArr2) {
//     if(num>30){
//         break;
//     }
//     else{
//         console.log(num);
//     }
// }

// continue
// for (const num of numArr2) {
//     if(num==30){
//         continue;
//     }
//     else{
//         console.log(num);
//     }
// }
// let i=0;
// while (numArr2[i]) {
//     if (numArr2[i]>40){
//         break;
//     }
//     else console.log(numArr2[i]);
//     i++;
// }