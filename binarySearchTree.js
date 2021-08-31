
let number = document.getElementById("number")


const numberMinMax = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = e => {
    if (e.keyCode == 32) {
        number.textContent = numberMinMax(-100, 100)
    }
}

const removeNumber = (e) => {
 
}

document.addEventListener('keypress', randomNumber)
document.addEventListener('click', removeNumber)

