
// let arr=[
//     { id: 10, name: 'apple' },
//     { id: 20, name: 'orange' }
//   ]

//   let arr2=[
//         {id:30,name:'banana'},
//         {id:40,name:'mango'}
//     ]

// function fun(arr1){  
//   return resobj=arr1.reduce((obj, v) => {
//     // obj[v.id]=v  //{ '10': { id: 10, name: 'apple' }, '20': { id: 20, name: 'orange' } }
//     const {...data}=v.name;
//     obj[v.id]=data
//     return obj;
//   }, {})
// }

// let ret=fun(arr)
// console.log(ret);
// function fun(arr1){  
//     return resobj=arr1.map((v) => {
//       return v.id*2+":"+v.name
//     })
//   }

//   function fun(arr1){  
//     return resobj=arr1.filter((v) => {
//       return v.id>30
//     })
//   }
// let ret=fun(arr2)
// console.log(ret);


// let arrs=[1,2,3]

// let resSq=arrs.reduce((objsq,v)=>{
//     objsq[v]=v*v;
//     return objsq;
// },{})

// console.log(resSq); //{ '1': 1, '2': 4, '3': 9 }


// const all=(arr,fn)=>{
//    return arr.some(fn)
// }

// console.log(all([4,2,3],x=>x>3));   //some=true,every=false


// const allEqual=(arr)=>{
// return arr.every(value=>value===arr[0])
// }

// console.log(allEqual([1,2,3,4,5,6]));   //false
// console.log(allEqual([1,1,1,1]));   //true


//compare two objects/arrays
// let arr1=[1,2,3,4]
// let arr2=[1,2,3,4]
// let arr3=arr2
// let a=9
// let b=9
// console.log(Object.is(a,b)); //true
// console.log(Object.is(arr2,arr3)); //true
// console.log(Object.is(arr1,arr2));  //false
// console.log( JSON.stringify(arr1)==JSON.stringify(arr2));   //true
// console.log(_.isEqual(arr1,arr2));


// conversions from Array to String or vice versa
let arr1=[1,2,3,4]
let str="joy";

//String to Array
// console.log([...str]);  //[ 'j', 'o', 'y' ]

//reverse a string
// console.log([...str].reverse().join(''));   //  yoj

//Array to string
// console.log(arr1.toString())    //1,2,3,4

//Reverse an array
// console.log(arr1.reverse());    //[ 4, 3, 2, 1 ]

// array to string and back to array  
// console.log(arr1.toString().split(','));    //[ '1', '2', '3', '4' ]
