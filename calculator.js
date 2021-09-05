const calculator = document.querySelector('.calculator')
const buttons = calculator.querySelector('.buttons_calculator')
const display = document.querySelector('.display_calculator')

buttons.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const button = e.target
        const action = button.dataset.action
        const buttonText = button.textContent
        const displayedNumber = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType

        if(!action) {
            console.log('Number Key')
        } 

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
            ) {
            console.log('Operator key')
        }

        if (action === 'clear') {
            console.log('Clear key')
        }

        if (action === 'calculate') {
            console.log('Equal key')
        }

        if (!action) {
            if (displayedNumber === '0' || previousKeyType === 'operator') {
                display.textContent = buttonText
            } else {
                display.textContent = displayedNumber + buttonText
            }
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
            ) {
            button.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNumber
            calculator.dataset.operator = action
        }

        Array.from(button.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))

        const calculate = (n1, operator, n2) => {
            let result = ''

            console.log(n1, n2)

            n1 = parseInt(n1)
            n2 = parseInt(n2)
            
            if (operator === 'add') {
                result = n1 + n2
            } else if (operator === 'subtract') {
                result = n1 - n2
            } else if (operator === 'multiply') {
                result = n1 * n2
            } else if (operator === 'divide') {
                result = n1 / n2
            }

            console.log(result, n1, n2)
            
            return result
        }

        if (action == 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNumber
            
            display.textContent = calculate(firstValue, operator, secondValue)
        }

        

        
    }

        
})