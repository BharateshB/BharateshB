// let a;
// let b=null;
// let c=[];
// // console.log(typeof(a));
// // console.log(typeof(b));
// // // c=null
// // console.log(typeof(c));
// // console.log(a==c);

// let num=99;
// let str=String(num)
// console.log(str);
// console.log(typeof(str));
// let jsonvalue=JSON.stringify(num)
// console.log(jsonvalue);
// console.log(typeof(jsonvalue));

let obj={
    a:"hi",
    b:"hello"
}

console.log( Object.entries(obj));
// console.log("Object.toString :"+Object.toString(obj));
// console.log("Object.values :"+Object.values(obj));
// console.log(Object.keys(obj));
// console.log(Object.keys(obj).length);
// // Object.freeze(obj)
// obj.c="hru";
// console.log(obj);
// console.log(Object.isFrozen(obj))
// Object.seal(obj)
// obj.b="hru";
// console.log(obj);

// function fun() {
//      this.a=1;
//     this.b=2;
// }

// fun.prototype.getA=function () {
//     return this.a
// }
// // console.log(fun.a);
// let o1=new fun();
// console.log(o1.getA());

// function mob(name,model) {
//     this.name=name;
//     this.model=model;
// }
// let m1=new mob("Inf","HS")
// console.log(m1);


// mob.prototype.getName=function () {
// return (this.name)  
// }
// // console.log(m1.name);
// console.log(m1.getName());


// function mobile(name,model,price) {
// mob.call(this,name,model)
// this.price=price;    
// }
// let m2=new mobile("sam","a7",10000)
// console.log(typeof(m2));

// mobile.prototype.getPrice=function() {
//   return this.price;
// }

// let m3=new mobile("nokia","710",15000);
// console.log(m3.price);
// console.log(m2.getPrice());

// function car(model,color,company){
//     this.model=model;
//     this.color=color;
//     this.company=company;
// }

// let c1=new car("eon","grey","hyundai");

// car.prototype.address=function() {
//     return (this.model + " belongs to mysore") 
// }

// function ownerInfo(model,color,company,name){
//  car.call(this,model,color,company)
//  this.name=name;
// }
// // ownerInfo.prototype=Object.create(car.prototype)
// let owner=new ownerInfo("safari","black","tata","bharatesh")
// console.log(owner);


// car.prototype.getModel=function(){
//     return this.model;
// }

// car.prototype.getColor=function(){ 
//     return this.color;
// }
// console.log(c1.getModel());

// console.log(c1);


// console.log(typeof(c1));
// console.log(c1.color);
// var c2=new car("ambassador","white","GM")
// console.log(c2);
// console.log(typeof(c2));
// console.log(c1.color);
// var c3=c2;
// c3.color="black";
// console.log(c2.color);
// c1.fuelType="petrol"
// console.log(c1.fuelType);

//use object.assign to modify properties
// let obj={
//     name:"ABC"
// }

// Object.assign(obj,{
//     name:"DEF",
//     age:30
// })
// console.log(obj);  //overrides the existing object

// let obj2=Object.assign({},obj,{
//     name:"DEF",
//     age:30
// })
// console.log(obj); //not overridden
// console.log(obj2);  //new object

 //use object.define
//  let obj={}
//  Object.defineProperty(obj,"name",{
//      value:"DEF",
//      writable:true
//  })
//  obj.name="xyz"
// console.log(obj.name);
// console.log(obj);

// Object.defineProperties(obj,{name:{
//     value:"ABCD",
//     writable:true
// },
// age:{
//     value:35,
//     writable:true
// }
// })
// console.log(obj.name);
// console.log(obj.age);

// let obj2=Object.defineProperties({},{
//     name:{
//         value:"Mysore",
//         writable:true
//     },
//     address2:{
//         value:"Bangalore",
//         writable:true
//     }
// })
// console.log(obj2.name);
// console.log(obj2.address2);
// console.log(obj.address);
// const anObj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(anObj))

// const myObj = Object.create({}, {
//     getFoo: {
//       value: function () { return this.foo; }
//     },
    // address:this.address
//   });
//   myObj.foo = 1;
//   myObj.address="mysore"
//   console.log(Object.keys(myObj));
//   console.log(Object.getOwnPropertyNames(myObj));

//   for (const key in myObj) {
//       if (Object.hasOwnProperty.call(myObj, key)) {
//           const element = myObj[key];
//           console.log(element);
//       }
//   }

//   let myobj2={
//       fname:"bh",
//       lname:"b",
//       address: {
//            addr:"mysore  is the place"
//       }
//   }

//   for (const key in myobj2) {
//     if (Object.hasOwnProperty.call(myobj2, key)) {
//         const element = myobj2[key];
//         console.log(element);
//     }
// }


let obj1={fname:"bh",
lname:"b"
}
// for (const [key,value] of Object.entries(obj1)) {
//     console.log(key+":"+value);
// }
let obj22=Object.create(obj1)
// {
//     address="mysore"
// }
obj22.lname="h"
console.log(obj22.lname);   
console.log(obj22); 
// console.log(obj1.lname); 
// for (const key in obj1) {
//     if (Object.hasOwnProperty.call(obj1, key)) {
//         const element = obj1[key];
//         console.log(element);
//     }
// }

function func (param ={color:'green',code:'007'}){
       var defaults = {
         color: 'red',
         shape: "square"
       };
       var s = Object.assign({}, param, defaults);
    // ...
    // Rest of function
    console.log(s);
    }
    func()


    