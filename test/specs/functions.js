       //first function
// const collect = require('collect.js');
// const nums = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
// const data = collect(num);
// let value = nums.first(e => e =4);
// console.log(value);

// const nums = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
// let value = _.first(nums);
// console.log(value);

       //function declaration and invoking 
// function showMessage(name) {
//     console.log( 'Hello '+ name );
//   }
//   showMessage("Bharatesh");

        //local variables
  // function showMessage() {
  //   let message = "Hello, I'm JavaScript!"; // local variable
  //   console.log( message );
  // }
  // showMessage(); // Hello, I'm JavaScript!
  // console.log( message ); // <-- Error! The variable is local to the function
 

        //Outer Variables
    // let userName = 'John';

    // function showMessage() {
    // userName = "Bob"; //  changed the outer variable
    // //  let userName = 'Bob';  //shadowing outer variable
    // let message = 'Hello, ' + userName;
    // console.log(message);
    //  }
    //   // John before the function call
    //  console.log( userName );

    //  showMessage();    
    //  console.log( userName ); // Bob, the value was modified by the function

    //default parameter
    // function showMessage(from, text) {
    //     console.log( from + ': ' + text );
    //   }
      
    //   let from = "Ann";
      
    //   showMessage(from);

      //assign default values 
    
      // function showMessage(from, text = "no text given") {
      //   console.log( from + ": " + text );
      // }
      // showMessage("Ann");

      //an explicit check for undefined:    
      // function showMessage(from, text) {
      //   if (text === undefined) {
      //     text = 'no text given';
      //   }
      
      //   console.log( from + ": " + text );
      // }
      // showMessage("Ann");


//use the || operator:
    // function showMessage(from,text) {
    //     text = text || 'empty';
    // console.log( from + ": " + text );
    // }   
    // showMessage("Ann");

//multiple return
    // function checkAge(age) {
    //     if (age >= 18) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    //   let age =17;
    //   if ( checkAge(age) ) {
    //     console.log( 'Access granted' );
    //   } else {
    //     console.log( 'Access denied' );
    //   }

//copy a function to another variable:
// function sayHi() {   // (1) create
//     console.log( "Hello" );
//   }
  
//   let func = sayHi;    // (2) copy
  
//   func(); // Hello     // (3) run the copy (it works)!
//   sayHi(); // Hello    //     this still works too (why wouldn't it)    

  //Callback functions
  // function ask(question, yes, no) {
  //   question =true;
  //   if (question) yes()
  //   else no();
  // }

  // function showOk() {
  //   console.log( "You agreed." );
  // }
  
  // function showCancel() {
  //   console.log( "You canceled the execution." );
  // }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  // ask("Do you agree?", showOk, showCancel);


// //Function declaration vs function expression
// sayHi("John"); // Hello, John

// function sayHi(name) {
//     console.log( `Hello, ${name}` );
// }

 // error!
//  sayHello("John");
// let sayHello = function(name) {  // (*) no magic any more
//     console.log( `Hello, ${name}` );
// };
// sayHello("John");

//arrow function
//Example1
// let sum = (a, b) => a + b; 
/* This arrow function is a shorter form of: 
let sum = function(a, b) { 
return a + b; 
}; */ 
// console.log( sum(1, 2) );

//example2: single line execution
// let double = n => n * 2; 
// console.log( double(3) ); 

//example3:Multiple line execution
// let sum1 = (a, b) => {  // the curly brace opens a multiline function
//   let result = a + b;
//   return result; // if we use curly braces, then we need an explicit "return"
// };

// console.log( sum1(1, 2) ); // 3

//Example4:use of this keyword in arrow

// const counter = {
//   count: 0,
//   next: () => ++this.count,
//   current: () => this.count
// };
// console.log(counter.next());

// //Example5:use of this keyword in normal function
const counter = {
  count: 0,
  next() {
      return ++this.count;
  },
  current() {
      return this.count;
  }
};
console.log(counter.next());

//IIFE
//Example1:Without IIFE any other javascript files can access
// function generateMagicNumber() {
//   return Math.floor(Math.random() * 100);
// }

// console.log("This is your magic number: " + generateMagicNumber());

// var favoriteNumber = 5;
// console.log("Twice your favorite number is " + favoriteNumber * 2);


//Example1:Creating Private Variables and Functions using IIFE
// (function(){
// function generateMagicNumber() {
//   return Math.floor(Math.random() * 100);
// }

// console.log("This is your magic number: " + generateMagicNumber());

// var favoriteNumber = 5;
// console.log("Twice your favorite number is " + favoriteNumber * 2);
// })();
// console.log( favoriteNumber);


// Example2:Without IIFE when callbacks are executed in loops
// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () {
//       console.log('I reached step ' + i);
//   }, 1000 * i);
// }

// Example2:With IIFE when callbacks are executed in loops
// for (var i = 1; i <= 5; i++) {
//   (function(step){
//     setTimeout(()=>{
//       console.log('i Reached step '+step)
//     },1000*step)
//   })(i)
// }


//
