// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     }
// };

// //shallow copy
// // let copiedPerson = Object.assign({}, person);
// // both person and copied person objects reference are different but their address object reference is same.

// //deep copy
// let copiedPerson = JSON.parse(JSON.stringify(person));
// // stringify: JS value to JSON string
// //parse: JSON string to object

// copiedPerson.firstName = 'Jane'; // disconnected
// copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
// copiedPerson.address.city = 'Mountain View'; // connected

// console.log(copiedPerson);
// // console.log(person);


// sort an array of objects
let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];
//sort by their age
// let sortAge=employees.sort((x,y)=>x.age-y.age)
// sortAge.forEach(ele=>console.log(ele.firstName,ele.lastName,ele.age));

//sort by strings
//first convert to lowercase and then sort
// employees.sort((a, b) => {
//     let fa = a.firstName.toLowerCase(),
//         fb = b.firstName.toLowerCase();

//     if (fa < fb) {
//         return -1;
//     }
//     if (fa > fb) {
//         return 1;
//     }
//     return 0;
// });

// employees.forEach(ele=>console.log(`${ele.firstName},${ele.lastName}`))
// console.log(employees);

// sort by joining date
// let sortDate=employees.sort((a,b)=>{
//     let ja=new Date(a.joinedDate)
//     let jb=new Date(b.joinedDate)
//     return ja-jb;
// })
// sortDate.forEach(ele=>console.log(ele.firstName+" "+ele.lastName+" "+ele.joinedDate))


//Automation
// let elems = [
//     n1={
//         size:'s',
//         value:38
//     },
//     n2={
//         size:'m',
//         value:40
//     },

//   n3=  {
//         size:'L',
//         value:42
//     }
// ]
// let sizes = [].map.call(elems,elem => elem.value);

// console.log(sizes);//[ 38, 40, 42 ]

// let sizes = elems.map(elem => elem.value);

// console.log(sizes);

// console.log(isNaN("hello")); 

// let obj1={name:"bh",
//         getname:function(){
//             console.log("hi "+ this.name);
//         }}

//     obj1.getname()
//     let obj2={
//         name:"bh2",
//     }
//     obj1.getname.call(obj2)


    // function fun(msg1,msg2) {
    //      console.log(msg1 +" "+ this.name+" "+msg2); 
    //     // return msg1 +" "+ this.name+" "+msg2
    // }

    // let arrfun=(msg1,msg2)=>console.log(msg1 +" "+ this.name+" "+msg2); 

    // let obj={name:"bh"}

    // arrfun.call(obj,"hi","gm")//avoid arrow function
    // fun.call(obj,"hi","gm")
    // let arr=["hi","gm"]
    // fun.apply(obj,arr)

    // let res=fun.bind(obj,"hi","gm")
    // res()