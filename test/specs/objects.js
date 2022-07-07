//object property declaration
// const myObj = new Object(),
//       str = 'hi',
//       rand = Math.random(),
//       obj = new Object();
//       myObj[str]='shan'

//       console.log(myObj[str]);
//       console.log(str);

//object properties
//object.prototype.constructor
// function Tree(name) {
//     this.name = name
//   }
  
//   let theTree = new Tree('Redwood')
//   console.log('theTree.constructor is: \n' + theTree.constructor)

//   changing the value of constructor property for anything
//   let a = [];
//   a.constructor = String
//   console.log(a.constructor === String) // true
//   console.log(a instanceof String) //false
//   console.log(a instanceof Array) //true

//object is sealed or frozen
// let a = Object.seal({});
// a.constructor = Number;
// console.log(a.constructor === Number);
// console.log(a.constructor === Object);


function student(name,work) {
    this.name=name;
    this.work=work;
}



function master(role,work) {
    this.role=role;
    this.work=work;
}

let m1=new master("sr","valuation");

student.prototype=m1;

let st1=new student("bh","assignment")


console.log(st1.role);
console.log(st1.work);