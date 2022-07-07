// let maxSpeed = {
//     car: 300, 
//     bike: 60, 
//     motorbike: 200, 
//     airplane: 1000,
//     helicopter: 400, 
//     rocket: 8 * 60 * 60
// };
// let sortable = [];
// for (var vehicle in maxSpeed) {
//     sortable.push([vehicle, maxSpeed[vehicle]]);
// }

// sortable.sort(function(a, b) {
//     return a[1] - b[1];
// });
// console.log(sortable);

// [["bike", 60], ["motorbike", 200], ["car", 300],
// ["helicopter", 400], ["airplane", 1000], ["rocket", 28800]]

//function currying
// function outer(a) {
//    return function inner(b) {
//         return a*b
//     }
// }
// let res=outer(5)
// console.log(res(3));

//print all string combinations
// function combi(str) {
//     for(i=0;i<str.length;i++){
        
//         for (let j = 1; j <= str.length; j++)
//         {
//             if(j>i){
//                 combArr.push(str.slice(i,j));
//             }   
//         }
//     }
//     return combArr
// }

// let combArr=[]
// console.log(combi("fox")); //[ 'f', 'fo', 'fox', 'o', 'ox', 'x' ]

//sort the string in alphabetic order
// let str="javascript"
// let res=str.split('').sort((a,b)=>a>b?1:a<b?-1:0).join('')
// console.log(res);   //aacijprstv

//first letter in the string to uppercase
// let str2="he loves javascript"
// let res2=str2.split(' ').map(ele=>ele[0].toUpperCase()+ele.substring(1,ele.length))
// console.log(res2);  //[ 'He', 'Loves', 'Javascript' ]

//longest word in the string
// let str3="he loves javascript"
// let str3arr=(str3.split(' '));
// let maxLen=Math.max(...str3arr.map(ele=>ele.length))
// let res3=str3arr.filter(ele=>ele.length===maxLen)
// console.log(res3);  //[ 'javascript' ]


//count the number of vowels
// let str4="He loves Javascript";
// let str5=str4.toLowerCase();
// let vowelcount=0;
// for (let index = 0; index < str5.length; index++) {
//     if((str5.charAt(index)==='a')||(str5.charAt(index)==='e')||(str5.charAt(index)==='i')||
//     (str5.charAt(index)==='o')||(str5.charAt(index)==='u')){
//         vowelcount++;
//     }
// }
// // console.log(str5.charAt(0));
// // console.log(str5);
// console.log(vowelcount);


//check for primary number
// function primaryNum(num) {
//     if(num>2){
//     for(i=2;i<num;i++){
//         if(num%i===0){
//             console.log(num+" is not a primary number");
//             break;
//             }  
//             else if(i===num-1){
//                 console.log(num+ " is a primary number");
//             }
//         }
//     }
// }
// primaryNum(11)

// function ArgType(arg) {
//     console.log(typeof(arg));
// }
// let arg=function name(params) {
    
// }
// ArgType(arg)

// let numarr=[2,3,4,5,6,5,6,55,32,3,45,99,98,99]

// let sortArr=numarr.sort((a,b)=>a-b)
// // console.log(sortArr);
// let noDupSet=new Set(sortArr)
// // console.log(noDupSet);
// let setArr=Array.from(noDupSet)
// console.log(setArr);

// console.log(`second lowest is :${setArr[1]} and 
// second highest is :${setArr[setArr.length-2]}  `);

//perfect number
// let num =6;
// let factors=[]
// for (let i = 1; i < num; i++) {
//     if(num%i===0){
//         factors.push(i)
//     }
// }
// let total=factors.reduce((sum,ele)=>(sum+=ele,sum),0)
// if(total===num){
//     console.log(`the num is perfect: ${num}`);
// }
// else{
//     console.log(`the num is not perfect: ${num}`);
// }

// let amnt=[7,[25,10,5,2,1]]
// // console.log(amnt[1][0]);
// let total=amnt[0]
// let coins=[]
// for(let i=0;i<amnt[1].length;i++){
// while(true){
//     if(total>=amnt[1][i]){
// if(total-amnt[1][i]>=amnt[1][i]){
//     total-=amnt[1][i]
//     coins.push(amnt[1][i]);
//     console.log(total);
// }
// else {
//     total-=amnt[1][i]
//     coins.push(amnt[1][i])
//     break;
// }
//     }
//     else{
//         break;
//     }
// }
// if((coins.reduce((sum,val)=>(sum+=val,sum),0))===amnt[0]){
//     break;
// }
// }
// console.log(coins);

//remove duplicates
// let str='thequickbrownfoxjumpsoverthelazybrowndog'
// let newstr=Array.from((new Set(str.split('')))).join('')
// console.log(newstr);

//occurances
// function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
// }
// console.log(count(str));
// console.log(str.split('o').length-1);

// or
let str='the quick brown fox jumps over the lazy brown dog'
// let strarr=str.split(' ')//with space count word and without space count letters
// let res=strarr.reduce((obj,ele)=>(obj[ele]?obj[ele]++:obj[ele]=1,obj),{})
// console.log(res);

// function search(arr,num) {
//     if(arr[Math.floor(arr.length/2)]===num){
//         return Math.floor(arr.length/2)
//     }
//     else if(arr[Math.floor(arr.length/2)]>num){
//         newarr=arr.slice(Math.floor(arr.length/2))
//         search(arr,num)
//     }
//     else{
//         newarr=arr.slice(0,Math.floor(arr.length/2))
//         search(arr,num)
//     }
// }
// search([1,2,3,4,5,6,7,8],4)
let arr=[1,2,3,4,5,6,7,8]
let res=arr.filter(val=>arr.indexOf(4))
console.log(res);

// console.log(arr[Math.floor(arr.length/2)]);