class Calculator {
    constructor( previousInputText, currentInputText) {
        this.previousInputText = previousInputText
        this.currentInputText = currentInputText
        this.allClear()
    }

    allClear(){
        this.currentInput = ''
        this.previousInput = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        if(number === '.' && this.currentInput.includes('.')) return
        this.currentInput = this.currentInput.toString() + number.toString();
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentInputText.innerText = this.currentInput
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousInputText= document.querySelector('[data-previous-input]');
const currentInputText= document.querySelector('[data-current-input]');

const calculator = new Calculator(previousInputText, currentInputText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    } )
})