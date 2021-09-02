import { TreeCalculate } from './utils/utils.js'
/** @jsx createElement */
/*** @jsxFrag createFragment */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


const bst = new TreeCalculate()

let number = document.getElementById("number")
let rootNumTitle = document.getElementById('rootnum-title')
let leftnum = document.getElementById("left")
let rightnum = document.getElementById("right")
let leftright = document.querySelector(".leftright-container")
const mainTree = data => {

    // const render = () => {
    //     <ul>{renderTree(data)}</ul>
    // }
    
    // function renderTree(node) {
        const UsingFragment = () => (
            <div>
              <p>This is regular paragraph</p>
              <div>
                <p>This is a paragraph in a fragment</p>
                <>
                  <p>Hello</p>
                </>
                <ul>
                  {[1, 2, 3].map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        
        leftright.appendChild(<UsingFragment />) // name?
        
        return Object.entries(node).map(function ([key, value]) {
        if (key === 'left' && typeof value === 'object') {
            if (value !== null) {
                return leftright
            }
            if (value === null) {
                return null;
            }
        } else if (key === 'right' && typeof value === 'object') {
            if (value !== null) {
                return leftright
            }
            if (value === null) {
                return null;
            }
        }
    });
    // }
    // return console.log("hello");
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
        number.style.backgroundColor = "white"
    } else {
        number.style.backgroundColor = 'rgb(' + [15,218,184].join(',') + ')';
        rootNumTitle.textContent = ""
    }

    addNumber()
    
    // {number.innerText == "" ? number.style.backgroundColor = "white" : "red"}
}


const addNumber = () => {
    var node = new Node(10);
    node.left = new Node(5);
    node.right = new Node(15);
    bst.root = node
    mainTree(bst.root)
    // bst.addNum(number.textContent)
    // leftnum.textContent.numsStorage
    
}

const removeNumber = (e) => {
    
}

document.addEventListener('keypress', randomNumber)
document.addEventListener('click', removeNumber)

