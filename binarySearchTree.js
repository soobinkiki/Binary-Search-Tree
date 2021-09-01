import { TreeCalculate } from './utils/utils.js'
const bst = new TreeCalculate()

let number = document.getElementById("number")
let rootNumTitle = document.getElementById('rootnum-title')
let leftnum = document.getElementById("left")
let rightnum = document.getElementById("right")

const mainTree = data => {

    
    function renderTree(node) {
        const treeStructure = (
            <li key={value.data}>
                {/* <mainTree data={value} /> */}
            </li>
        )
        return Object.entries(node).map(function ([key, value]) {
          if (key === 'left' && typeof value === 'object') {
            if (value !== null) {
              return treeStructure
            }
            if (value === null) {
              return null;
            }
          } else if (key === 'right' && typeof value === 'object') {
            if (value !== null) {
              return treeStructure
            }
            if (value === null) {
              return null;
            }
          }
        });
}

const numberMinMax = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = e => {
    if (e.keyCode == 32) { // keyCode32 => space
        number.textContent = numberMinMax(-100, 100)
    }
    console.log("number.innerText", typeof(number.textContent));
    if(number.textContent == "") {
        number.style.backgroundColor = "red"
    } else {
        number.style.backgroundColor = 'rgb(' + [15,218,184].join(',') + ')';
        rootNumTitle.textContent = ""
    }

    addNumber()
    
    // {number.innerText == "" ? number.style.backgroundColor = "white" : "red"}
}

const addNumber = () => {
    bst.addNum(number.textContent)
    // leftnum.textContent.numsStorage
    
}

const removeNumber = (e) => {
    
}

document.addEventListener('keypress', randomNumber)
document.addEventListener('click', removeNumber)

