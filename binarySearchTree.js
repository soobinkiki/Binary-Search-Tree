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
const mainTree = node => {

    // const render = () => {
    //     <ul>{renderTree(data)}</ul>
    // }
    // var trigger = true
    // if (data !== 0) {
    //     trigger = true
    // } else trigger = false
    // // function renderTree(node) {

    // // const temp = mainTree(1)
    // if (trigger) {
    //     const UsingFragment =
    //         `${mainTree(1)}`
    //     const node = document.createRange().createContextualFragment(UsingFragment);
    //     leftright.appendChild(node) // name?
    // } else console.log("nothing here");


//     <div class="tf-tree tf-gap-lg">
//     <ul>
//       <li>
//         <span class="tf-nc">1</span>
//         <ul>
//           <li>
//             <span class="tf-nc">2</span>
//             <ul>
//               <li><span class="tf-nc">4</span></li>
//               <li><span class="tf-nc">5</span></li>
//             </ul>
//           </li>
//           <li>
//             <span class="tf-nc">3</span>
//             <ul>
//               <li><span class="tf-nc">6</span></li>
//               <li><span class="tf-nc">7</span></li>
//             </ul>
//           </li>
//         </ul>
//       </li>
//     </ul>
//   </div>
  
    function buildList(node){
        var html = '';
        if (node.data){
            // html += '<ul><li>'
            html += '<span class="tf-nc">' + node.data + '</span>'
            html += '<ul>';
            if (node.left){
                html += buildList(node.left, true);
            }
            if(node.right){
                html += buildList(node.right, false);
                html += '</ul>';
            }
        }
    
        return html;
    }
    
    var resultDiv = document.getElementById('resultDiv');
    
    // var testData = 
    //     {
    //         "val":2,
    //         "l":{
    //             "val":1,
    //             "l":{},
    //             "r":{}
    //         },
    //         "r":{
    //             "val":4,
    //             "l":{},
    //             "r":{
    //                 "val":5,
    //                 "l":{},
    //                 "r":{}
    //             }
    //         }
    //     };

    
        
    resultDiv.innerHTML = buildList(node);
        
        //   const node = document.createRange().createContextualFragment(menu);

        // return null
        // return Object.entries(node).map(function ([key, value]) {
        //     if (key === 'left' && typeof value === 'object') {
        //         if (value !== null) {
        //             return null
        //         }
        //         if (value === null) {
        //             return null;
        //         }
        //     } else if (key === 'right' && typeof value === 'object') {
        //         if (value !== null) {
        //             return null
        //         }
        //         if (value === null) {
        //             return null;
        //         }
        //     }
        // });
    // }
    // return console.log("hello");
}

const numberMinMax = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = e => {
    // if (e.keyCode == 32) { // keyCode32 => space
    //     number.textContent = numberMinMax(-100, 100)
    // }
    // console.log("number.innerText", typeof(number.textContent));
    // if(number.textContent == "") {
    //     number.style.backgroundColor = "white"
    // } else {
    //     number.style.backgroundColor = 'rgb(' + [15,218,184].join(',') + ')';
    //     rootNumTitle.textContent = ""
    // }

    addNumber()
    
    // {number.innerText == "" ? number.style.backgroundColor = "white" : "red"}
}


const addNumber = () => {
    var node = new Node(10);
    node.left = new Node(5);
    node.right = new Node(15);
    node.left.left = new Node(3);
    node.left.right = new Node(7)
    bst.root = node
    
    mainTree(bst.root)
    // bst.addNum(number.textContent)
    // leftnum.textContent.numsStorage
    
}

const removeNumber = (e) => {
    
}

document.addEventListener('keypress', randomNumber)
document.addEventListener('click', removeNumber)

