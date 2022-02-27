class Calculator {
    constructor( previousInputText, currentInputText) {
        this.previousInputText = previousInputText
        this.currentInputText = currentInputText
        this.clear()
    }

    allClear(){
        this.currentInput = ''
        this.previousInput = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

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