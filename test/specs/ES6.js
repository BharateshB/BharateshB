//object and array destructuring
// function car(model,brand){
//     this.model=model
//     this.brand=brand
// }
// let c1=new car("eon","hyundai")

// let {model:style,brand:company}=c1;
// // console.log(model,brand);
// console.log(style,company);
// console.log(c1.brand);

// let myName, myRole;
// let array = ['Toad'];
// [myName='John', myRole='Software Developer'] = array;
// console.log(myName, myRole)
// console.log(array);

//rest and spread
// let arr=[1,3,4,5,6,7,8,9]
// // let [a,b,...c]=arr;
// // console.log(a,b,c);
// function rest(a,b,...c) {
//     console.log(a,b,c);
// }
// rest(1,3,4,5,6,7,8,9)

// function spread(a,b,c,d,e,f) {
//     console.log(a,b,c,d,e,f);
// }
// spread(...arr)


//Default parameter
// function add(num1, num2=10) {
//     // num2=3;
//     console.log(num1+num2); 
//    }
//    add (5,2) //returns 7
//    add(3)
// function entername(name) {
//     name=name||"enter valid name"
//     console.log(name);
// }
// entername()

//template literals
// let name="ABCD";
// console.log(`my name is
// ${name} and 
// i am from XYZ` 
// );

//Promise
// async function prom(){
//     console.log("start");
//     let p= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("resolved")
//         },2000)
//     })
//     await p.then((msg)=>console.log(msg)).catch()
//     console.log("end");
// }
// prom()

// function p1() {
//    return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("p1 resolved")
//         },3000)
//     })
// }
// function p2() {
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              resolve("p2 resolved")
//          },2000)
//      })
//  }

//  function p3() {
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              resolve("p3 resolved")
//          },1000)
//      })
//  }

//  Promise.all([p1,p2,p3]).then((msg)=>{console.log(msg);}).catch()
// Promise.race([p1,p2,p3]).then((msg)=>{console.log(msg);}).catch()

//class
// class mobile{
// constructor(model,brand){
//     this.model=model;
//     this.brand=brand;
// }
//  a=10;
//  static b=20;
// classfun=function() {
//     console.log("i am inside class function");
// }
// }
// let m1=new mobile("a7","sam")
// console.log(m1.model);
// console.log(mobile.b);
// m1.classfun()


// let map1=new Map();
// // map1.set("prop",{model:"eon",brand:"hyundai"})
// // console.log(map1);

// let obj={
//     name:"xyz"
// }
// map1.set(obj,{model:"eon",brand:"hyundai"})
// map1.set('address',"mys")
// // console.log(map1.get(obj));
// // console.log(obj);
// // console.log(map1.has(obj));
// console.log(map1.size); 

// let map2=new Map();
// map2.set('a',1)
// map2.set('b',2)
// console.log(map2);

// Class
// class Person {
//     constructor(name) {
//     this.name = name;
//   }

//     // defining method
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// let person1 = new Person('John');

// // accessing property
// console.log(person1.name); // John

// // accessing method
// person1.greet(); // Hello John

// class Person{
//     constructor(fname,lname){
//         this.fname=fname;
//         this.lname=lname;
//     }

//     get firstname(){
//         return this.fname
//     }

//     set lastname(ln){
//         this.lname=ln;
//     }
// }

// let per=new Person("bh","b");
// console.log(per.fname);
// per.lastname="h"
// console.log(per.lname);

// function* generate(i) {
//     yield i ;
//     yield i + 10;
//     yield i + 20;
    
//     // while(true){
//     //     yield i++;
//     // }
// }

// let gen=generate(10);

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// class Classroom {
//     constructor(students) {
//         this.students = students;
//     }
//     room() {
//         console.log('This class has  ' + this.students + ' students');
//     }
// }
 
// class sectionA extends Classroom {
//     constructor(students) {
//         super(students);
//     }
//     sec() {
//         console.log('section A');
//     }
// }
  
// let secA = new sectionA(40);
 
// secA.room();
// secA.sec();
// let arr=[1,2,3,6,7]
// let set1=new Set([...arr])
// // console.log(set1);
// set1.add("3")
// set1.delete("3")
// let set2=set1.entries();
// for (const entry of set2) {
//     console.log(entry);
// }
// console.log(set2); 
// console.log(set1);
// let set3=set1.forEach((value)=>{
// console.log(value*2); 
// })

function* someGenerator(n){
    // let n = 0;
    for(let i=0;i<10;i++){
      yield n++;
 }
}
 var g = someGenerator(8);
 g.next();
//  g.next();
 console.log(g.next().value);