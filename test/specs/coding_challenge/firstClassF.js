// example1
// let x=2
// let createMul=y=>x*y;
// let double =createMul(2);
// let triple=createMul(3);
// let quad=createMul(4);
// console.log(double);
// console.log(triple);
// console.log(quad);

// ex 2: closure: declaring private variables using getters and setters

// let Person=function({name,age,desn}){         //object destructuring
//     var _name=name;
//     var _age=age;
//     var _desn=desn;

//     return {
//         getName:()=>_name,
//         getAge:()=>_age,
//         getDesn:()=>_desn

//     }
// }

// let p1=new Person({name:"bh",age:"30",desn:"Jr"})
// console.log(p1.getName()); 
// console.log(p1.getDesn());
// console.log(p1.getAge());

// let operations=function(x,y) {
//     let greetings="GM";
    
//     function add() {
//         console.log(x+y);
//     }
//     function mul() {
//         console.log(x*y);
//     }
//     function div() {
//         console.log(parseInt(x/y));
//     }

//     return{
//         getAdd:()=>add(),   //make function name is private
        // or simply
//         add,
//         mul,
//         div,
//         getGreeting:()=>greetings,

//         setGreetings:newGreetings=>greetings=newGreetings
//     }
// }

// let oper=new operations(10,3);
// oper.getAdd(); 
// oper.add()
// oper.mul()
// oper.div()
// console.log(oper.getGreeting());
// oper.setGreetings("GE")
// console.log(oper.getGreeting()); 

// With IIFE
// let operationsIIFE=(function() {
//     function add(x,y) {
//         console.log(x+y);
//     }
//     function mul(x,y) {
//         console.log(x*y);
//     }
//     function div(x,y) {
//         console.log(parseInt(x/y));
//     }

//     return{
//         add,
//         mul,
//         div
//     }
// })()


// operationsIIFE.add(3,2)


// Map,filter,reduce
//map
// let arr=[1,2,3,4,5,6,7,8,9]
// let double=x=>x*2;
// let af=arr.map(double)
// console.log(af);


//filter
// ex1
// let even=x=>x%2==0;
// let evenf=arr.filter(even)
// console.log(evenf);


// ex2
// let places=['mysuru','bengaluru','hubli','mangaluru']
// let isLongerThanFive=word=>word.length>5;
// let longwords=places.filter(isLongerThanFive)
// console.log(longwords);

//ex2-another approach
// let createlengthTest=minValue=>
//                         word=>word.length>minValue; //return function
//  let longWords=places.filter(createlengthTest(5))
//  console.log(longWords);

//  let sortedplaces=places.sort((a,b)=>{
//      if(a<b){
//         return -1
//     }
//     else if (a>b){
//         return 1
//     }
//     else{
//         return 0
//     }

//  })
//  console.log(sortedplaces);
//reduce

let employees=[
    {name:"a",
    salary:10000},
    {name:"b",
    salary:20000},
    {name:"c",
    salary:30000},
    {name:"d",
    salary:40000},
    {name:"e",
    salary:50000},
    {name:"f",
    salary:60000},
]

// let empMoreSal=employees.filter(emp=>emp.salary>20000)
// console.log(empMoreSal);
// let empsal=empMoreSal.map(emp=>emp.salary)
// console.log(empsal);
// let totalSal=empsal.reduce((total,sal)=>{
// //    return (total+=sal)/empsal.length;
//     return total+=sal;
// },0)
// console.log(totalSal/empsal.length);


let empMoreSal=emp=>emp.salary>20000;

let empsal=emp=>emp.salary

let totalSal=(total,sal)=>{
    return total+=sal;
}

let TotalSal=employees.filter(empMoreSal).map(empsal).reduce(totalSal)

console.log(TotalSal);