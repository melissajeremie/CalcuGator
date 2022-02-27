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
        this.currentInput = this.currentInput.toString().slice(0, -1)
    }

    appendNumber(number) {
        if(number === '.' && this.currentInput.includes('.')) return
        this.currentInput = this.currentInput.toString() + number.toString();
    }

    chooseOperation(operation) {
        if(this.currentInput === '' ) return;
        if(this.previousInput !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousInput = this.currentInput
        this.currentInput = ''
    }

    compute() {
        let computation 
        const prev = parseFloat(this.previousInput)
        const current = parseFloat(this.currentInput)
        if (isNaN(prev) || (isNaN(current))) return
        switch (this.operation){
            case '+': 
                computation = prev + current
                break
            case '-': 
                computation = prev - current
                break
            case 'x': 
                computation = prev * current
                break
            case '÷': 
                computation = prev / current
                break
            default: 
                return
        }
        this.currentInput = computation
        this.previousInput = ''
        this.operation = undefined
        
    }

    updateDisplay() {
        this.currentInputText.innerText = this.currentInput

        if(this.operation !== null){
            this.previousInputText.innerText = `${this.previousInput} ${this.operation}`
        }
        this.previousInputText.innerText = this.previousInput
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
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    } )
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.allClear()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})