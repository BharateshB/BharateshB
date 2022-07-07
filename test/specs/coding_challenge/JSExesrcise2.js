//convert to byte size
// const byte_Size = str => new Blob([str]).size;
// console.log(byte_Size('123456'));  
// console.log(byte_Size('Hello World'));  
// console.log(byte_Size('Ã¢')); 

const { use } = require("chai");

//replace obj1 keys with obj2 values
// let keysMap={x:24,y:25,z:26}
// const renameKeys=(keysMap,obj)=>
// Object.keys(obj).reduce(
//     (repl,key)=>({
//         ...repl,
//        ...{[keysMap[key]||key]:obj[key]}
// }),
// {}
// );
// let obj={a:"A",b:"B",c:"C"}
// console.log(renameKeys({a:"X",b:"Y",c:"Z"},obj));

// const rename_keys = (keysMap, obj) =>
//   Object.keys(obj).reduce(
//     (acc, key) => ({
//       ...acc,
//       ...{ [keysMap[key] || key]: obj[key] }
//     }),
//     {}
//   );
// const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
// console.log("Original Object");
// console.log(obj);
// console.log("-------------------------------------");
// result = rename_keys({ name: 'firstName', job: 'Actor' }, obj);
// console.log("New Object");
// console.log(result);


//return truthy values in one array and falsy values in another



//to find every nth ele
// const every_nth = (arr, nth) => arr.filter((i) => i % nth === nth - 1);
// console.log(every_nth([1, 2, 3, 4, 5, 6], 1));
// console.log(every_nth([1, 2, 3, 4, 5, 6], 2));
// console.log(every_nth([1, 2, 3, 4, 5, 6], 3));
// console.log(every_nth([1, 2, 3, 4, 5, 6], 4));


//decapitilize first letter
// let str="Javascript" 
// let remstr=str.substring(1,str.length)
// // console.log(remstr);
// console.log(str.split('')[0].toLowerCase()+remstr)

//separate two groups based on truthy and falsy values
// let bifurcate=(arr1,filterArr)=>arr1.reduce((resArr,val,i)=>(resArr[filterArr[i]?0:1].push(val),resArr),[[],[]])
// console.log(bifurcate([1,2,3,4],[true,false,true,true])); 
// console.log(bifurcate([1,2,3,4],[true,true,true,false])); 
// console.log(bifurcate([1,2,3,4],[true,false,false,false])); 
// console.log(bifurcate([1,2,3,4],[false,false,true,false])); 
                      
//result a array with all possible combinations of two arrays
// let arrComb=(a1,a2)=>a1.reduce((resArr,a1val)=>(resArr.concat(a2.map(a2val=>[a1val,a2val]))),[])
// console.log(arrComb([1,2,3],["a","b","c"])); 

// let ar1=[1,2,3,4,5,6,7,8]
// let ar2=[2,3,34,5,6,78]
// // let ar3=[...ar1,...ar2]
// let newar=new Set([...ar1,...ar2])
// console.log(Object.values(newar));

// //filter the matched numbers
// let filtArr=(arr,...args)=>arr.filter(ele=>!args.includes(ele))
// console.log(filtArr([1,2,3,4],1,2));


//return array of random integers of certain length
// function rangeRand(arr,arrLen,min,max) {
//     for(let i=0;i<arrLen;i++){
//         arr.push(parseInt((max-min)*Math.random()+min))
//     }
//     return arr
// }
// console.log(rangeRand([],10,20,40));

// // or 
// const random_intArray_In_Range = (min, max, n = 1) =>
//   Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(random_intArray_In_Range(1, 20, 10));

// let arr=[1,2,3,4,5,6]
// let res=[]
// let func=function(min,max) {
//     res.unshift(min,max)
// }
// // console.log(Math.min(...arr));
// func(Math.min(...arr),Math.max(...arr));
// console.log(res);

// let arr=[1,2,3,4,9,8,7,6,5]
// let sortarr=arr.sort((a,b)=>a-b)
// console.log(sortarr)

const colors = [{ name: 'red', len: 3 }, { name: 'orange', len: 6 }, { name: 'green', len: 5 }];

    // res.push(val.name)
    // function sorted(colors) {
    //    return colors.sort((a,b)=>{
    //         if(a.len>b.len){
    //             return 1
    //         }
    //         else if(a.len<b.len){
    //             return -1
    //         }
    //         else{
    //             return 0
    //         }
    //     })
    // } 
    // or
    let sorted=((colors,name=false,len=false)=>{
    if(name){
        return colors.sort((a,b)=>(a.name>b.name)?1:((a.name<b.name)?-1:0))
    }
    else if(len){
        return colors.sort((a,b)=>a.len-b.len);
    }
})
console.log(sorted(colors,len=true)); 
// let sortlen=colors.filter((v)=>v.len>2)
// console.log(sortlen);
// let colorname=colors.map((ele)=>{
//         return ele.name
//     })
//     console.log(colorname);