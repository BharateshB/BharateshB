let coffeeArr=[2,3,1,5]
let coffeePrice=1.25;
let total =coffeeArr.reduce((sum,value)=>{
    if(value>0){
        sum+=coffeePrice*value;
    }
    return sum
},0)
console.log(`the total value is ${total}`);