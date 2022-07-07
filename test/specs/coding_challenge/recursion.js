//countdown
// function countdown(x){

// if(x==0){
//     return;
// }
// else{
//     console.log(x);
// }
// countdown(x-1);
// }

// countdown(10);

// factorial
// function fact(num) {
//     return num==0?1:num*fact(num-1)
// }
// console.log(fact(5));

//gcd of two numbers
// function gcd(n1,n2){
//     return n2==0?n1:gcd(n2,n1%n2)
// }
// console.log(gcd(8,12)); 

// range of numbers
// var range = function(start_num, end_num) 
// {
//   if (end_num - start_num === 2) 
//   {
//     return [start_num + 1];
//   } 
//   else 
//   {
//     //   console.log(end_num - 1);
//     var list = range(start_num, end_num - 1);
//     // console.log(end_num - 1);
//     list.push(end_num - 1);
//     return list;
//   }
// };

// console.log(range(2,10));

//or recursion:range
// function range(n1,n2) {
//     if(n1>n2){
//         let temp1=n1;
//         let temp2=n2;
//         return range(temp2,temp1)
//     }
//     else if(n2-n1===1){
//             rangeNum.push(n1+1)
//             return rangeNum;
//         }
//         else {
//             while (n2-n1>1) {
//                 rangeNum.push(n1+1)
//                 n1++;
//             }
//             return rangeNum;
//         }
//     }  
// let rangeNum=[];
// console.log(range(10,2));

//sum of range
var array_sum = function(my_array) {
    if (my_array.length === 1) {
      return my_array[0];
    }
    else {
      return my_array.pop() + array_sum(my_array);
    }
  };
  
  console.log(array_sum([1,2,3,4,5,6]));
