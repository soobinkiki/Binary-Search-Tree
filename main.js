import { BinarySearchTree } from './utils/binarySearchTree.js'
const bst = new BinarySearchTree()
let number = document.getElementById("number")
let subTitle = document.getElementById('rootnum-title')

const getBSTHelper1 = node => {
    var html = ''
    html += '<a class="tf-nc" id="remove">' + node.data + '</a>'
    if (node.left || node.right){
        html += '<ul>' + getBSTHelper2(node)+ '</ul>' 
    }
    return html 
}

const getBSTHelper2 = node => {
    var html = '';
    if (node.data){
        if (node.left){
            html += '<li id="' + node.left + '">'
            html += getBSTHelper1(node.left);
            html += '</li>'
        }
        if(node.right){
            html += '<li id="' + node.right + '">'
            html += getBSTHelper1(node.right);
            html += '</li>'
        }
    }   
    return html;
}

const numberMinMax = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = e => {
    var n = null;
    if (e.keyCode == 32) { // keyCode32 => space
        n = numberMinMax(-100, 100)
        subTitle.innerText = ""
    }

    addNumber(n)
}

const addNumber = (n) => {
    bst.addNum(n)
    getBST()    
}

const getBST = () => {
    var treeHTML = '<ul><li>' + getBSTHelper1(bst.root) + '</ul></li>'
    var resultDiv = document.querySelector('.mainTree');
    resultDiv.innerHTML = treeHTML
}

const removeNumber = e => {
    alert("clicked")
}

// const removeTarget = e => {

//     // e.target is our targetted element.
//                 // try doing console.log(e.target.nodeName), it will result LI
//     if(e.target && e.target.nodeName == "LI" || e.target && e.target.nodeName == "li") {
//         console.log(e.target.id + " was clicked");
//     }
// }

document.addEventListener('keypress', randomNumber)
document.querySelector(".remove").addEventListener("click", function(e) {
    // if(e.target && e.target.nodeName == "LI" || e.target && e.target.nodeName == "li") {
    //     console.log(e.target.id + " was clicked");
    // }
    
})