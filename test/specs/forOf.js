//array
let arr=[1,2,3,4,5,5,6,6,8]
// for(let ele of arr){
//     console.log(ele);
// }

//string
// let str="sony"
// for(let ch of str){
//     console.log(ch);
// }

// let set=new Set([...arr])
// for(let ele of set){
//     console.log(ele);
// }

let obj={}
let obj2={
    a:1,
    b:2
}
let map=new Map();
map.set(obj,{z:1})
map.set(obj2,{'y':"last-1"})
map.set('b',2)
map.set('c',3)

console.log(map);
console.log(map.get('b'));

for(let [key,value] of map){
    console.log(`${key} : ${value}`);
}

