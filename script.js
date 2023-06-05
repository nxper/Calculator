class Calculator {
    constructor(previousOperandButtons, currentOperandButtons) {
        this.previousOperandButtons  = previousOperandButtons
        this.currentOperandButtons = currentOperandButtons    
        this.clear()   
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operationButtons = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    //Quiero que appendOperation() ponga a this.currentOperand y lo convierta a 3.1415 (PI)
    appendOperation() {
        if (specialOperations.innerText === 'π') {
            this.currentOperand = 3.141592.toString()
        }
        this.updateDisplay()
    }
    chooseOperator(operator) {
        if (this.currentOperand === '') return;
        if (this.currentOperand != ''){
            this.computeFunction();
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''
    }
    computeFunction(){
        let result;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operator) {
             case "+":
            result = prev + current
            break;
             case "-":
            result = prev - current
            break;
             case "*":
            result = prev * current
            break;
             case "÷":
            result = prev / current
            break;
            case "²":
            result = current * current
            this.updateDisplay()
             //esto me lo saque de los heuvos ni idea si funciona jajjsajasjaksjak
            break;
            case"Q":
            result = prev % current
            break;
             default:
            return;
         }
         this.currentOperand = result;
         this.operationButtons = undefined;
         this.previousOperandButtons.innerText = this.previousOperand;
         this.previousOperand = ''
        }
        
    updateDisplay () {
        this.currentOperandButtons.innerText = this.currentOperand;
        if(this.currentOperand === '3.141592'){
            this.previousOperandButtons.innerText = "This is π"
        } else if (this.currentOperand === '230108') {
            this.previousOperandButtons.innerText = 'Cumple de la swiftie'
        } else if (this.currentOperand != '3.141592'){
            this.previousOperandButtons.innerText = this.previousOperand
        } else if (this.currentOperand != '230108'){
            this.previousOperandButtons.innerText = this.previousOperand
        }
        if (this.previousOperand != ''){
            this.previousOperandButtons.innerText = this.previousOperand
        }
    }
}

const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const allClearButtons = document.querySelector("[data-all-clear]")
const deleteButtons = document.querySelector("[data-delete]")
const equalsButtons = document.querySelector("[data-equals]")
const previousOperandButtons = document.querySelector("[data-previous-operand]")
const currentOperandButtons = document.querySelector("[data-current-operand]")
const specialOperations = document.querySelector("[data-specialOperations]")
const outputPlaceholder = document.getElementById('output')

const calculator = new Calculator(previousOperandButtons, currentOperandButtons)

numberButtons.forEach (button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        //Esto stringea el texto del boton y añade el propio parametro de number a currentOperand
        calculator.updateDisplay()
    })
})

operationButtons.forEach (button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText)
        calculator.updateDisplay()
    })
})

allClearButtons.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })

deleteButtons.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })

equalsButtons.addEventListener('click', button => {
    calculator.computeFunction()
    calculator.updateDisplay()
  })

specialOperations.addEventListener('click', button => {
    calculator.appendOperation()
    //Esto callea la funcion de la linea 18:1, esta conectada con el simbolo de PI
})
//Aqui acaba la calculadorae

//aqui empieza el quiz y la configuracion
class config {
    openConfigClass(openOrNot){
        if (openOrNot === true) {
        document.getElementById('overlay').classList.add('active')
        document.getElementById('config-content').classList.add('active')
        }
    }
    closeConfigClass(openOrNot){
        if (openOrNot === false){
            document.getElementById('overlay').classList.remove('active')
            document.getElementById('config-content').classList.remove('active')  
        }
    }
    darkThemeClass(darkOrNot){
        easterEgg = easterEgg + 1
        easter()
        if (darkOrNot === true){
            document.getElementById('calculator-grid').classList.add('Dark')
            background.classList.add('Dark')
            outputPlaceholder.classList.add('Dark')
            prevz.classList.add('Dark')
            currz.classList.add('Dark')
            document.getElementById('questionPrompt').classList.add('Dark')
            document.getElementById('quizDisplay').classList.add('Dark')
        }else if (darkOrNot != true) {
            document.getElementById('calculator-grid').classList.remove('Dark')
            background.classList.remove('Dark')
            outputPlaceholder.classList.remove('Dark')
            prevz.classList.remove('Dark')
            currz.classList.remove('Dark')
            document.getElementById('questionPrompt').classList.remove('Dark')
            document.getElementById('quizDisplay').classList.remove('Dark')
        }
    }
    quizButtonFunction(){
        let questionPicker = Math.floor(Math.random * 10)
        let randomNumber = "?"
        let randomNumber2 = Math.floor(Math.random() * 15)
        function quizButtonRNG(){
            quizDisplay.innerText = randomNumber
        }
        function randomNumFunc(){
            if (questionPicker < 2){
                randomNumber = Math.floor(Math.random() * 15)
            }else if(questionPicker >= 2){
                randomNumber = Math.floor(Math.random() * 30)
            }else if(questionPicker >= 5){
                randomNumber = Math.floor(Math.random() * 60)
            }else if(questionPicker >= 8){
                randomNumber = Math.floor(Math.random() * 120)
            }
        }
        function questionNumber(){
            document.getElementById('questionPrompt').innerText = 'How many questions would you like??'
            document.getElementById('questionPrompt').classList.add('active')
        setTimeout(function (){
            document.getElementById('questionPrompt').classList.remove('active')
        }, 2000)
        setTimeout(() =>{
            questionNumberShowerFunc()
        }, 2500)
    }
    questionNumber()
        const randomNumVar = randomNumFunc()
         const quizButtonRNGVar = quizButtonRNG()
         //Hace que el display rojo del quiz tome el valor de randomNumber
    }
    NOQCFunction(){
        questionNumberHiderFunc()
        let questionsLeft = 0
        let animation = 100
        function randomNumberAnimation(){
            while(animation != 0){
                setInterval(()=>{
                    randomNumFunc(),
                    quizButtonRNGVar()
            }, 100)
        }
        }
        if(NOQC === 3){
            while(NOQC === 3 && questionsLeft === 1){
            randomNumVar()
            quizButtonRNGVar()
        }}
    }
    CorrectOrFalse(){
        if(result === quizDisplay.innerText){
            document.getElementById('questionPrompt').classList.add('quizActive')
            document.getElementById('questionPrompt').innerText = 'Correct!!'
        }else if(result != quizDisplay.innerText){
            document.getElementById('questionPrompt').classList.add('quizinActive')
            document.getElementById('questionPrompt').innerText = 'incorrect :(((((('
        }
    }
    difficultyCheckerFunction(){

    }
}

