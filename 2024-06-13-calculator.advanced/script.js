class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
        this.addEventListeners();
    }

    clear() {
        this.currentOperand = '';
        this.previousoperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendnumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseoperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousoperand !== '') {
            this.compute();
        }
        if (operation === 'cos' || operation === 'sin') {
            this.computeTrigonometric(operation);
        } else {
            this.operation = operation;
            this.previousoperand = this.currentOperand;
            this.currentOperand = '';
        }
    }

    computeTrigonometric(operation) {
        const current = parseFloat(this.currentOperand);
        if (isNaN(current)) return;

        switch (operation) {
            case 'cos':
                this.currentOperand = Math.cos(current);
                break;
            case 'sin':
                this.currentOperand = Math.sin(current);
                break;
            default:
                return;
        }

        this.operation = undefined;
        this.previousoperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousoperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousoperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        if (isNaN(parseFloat(stringNumber))) {
            // If the input is not a valid number, return it as is
            return stringNumber;
        }

        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousoperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = '';
        }
    }

    addEventListeners() {
        const numberButtons = document.querySelectorAll('[data-number]');
        const operationButtons = document.querySelectorAll('[data-operation]');
        const equalsButton = document.querySelector('[data-equals]');
        const deleteButton = document.querySelector('[data-delete]');
        const allClearButton = document.querySelector('[data-all-clear]');

        numberButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.appendnumber(button.innerText);
                this.updateDisplay();
            });
        });

        operationButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.chooseoperation(button.innerText);
                this.updateDisplay();
            });
        });

        equalsButton.addEventListener('click', () => {
            this.compute();
            this.updateDisplay();
        });

        allClearButton.addEventListener('click', () => {
            this.clear();
            this.updateDisplay();
        });

        deleteButton.addEventListener('click', () => {
            this.delete();
            this.updateDisplay();
        });
    }
}

// Instantiate the calculator
const calculator = new Calculator(
    document.querySelector('[data-previous-operand]'),
    document.querySelector('[data-current-operand]')
);