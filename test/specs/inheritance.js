function Manager(cabin) {
    this.cabin=cabin;
    this.attendance=function() {
        console.log("attendance is needed");
    }
    this.dowork=function() {
        console.log("manages team");
    }
}

function Employee(name) {
    this.name=name;
    this.dowork=function() {
        console.log("basic work");
    }
}
let mngr=new Manager("main");
Employee.prototype=mngr;
let emp=new Employee("ABC");

console.log(emp.cabin);
console.log(emp.name);
emp.dowork()
emp.attendance()
