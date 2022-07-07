function* trainStop(){
    yield "stop1"
    yield "stop2"
    yield "stop3"
    yield "stop4"
    yield "stop5"
}

const MysTrainLine=trainStop();
const nextstopBtn=document.querySelector("#nextStop")
 nextstopBtn.addEventListener('click',()=>{
    let crtStop= MysTrainLine.next();
    if(crtStop.done){
        console.log("we reached");
        nextstopBtn.setAttribute("disabled",true)
    }
        else{
            console.log(crtStop.value);
        }
 })