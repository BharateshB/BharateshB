function ds(classroom) {
    let {hasTA,classList}=classroom
    let teacher,TA,students;
    if(hasTA){
        [teacher,TA,...students]=classList
    }
    else{
        [teacher,...students]=classList
    }
    return students
}

let studentsList=ds({hasTA:true,classList:["T1","TA","St1","St2","St3"]})
console.log(studentsList);
