import { TreeCalculate } from './utils/utils.js'
const bst = new TreeCalculate()

let number = document.getElementById("number")
let rootNumTitle = document.getElementById('rootnum-title')

const numberMinMax = (min, max) => {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = e => {
    if (e.keyCode == 32) { // keyCode32 => space
        number.textContent = numberMinMax(-100, 100)
    }
    console.log("number.innerText", typeof(number.innerText));
    if(number.innerText == "") {
        number.style.backgroundColor = "white"
    } else {
        number.style.backgroundColor = 'rgb(' + [15,218,184].join(',') + ')';
        rootNumTitle.innerText = ""
    }

    addNumber()
    
    // {number.innerText == "" ? number.style.backgroundColor = "white" : "red"}
}

const addNumber = () => {
    bst.addNum(number.textContent)
}

const removeNumber = (e) => {
    
}

document.addEventListener('keypress', randomNumber)
document.addEventListener('click', removeNumber)

