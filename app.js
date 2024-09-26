const firstNum = document.getElementById('firstNum')
const secondNum = document.getElementById('secondNum')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const mult = document.getElementById('mult')
const divide = document.getElementById('divide')
const calc = document.getElementById('calc')
const result = document.getElementById('result')
let activeAct = '+'

plus.onclick = function(){
    activeAct = '+'
    plus.classList.add('active')
    minus.classList.remove('active')
    mult.classList.remove('active')
    divide.classList.remove('active')
}

minus.onclick = function(){
    activeAct = '-'
    plus.classList.remove('active')
    minus.classList.add('active')
    mult.classList.remove('active')
    divide.classList.remove('active')
}

mult.onclick = function(){
    activeAct = '*'
    plus.classList.remove('active')
    minus.classList.remove('active')
    mult.classList.add('active')
    divide.classList.remove('active')
}

divide.onclick = function(){    
    activeAct = '/'
    plus.classList.remove('active')
    minus.classList.remove('active')
    mult.classList.remove('active')
    divide.classList.add('active')
}


calc.onclick = function () {
    result.textContent = Calculate(Number(firstNum.value), Number(secondNum.value))
}

function Calculate(a , b){

    console.log(a, b)
    if (activeAct == '+'){
        return a + b
    }
    else if (activeAct == '-'){
        return a - b
    }
    else if (activeAct == '*'){
        return a * b 
    }
    else if (activeAct == '/'){
        return a / b
    }
    else{
        alert('Нет такой команды!')
    }
}