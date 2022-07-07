//to display today's day and date

// let datelist =new Date
// console.log(datelist);
// let dayarr=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
// let montharr=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
// let day=dayarr[datelist.getDay()];
// let month=montharr[datelist.getMonth()];
// let date=datelist.getDate();
// let year=datelist.getFullYear()
// let today=day+", "+date+"-"+month+"-"+year
// console.log(today);

//area of the triangle
// sides=s1,s2,s3
//perimeter=p
// function areaTriangle(s1,s2,s3) {
// let p=(s1+s2+s3)/2
// let area= Math.sqrt(p*(p-s1)*(p-s2)*(p-s3)) 
// console.log(area);
// }
// areaTriangle(5,4,6)


//rotate a string
// let str="javascript"
// let arr=str.split('')
// console.log(str);
// let len=arr.length
// for (let index = 0; index < len; index++) {
//     let popped=arr.pop()
// // console.log(popped);
// arr.unshift(popped);   
// console.log(arr.join(''))
// }


//leap year
// function leapyear(year) {
//     if((year%4===0 && year%100===0 && year%400===0)||(year%4===0 && year%100!=0)){
//         console.log(`${year} is a leap year`);
//     }
//     else{
//         console.log(`${year} is not a leap year`)
//     }
// }
// leapyear(2204)

//check how many 1st jan is sunday between 2014 to 2050
// for (var year = 2014; year <= 2050; year++)
//     {
//     var d = new Date(year,0);
//     if ( d.getDay() === 0 )
//         console.log("1st January is being a Sunday  "+year);
//     }


//guess the random number

// function guessRand(inpNum){
//     let randNum=parseInt(10*Math.random())
//     console.log(randNum);
//     if(randNum==inpNum){
//         console.log("Good Work");
//     }
//     else{
//         console.log("tough luck, try again");
//     }
// }
// guessRand(5)

//to convert temperatures to and from Celsius, Fahrenheit
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// function tempConv(Far) {
//     let cel=5*(Far-32)/9;
//     console.log(cel);
// }
// tempConv(96.8)

//check if num>13, if yes double the difference

// function diffDouble(num) {
//     if(num>13){
//         console.log(2*(num-13));
//     }
// }
// diffDouble(05)

//
// let str="python";
// if(str.startsWith("py")){
//     console.log(str);
// }
// else{
//     console.log("py"+str);
// }
// console.log(str.substr(3,5));

// function remove_character(str, char_pos) 
//  {
//   part1 = str.substring(0, char_pos);
//   part2 = str.substring(char_pos + 1, str.length);
// return part1
//   return (part1 + part2);
//  }

// console.log(remove_character("Python",0));
// console.log(remove_character("Python",3));
// console.log(remove_character("Python",5));

// string changing the position of first and last characters
// let exstr="javaScript"
// let exarr=exstr.split('')
// let popd=exarr.pop()
// let shiftd=exarr.shift()
// exarr.unshift(popd);
// exarr.push(shiftd)
// let exstr1=exarr.join('')
// console.log(exstr1);
// or
// console.log(exstr.charAt(exstr.length-1)+exstr.substring(1,exstr.length-1)+exstr.charAt(0));

//add last three characters at the beginning and at the end
// let lastthree=exstr.substring(exstr.length-3)
// console.log(lastthree+exstr+lastthree);

//check all/some of the numbers in the given range
// let numarr=[594,95,345]
// let check=numarr.some((ele)=>ele>=50 && ele<=99)
// console.log(check);

//check if particular substring exists in the given string at the said position
// console.log(exstr.includes("Script",5));

//check the character exists in the given string in the said range(0 to 3)
// let str45="Javascript"
// let extstr=str45.substring(0,4)
// console.log(extstr);
// console.log(extstr.includes("v"));

// whether one of the number (not both) is multiple of 7 or 11.
let x=7
let y=11
// if(x%7==0 && y%7==0){
//     console.log("both are multiples of 7");
// }
// else if(x%11==0 && y%11==0){
//     console.log("both are multiples of 11");
// }
// if(x%7==0 && y%11==0){
//     console.log("x is multiple of 7 and y is multiple of 11");
// }
// else if(x%11==0 && y%7==0){
//     console.log("x is multiple of 11 and y is multiple of 7");
// }
// else {
//     console.log("conditions not satisfied");
// }

//replace every character with next letter in the string
// let str="javascript"
// // let strarr=str.split('')
// // console.log(strarr);
// let str1
// let len=str.length
// for (let i= 0; i < len; i++) {
//    str1= str.replace(str.charAt(i),str.charAt(i+1))
//    str=str1
// //    console.log(str1);
// }
// console.log(str1);


//replace every character by next character, say a by b, b by c like that
// let str="JavaScript"
// let len=str.length
// for (let i= 0; i < len; i++) {
//        str= str.replace(str.charAt(i),String.fromCharCode(str.charCodeAt(i)+1))
// }
// console.log(str);

// to capitalize the first letter of each word of a given string

// let str="he is good at javascript"
// let strarr=str.split(" ")
// console.log(strarr);
// let strarr2
// for(let i=0;i<strarr.length;i++){
//    strarr[i]= strarr[i][0].toUpperCase()+strarr[i].substr(1)
// }
// console.log(strarr.join(' '));

// let str="javascripts"
// console.log(str.length);
// let len=((str.length)/2-1)
// console.log(len);
// console.log("the middle 3 characters are: "+str.substring(len,str.length-(len-1))); 

// to concatenate two strings and return the result. 
// If the length of the strings are not same then remove the characters from the longer string.
// let str2="javascript"
// let str1="python"
// if(str1.length==str2.length){
//     console.log(str1+str2);
// }
// else if(str1.length>str2.length){
//    str1=str1.substring(0,str1.length-(str1.length-str2.length))
//    console.log(str1+str2);
// }
// else{
//     str2=str2.substring(0,str2.length-(str2.length-str1.length))
//     console.log(str1+str2);
// }

//to count the number of sum of digits
// let num=9876999
// let count=0
// let sum=1
// let rem=0

// while(sum>0){
// while (num>0){
//    rem=parseInt(num%10)
//     num=parseInt(num/10);
//     sum+=rem
    
// }
// count++
// sum=parseInt(sum/10)
// num=sum
// }
// console.log(count);

//to compare two objects/strings
// let str1="bharatesh"
// let str2="bharateh"
// let obj1={name:"bh",age:"35",place:"mys"}
// let obj2={name:"bh",age:"35",place:"mys"}
// console.log(JSON.stringify(str1)==JSON.stringify(str2));
// console.log(JSON.stringify(obj1)==JSON.stringify(obj2));

//to convert number to array of digits
// let num=123
// console.log([...`${num}`]); //converts num to array of digits in string format
// let numarr=[...`${num}`].map(ele=>parseInt(ele))    //convert it to integer
// console.log(numarr);

//remove the mentioned indexed in an array
// let arr=['a','b','c','d','e','f']
// let removeIndex=[3,5]
// let removedEle=[]
// let remainingEle=[]
// // for (let index = 0; index < arr.length; index++) {
// //     if(removeIndex.includes(index)){
// //         removedEle.push(arr[index])
// //     };
// // }
// arr.forEach((v,i)=>{
//     if(removeIndex.includes(i)){
//                 removedEle.push(v)
//             }
//     else{
//         remainingEle.push(v)
//     }
// })
//     console.log(removedEle);
//     console.log(`remaining elements are: ${remainingEle}`);
