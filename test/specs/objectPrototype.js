// const { use } = require("chai");
//Enhancing user methods
// function user(userid,password) {
//     this.userid=userid;
//     this.password=password;
//     this.online=false;
// }

// user.prototype.login=function() {
//  this.online= true;
//  console.log(this.userid + " has logged in");
// }

// user.prototype.logout=function() {
//     this.online=false  
//     console.log(this.userid +"has logged out"); 
// }

// let user1=new user("bh.com","abc")
// let user2=new user("bh2.com","Cnn")
// user1.login()
// user2.logout()


//Prototypal Inheritance
function car(model,brand) {
    this.model=model;
    this.brand=brand;
}
let c1=new car("eon","hyundai");

function car2(model,brand,seatingcapacity) {
    car.call(this,model,brand);
    this.seatingcapacity=seatingcapacity;
}
let c2= new car2(c1.model,c1.brand,"seven")
console.log(c2.seatingcapacity);
console.log(c2.brand);