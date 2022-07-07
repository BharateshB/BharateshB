// using Object.prototype
// function bookStore(title,Author,ISBN,numCopies) {
//     this.title=title;
//     this.Author=Author;
//     this.ISBN=ISBN;
//     this.numCopies=numCopies;
// }

// bookStore.prototype.getNoCopies=function() {
//     if(this.numCopies==0){
//         console.log("out of stock");
//     }
//     else if(this.numCopies<10){
//         console.log("low stock");
//     }
//     else{
//         console.log("in stock");
//     }
// }

// bookStore.prototype.bookSold= function(sold=4) {
//     this.numCopies-=sold;
// }

// bookStore.prototype.bookRestock=function (restock=15){
//     this.numCopies+=restock;
// }

// let bs=new bookStore("T1","A1","ISBN1",12)
// bs.getNoCopies()

// bs.bookSold(10)
// bs.getNoCopies()

// bs.bookRestock()
// bs.getNoCopies()

// bs.bookSold(10)
// bs.getNoCopies()


// using class
class bookStore{
    constructor(title,Author,ISBN,numCopies) {
        this.title=title;
        this.Author=Author;
        this.ISBN=ISBN;
        this.numCopies=numCopies;
    }

    getAvailability(){
        if(this.numCopies==0){
            return "out of stock";
        }
        else if(this.numCopies<10){
            return "low stock";
        }
        else{
            return "in stock";
        }
    }

    get Availability(){
        return this.getAvailability
    }

    sell(value=2){
        this.numCopies-=value;
    }

    restock(val=6){
        this.numCopies+=val
    }
}
let bs=new bookStore("T1","A1","ISBN1",12)
console.log(bs.getAvailability()); 

// bs.sell()
// console.log(bs.Availability()); 

// bs.restock()
// console.log(bs.Availability()); 

// bs.sell(10)
// console.log(bs.Availability()); 

class TechBook extends bookStore{
    constructor(title,Author,ISBN,numCopies,edition){
        super(title,Author,ISBN,numCopies)
        this.edition=edition;
    }
    getedition(){
        return `the current version of the book is ${this.edition}`
    }
}

let tb=new TechBook("JS","Ecma","ISBN2","20","fifth")
console.log(tb.getedition());