const CONFIGURATION = new config()


const openConfigjs = document.getElementById('configModal')
const closeButton = document.getElementById('close-button')
const overlay = document.getElementById('overlay')
const darkTheme = document.getElementById('darkThemeButton')
const content = document.querySelector('config-content')
const background = document.getElementById('background')
const lightTheme = document.getElementById('lightThemeButton')
const prevz = document.getElementById('previous-operand')
const currz = document.getElementById('current-operand')
const quizButton = document.getElementById('QuizButton')
const quizDisplay = document.getElementById('quizDisplay')
const questionNumberButtons = document.querySelectorAll("#questionNumber.button")
const questionNumberButton3 = document.getElementById('questionNumber3')
const questionNumberButton6 = document.getElementById('questionNumber6')
const questionNumberButtoninf = document.getElementById('questionNumberinf')
const questionNumberarray = [questionNumberButtoninf, questionNumberButton6, questionNumberButton3]
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')
const zero = document.getElementById('0')
const questionNumberCloseButton = document.getElementById('closebuttonQ')
let easterEgg = 0
let openOrNot = false
let darkOrNot = false
let NOQC = 0

openConfigjs.addEventListener('click', () => {
      openOrNot = true
      CONFIGURATION.openConfigClass(openOrNot)
    })
overlay.addEventListener('click', () => {
    openOrNot = false
    CONFIGURATION.closeConfigClass(openOrNot)
})

closeButton.addEventListener('click', () => {
        openOrNot = false
        CONFIGURATION.closeConfigClass(openOrNot)
    })

darkTheme.addEventListener('click', () => {
    darkOrNot = true
    CONFIGURATION.darkThemeClass(darkOrNot)
})

lightTheme.addEventListener('click', () => {
    darkOrNot = false
    CONFIGURATION.darkThemeClass(darkOrNot)
})

function easter(){
    if (easterEgg === 4){
        alert('Stop messing with config you moron')
    } else if (easterEgg === 12){
        alert('stop')
    }else if (easterEgg === 28){
        alert('kys')
    easterEgg = 0
    }
}
quizButton.addEventListener('click', () => {
    CONFIGURATION.quizButtonFunction()
})
questionNumberButtons.forEach(button => {
    button.addEventListener('click', () => {
     questionNumberButtons.classList.remove('active')
    })
})
 function questionNumberShowerFunc(){
    questionNumberButton3.classList.add('active')
    questionNumberButton6.classList.add('active')
    questionNumberButtoninf.classList.add('active')
 }

 function questionNumberHiderFunc(){
    questionNumberButton3.classList.remove('active')
    questionNumberButton6.classList.remove('active')
    questionNumberButtoninf.classList.remove('active')
    questionNumberCloseButton.classList.add('active')
    quizDisplay.classList.add('active')
 }

 questionNumberButtoninf.addEventListener('click', () => {
    questionsLeft = 1
    NOQC = 3
    CONFIGURATION.NOQCFunction()
    
 })

 questionNumberButton3.addEventListener('click', () => {
    questionsLeft = 3
    NOQC = 1
    CONFIGURATION.NOQCFunction()
    
 })

 questionNumberButton6.addEventListener('click', () => {
    questionsLeft = 6
    NOQC = 2
    CONFIGURATION.NOQCFunction()
 })
 questionNumberCloseButton.addEventListener('click', () => {
    questionNumberCloseButton.classList.remove('active')
    quizDisplay.classList.remove('active')
    randomNumber = '?'
    questionsLeft = 0
    NOQC = 0
 })
 
