//regular expressions
// let regex=/hi/g
// let str="hi how are you hi all"

// console.log(regex.exec(str));   

// console.log(regex.test(str));

// console.log(str.match(regex));

// console.log(str.replace(regex,"hello"));

//Metacharacters
// let regex=/welc.me/ // . one character
// let regex=/w*me/ // * many characters
// let str="hi all, welcome to India";
// console.log(regex.test(str)); 

//Character set and regex changes
// let regex=/[abc]def/        //check a/b/c present before def
// let regex=/[a-z]def/        //check any small letter present before def
// let regex=/[^def]def/       //check any letter except d/e/f present before def
// let str="hi adef"
// console.log(regex.test(str)); 

// let strnum="12";
// let value=parseInt(strnum)
// console.log(value);

const yes_No = (val, def = false) =>
  /(Yes)/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
console.log(yes_No('Y')); 
console.log(yes_No('noyes')); 




