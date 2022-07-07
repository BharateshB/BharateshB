// method 1
// function makeblue() {
//     document.body.style.background='#0f62fe'
// }

// function makegreen() {
//     document.body.style.background='#42be65'
// }

// function makepink() {
//     document.body.style.background='#ff7eb6'
// }

// document.querySelector("#blue").addEventListener('click',makeblue)
// document.querySelector("#green").addEventListener('click',makegreen)
// document.querySelector("#pink").addEventListener('click',makepink)

//method2:use only one function
// function changeColor(color) {
//     document.body.style.background= color
// }

// document.querySelector("#blue").addEventListener('click',()=>changeColor("#0f62fe"))
// document.querySelector("#green").addEventListener('click',()=>changeColor("#42be65"))
// document.querySelector("#pink").addEventListener('click',()=>changeColor("#ff7eb6"))

//method3:closure
function changeColor(color) {
    return function () {
        document.body.style.background= color;
        }
    }
    
    const bgcBlue=changeColor("#0f62fe");
    const bgcGreen=changeColor("#42be65");
    const bgcPink=changeColor("#ff7eb6");

document.querySelector("#blue").addEventListener("click",bgcBlue);
document.querySelector("#green").addEventListener('click',bgcGreen);
document.querySelector("#pink").addEventListener('click',bgcPink);

