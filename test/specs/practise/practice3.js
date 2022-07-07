//factorial
// let result=1
// function factorial(num){
//     while(num>0){
//        result*=num;
//        num--; 
//     }
//     return result;
// }

// let fact=factorial(5)
// console.log(fact);

//method 2
// let res=1;
// const factNum=num=>{
//     num<0?(()=>{
//         throw new TypeError('no negative number allowed')
//     })():num<=1? res : res= num*factNum(num-1);
//     return res;
// }

// console.log(factNum(-5));

//convert number to array of digits
// let num=123456;
// let strNum=[]
// let rem=0;
// // let rev=0;
// method 1
// while (num>0) {
//     rem=parseInt(num%10);
//     strNum.push(rem)
//     // rev=rev*10+rem;
//     num=parseInt(num/10)
// }
// console.log(strNum.reverse());

//Method 2
// let numArr=[...`${num}`].map(v=>parseInt(v))
// console.log(numArr); //[ 1, 2, 3, 4, 5, 6 ]
// let num2=[...`${num}`] //[ '1', '2', '3', '4', '5', '6' ]
// console.log(num2);  

// let num3=[...num]   //TypeError:number 123456 is not iterable

// const power_of_2 = n => !!n && (n & (n - 1)) == 0;
// console.log(power_of_2(16));
// console.log(power_of_2(18));
// console.log(power_of_2(256));

// get array of key and value pairs from an object

let obj={
    model:"eon",
    color:"gray",
    brand:"hyundai"
}

// let arrObj=Object.keys(obj).map(ele=>[ele + " : " + obj[ele]])
// console.log(arrObj);


// let arr=[10,30,40,20,80,150,90,100]

// let max=Math.max(...arr)
// console.log(max);


// let maXnum=(arr,num=1)=>{return [...arr].sort((x,y)=>y-x).slice(0,num)}
// console.log(maXnum([10,39,45,34,50],1));
// console.log(maXnum([10,39,45,34,50,50],2));

// let pricelist=['$12','$15','$45','$74','$38','$86']

// let pricesort=pricelist.map(ele=>ele.slice(1,3))    
// console.log(pricesort.sort((x,y)=>x-y));
// console.log(pricelist);
// pricelist.splice(0,1)

// let arr34=[1,3,4,5,3,2,1,4,5,67,8]
// let set=new Set(arr34)
// console.log(set);
// // console.log(typeof(arr34));
// let uniq=[...set]
// console.log(uniq.sort((x,y)=>x-y));

// let ar2=[" ", "bh.b", " ", "b.doc", "b.log"]
// for (const val of ar2) {
//     const nw=val.trim();
//     console.log(nw);
// // }
// let filepath=ar2.reduce((fp,file)=>{
//     const files=file.trim();
//     if(files){
//         const fps=`home/dir/${files}`
//         fp.push(fps)
//     }
//     return fp
// },[])

// console.log(filepath);

// let  string="mangalore";
// let ss=string.substring(-2,-1)
// console.log(ss);

// let sli=string.slice(-4,-1)
// console.log(sli);
// console.log(string);
// let rep=string.replace('r','w')
// console.log(rep);
// console.log(string);
// console.log( string.search('m'));
// console.log(string.substr(-2,1));
// console.log(" "+string.repeat(5));\

// function ArrayDiff(a, b){
//     const setX = new Set(a)
//     const setY = new Set(b)
//   return [
//       ...a.filter(x=>!setY.has(x)),
//       ...b.filter(x=>!setX.has(x))
//     ]
//   }
//     const Array1 = [1, 2,7];
//     const Array2 = [1, 2, 3, 4, 5];
//   console.log(ArrayDiff(Array1, Array2)) // [4, 5]

// function isJSON(str)
// {
//   try
//   {
    //   JSON.parse(str)
//   }
//   catch
//   {
//       return false
//   }
// return true
// }   
// var str = "JavaScript"
// console.log(isJSON(str)) //false
// let numb=15.45;
// let int=parseInt(numb)
// console.log(int);

let arr=[1,[2,3,4],5,[6,7,8,9,10]]

let arr2=[];
function fun(elements){
    elements.map(ele=>arr2.push(ele))
}

let arr3=arr.map(value=>Array.isArray(value)?fun(value):arr2.push(value))
console.log(arr2);

console.log();