const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
let result = document.querySelector('#result_result')
let hint = document.querySelector('#hint')
let attempts = document.querySelector('#attempts')

let numberAttempts = 1
let numberObl 


createNumber()
console.log(numberObl)
btn.onclick = check

function clear() {
    result.innerHTML = ''
    hint.innerHTML = ''
}

function createNumber() {
    let number = Math.round(Math.random()*100)
    numberObl = number
    console.log(number)
}




function check() {
    let resultValue
    let value = input.value
    let hintValue


    if (value == numberObl) {
        clear()
        resultValue = `Результат: Поздравляем! Вы угадали число`
        hintValue = `Подсказка: В самый раз`
        result.innerHTML = resultValue
        hint.innerHTML = hintValue
        console.log('ok')
        attemptsSum()
    } else if (value < numberObl) {
        resultValue = `Результат: Пока что не угадали`
        hintValue = `Подсказка: Маловато будет`
        result.innerHTML = resultValue
        hint.innerHTML = hintValue
        console.log('ne ok')
        attemptsSum()
    } else if (value > numberObl) {
        resultValue = `Результат: Пока что не угадали`
        hintValue = `Подсказка: Многовато будет`
        result.innerHTML = resultValue
        hint.innerHTML = hintValue
        console.log('ne ok')
        attemptsSum()
    }
    input.value = ''
    numberAttempts++
}

function attemptsSum() {
    let attemptsValue
    attempts.innerHTML = ''
    attemptsValue = `Число попыток: ${numberAttempts}`
    attempts.innerHTML = attemptsValue
}


