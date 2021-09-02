import { BinarySearchTree } from './utils/binarySearchTree.js'
const bst = new BinarySearchTree()
let number = document.getElementById("number")
let rootNumTitle = document.getElementById('rootnum-title')

const getBSTHelper1 = node => {
    var html = ''
    html += '<span class="tf-nc">' + node.data + '</span>'
    if (node.left || node.right){
        html += '<ul>' + getBSTHelper2(node)+ '</ul>' 
    }
    return html 
}

const getBSTHelper2 = node => {
    var html = '';
    if (node.data){
        if (node.left){
            html += '<li>'
            html += getBSTHelper1(node.left);
            html += '</li>'
        }
        if(node.right){
            html += '<li>'
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
    }
    if(number.textContent == "") {
        number.style.backgroundColor = "white"
    } else {
        number.style.backgroundColor = 'rgb(' + [15,218,184].join(',') + ')';
        rootNumTitle.textContent = ""
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

const removeNumber = (e) => {
    
}

document.addEventListener('keypress', randomNumber)
document.addEventListener('click', removeNumber)