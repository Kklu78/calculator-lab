const displayEl = document.querySelector('#display')
const numbuttonsEl = document.querySelectorAll('.numbutton')
const fnbuttonEl = document.querySelectorAll('.fnbutton')
let operation = ''
let operationflag = false
let valuestore = 0
let valuestore2 = 0

numbuttonsEl.forEach(num => num.addEventListener('click', generate_num))
fnbuttonEl.forEach(fn => fn.addEventListener('click', fn_btn))

function generate_num(e) {
    if (displayEl.textContent === '0') {
        display_num(e.target.innerText)
    } else if (!displayEl.textContent.includes('.') || !(e.target.innerText === '.')) {
        display_num(displayEl.textContent.concat(e.target.innerText))
    }
}


function display_num(e) {
    displayEl.textContent = e
}

function press_equal(e) {

}

function fn_btn(e) {
    if (e.target.innerText === 'AC'){
        clear()
    } else if (e.target.innerText === '+/-') {
        displayEl.textContent = -1*parseFloat(displayEl.textContent)       
    } else if (e.target.innerText === '%') {
        displayEl.textContent = .01*parseFloat(displayEl.textContent)       
    } else if (['+','-','X','÷'].includes(e.target.innerText) && operationflag === false) {
        fnbuttonEl.forEach(fn => fn.style.backgroundColor = '')
        e.target.style.backgroundColor = 'orange'
        operation = e.target.innerText
        operationflag = true
        valuestore = parseFloat(displayEl.textContent)
        displayEl.textContent = ''
    } else if (e.target.innerText === '=' && operationflag === true) {
        if (operation === '+') {
            valuestore2 = parseFloat(displayEl.textContent)
            displayEl.textContent = valuestore + valuestore2
            valuestore = parseFloat(displayEl.textContent)

        } else if (operation === '-') {
            valuestore2 = parseFloat(displayEl.textContent)
            displayEl.textContent = valuestore - valuestore2
            valuestore = parseFloat(displayEl.textContent)

        } else if (operation === 'X') {
            valuestore2 = parseFloat(displayEl.textContent)
            displayEl.textContent = valuestore * valuestore2
            valuestore = parseFloat(displayEl.textContent)

        } else if (operation === '÷') {
            valuestore2 = parseFloat(displayEl.textContent)
            displayEl.textContent = valuestore / valuestore2
            valuestore = parseFloat(displayEl.textContent)

        } 
        operationflag = false
        fnbuttonEl.forEach(fn => fn.style.backgroundColor = '')


     
    } 
}

function add(a,b) {
    return a+b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}




function clear() {
    displayEl.textContent = '0'
    operationflag = false
    operation = ''
    valuestore = 0
    fnbuttonEl.forEach(fn => fn.style.backgroundColor = '')
}