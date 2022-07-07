// let arr23=[1,2,3,4,5]

// console.log(arr23.slice(2));

// console.log(arr2);
// console.log(Array.isArray(arr));

// let arr2=arr.slice()
// console.log(arr2);

// let arr3=[...arr]
// console.log(arr3);

// arr3[5]=6;
// console.log(arr3);

// let first=function (arr,len) {
    
//     return len<0? []:arr.slice(0,len); 
// }

// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// let last =function(array,n) {
    // if (array == null) 
    // return void 0;
//   if (n == null) 
//      return array[array.length - 1];
//   return array.slice(Math.max(array.length - n, 0)); 
// }
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// console.log(Math.max(1, 0));

// let myColor = ["Red", "Green", "White", "Black"];
// let soln=myColor.join('+')
// console.log(soln);

// let sa=[ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// let sort=function(a,b) {
//     if(a<b){
//         return -1
//     }
//     else if(a>b){
//         return 1
//     }
//     else 0
// }
// console.log(sa.sort((a,b)=>a-b))
// console.log(sa.sort()); 

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3,'a', 2, 4, 9, 3]

let oa=arr1.reduce((obj,ele)=>({
    ...obj,
    [ele]:obj[ele]?obj[ele]+1:1
}),{})
// console.log(oa);
for (const key in oa) {
        // console.log(oa[key]);
}
console.log(Math.max(...Object.values(oa))); 
console.log(Object.values(oa));
