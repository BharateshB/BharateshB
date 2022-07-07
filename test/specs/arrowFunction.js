// arrow function:this keyword
let name="global"
// let norFun={
//   name:"abc",
//   valueOfThis:function () {
//     console.log(this.name);
//     // return this
//   }
// }

// let arrFun={
//   name:"xyz",
//   valueOfThis: (name)=>{
//     console.log(this.name);
//     // return this

//   }
// }
// norFun.valueOfThis();
// arrFun.valueOfThis();

// console.log(norFun.valueOfThis() +"normal function output:");
// console.log(arrFun.valueOfThis() +"arrow function output:");

// function test() {
//   console.log(this);
// }
// test();


// let animals = {
//     // add property
//     domesticAnimals: ["cat", "dog", "cow", "goat", "sheep", "donkey", "pig", "horse"],
//     // add method
//     printdomesticAnimals: function () {
  
//       // print after 3 seconds
//       setTimeout(() => console.log(this.domesticAnimals.join(" - ")), 3000)
//       // setTimeout(function(){
//       //   console.log(this.domesticAnimals.join(" - "))
//       // },3000)()
//     },
//   };
//   animals.printdomesticAnimals();

  // A simplistic object with its very own "this".
// var obj = {
//     num: 100
// }

// // Setting "num" on window to show how it is NOT used.
// let num = 2020; // yikes!

// // A simple traditional function to operate on "this"
// var add = function (a, b, c) {
//   return this.num + a + b + c;
// }

// // call
// var result = add.call(obj, 1, 2, 3) // establishing the scope as "obj"
// console.log(result) // result 106

// // apply
// const arr = [1, 2, 3]
// var result = add.apply(obj, arr) // establishing the scope as "obj"
// console.log(result) // result 106

// // bind
// var result = add.bind(obj) // establishing the scope as "obj"
// console.log(result(1, 2, 3)) // result 106

// // Arrow Example
// // ----------------------

// // A simplistic object with its very own "this".
// var obj = {
//     num: 100
// }

// // Setting "num" on window to show how it gets picked up.
// window.num = 2020; // yikes!

// // Arrow Function
// var add = (a, b, c) => this.num + a + b + c;

// // call
// console.log(add.call(obj, 1, 2, 3)) // result 2026

// // apply
// const arr = [1, 2, 3]
// console.log(add.apply(obj, arr)) // result 2026

// // bind
// const bound = add.bind(obj)
// console.log(bound(1, 2, 3)) // result 2026

// var obj = {
//   count : 10,
//   doSomethingLater : function (){
//       setTimeout(function(){ // the function executes on the window scope
//           this.count++;
//           console.log(this.count);
//       }, 300);
//   }
// }

// obj.doSomethingLater();
// var obj = {
//   count : 10,
//   doSomethingLater : function(){
//       // The traditional function binds "this" to the "obj" context.
//       setTimeout( () => {
//           // Since the arrow function doesn't have its own binding and
//           // setTimeout (as a function call) doesn't create a binding
//           // itself, the "obj" context of the traditional function will
//           // be used within.
//           this.count++;
//           console.log(this.count);
//       }, 300);
//   }
// }

// obj.doSomethingLater();
// var arguments = [1, 2, 3];
// var arr = () => arguments[0];

// arr(); // 1

// function foo(n) {
//   var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
//   return f();
// }

// let ret=foo(3); // 3 + 3 = 6
// console.log(ret);

// function foo(n) {
//   var f = (...args) => args[0] + n;
//   return f(10);
// }

// let res=foo(1);
// console.log(res);

//regular functio:this
// function Person() {
//   this.name = 'Jack',
//   this.age = 25,
//   this.sayName = function () {

//       // this is accessible
//       console.log(this.age);
//       // let name="bh"
//       function innerFunc() {

//           // this refers to the global object
//           console.log(this.name);
//           console.log(this);
//       }
//       innerFunc();
//   }
// }

// let x = new Person();
// x.sayName();

//Arrow functio:this
// function Person() {
//   this.name = 'Jack',
//   this.age = 25,
//   this.sayName = function () {
//       console.log(this.age);
//       let innerFunc = () => {
//           console.log(this.age);
//       }

//       innerFunc();
//   }
// }

// const x = new Person();
// x.sayName();

//Arguments binding
// function fun(a,b,c){
//   console.log(arguments.length);
//   console.log(arguments);
// }
// fun(4,5,6)


// let af=(a,b,c)=>{
//   console.log(arguments.length);
//   console.log(arguments);
// }

// af(1,2,3)

//solution using spread operator
// let af=(...n)=>{
//   console.log(n);
// }

// af(1,2,3)

// const name = 'Jack';
// const greet = true;

// function tagExample(strings, nameValue) {
//     let str0 = strings[0]; // Hello
//     let str1 = strings[1]; // , How are you?

//     if(greet) {
//         return `${str0}${nameValue}${str1}`;
//     }
// }

// // creating tagged literal
// // passing argument name
// const result = tagExample`Hello ${name}, How are you?`;

// console.log(result);

const Shape = function(shapeName) {
  this.shapeName = shapeName;
  this.showName1 = function() { console.log(this.shapeName); };
  this.showName2 = () => { console.log(this.shapeName); };
};

const circle = new Shape('Circle');
const square = new Shape('Square');

circle.showName1(); // Circle
circle.showName2(); // Circle

// // The regular function can have its 'this' value changed, but the arrow function cannot
circle.showName1.call(square); // Square (because "this" is now the square object)
circle.showName2.call(square);