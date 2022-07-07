let arr=[1,3,5,6,7,8,9]

let mapf=arr.map((ele)=>{
    return ele*2;
})
console.log(mapf);

function maps(ele){
    return ele*3
}

let mapf2=arr.map(maps)
console.log(mapf2);

let filt=arr.filter((ele)=>{
    return ele%2==0
})
console.log(filt);

function filts(ele) {
return ele%3==0    
}
let filt2=arr.filter(filts)
console.log(filt2);

let redu=arr.reduce((sum,ele)=>{
 return sum+=ele;
},0)
console.log(redu);