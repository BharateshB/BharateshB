//call
// function myname(message) {
//     return message+" "+this.name
// }

// let person={
//     name:"bharatesh"
// }

// let calls=myname.call(person,"hello")
// console.log(calls);

// let applym=myname.apply(person,["how are you"])
// console.log(applym);

//borrow mwthod from the object
let obj={
    name:"ABC",
    getname:function (message) {
        return message +" "+ this.name
    }
}

let person={
    name:"xyz"
}

let personNameCall=obj.getname.call(person,"my name is")
console.log(personNameCall);

let personNameBind=obj.getname.bind(person,"my name is")
let personName=personNameBind();
console.log(personName);