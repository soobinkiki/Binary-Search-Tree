import { BinarySearchTree } from './utils/binarySearchTree.js'
const bst = new BinarySearchTree()
let subTitle = document.getElementById('rootnum-title')
let nodeId = null;

const getBST = () => {
    var treeHTML = '<ul><li>' + getBSTHelper1(bst.root) + '</ul></li>'
    var resultDiv = document.querySelector('.mainTree');
    resultDiv.innerHTML = treeHTML
}

const getBSTHelper1 = node => {
    var html = ''
    nodeId = node.data.toString()
    html += '<a class="tf-nc" id="' + node.data + '">' + node.data + '</a>'
    if (node.left || node.right){
        html += '<ul>' + getBSTHelper2(node)+ '</ul>' 
    }

    return html 
}

const getBSTHelper2 = node => {
    var html = '';
    nodeId = node.data.toString()
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
    if (e.keyCode == 32) { 
        n = numberMinMax(-100, 100)
        subTitle.innerText = ""
    }
    addNumber(n)

}

const addNumber = (n) => {
    bst.addNum(n)
    getBST()    
}

document.addEventListener('keypress', randomNumber)