function wordLengthFactorial(word) {
    // if(word.length===1){
    //     return 1
    // }
    // else{
    //     return word.length*fact(word.slice(1))
    // }
    return word.length==1? 1:word.length*wordLengthFactorial(word.slice(1))
}
console.log(wordLengthFactorial("hello"));

// function numfactorial(n) {
//     return n<=0?1:n*numfactorial(n-1)
// } 
// console.log(numfactorial(5)); 

// let arr=['a','a','b','n','g','n','f','g']
// let CountVote=arr.reduce((count,ele)=>({
//     ...count,
//     [ele]:count[ele]?count[ele]+1:1
// }),{})

// console.log(CountVote);

// let str1='cinema'
// let str2='anemic'
// function sort(a,b){
//     return a>b?-1:a<b?1:0
//     // if(a<b){
//     //     return -1
//     // }
//     // else if(a>b){
//     //     return 1
//     // }
//     // else return 0
// }
// let arr1=str1.split('').sort().join('')
// console.log(arr1);
// let arr2=str2.split('').sort().join('')
// console.log(arr2);
// // console.log(JSON.stringify(arr1)==JSON.stringify(arr2)); //without join('')
// console.log(arr1==arr2);//with join('')

let str="hello"
console.log(str.slice(1));
// console.log(str.slice(1));
console.log(str);
