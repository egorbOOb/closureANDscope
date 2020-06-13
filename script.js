'use strict';
/*
let c = 6;
function addX(x) {
    return function(n) {
        return n + x
    }
}

const addThree = addX(3);
let d = addThree(c);
console.log(addThree(7));
*/
//Игровой бот 

function isNumber(a) {
    return (typeof(parseFloat(a)) === 'number' && isFinite(a))
};

let secretNumber;
let str = 'Угадай число от 1 до 100';
let tr = 10;
let max = 100,
    min = 0


function getRandom(max) {
    return (Math.round(Math.random() * max));
}

let guessedNumber;
let randomNumber = getRandom(max);
guessedNumber = randomNumber;

function getNumberDesiredRange(str) {
    secretNumber = +prompt(str);
    console.log(guessedNumber);
    if (secretNumber === guessedNumber) {
        resetOption();
        resetGame();
        //return confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть ещё?');
    } else if (secretNumber !== guessedNumber && secretNumber <= 100 && secretNumber >= 1) {
        tr -= 1;
        getNumberDesiredRange('Не угадали! ' + ' Осталось попыток: ' + tr)         
    } else if (secretNumber > 100 && isNumber(secretNumber) && tr > 1) {
        tr -= 1;
        getNumberDesiredRange('Загаданное число меньше.' + ' Осталось попыток: ' + tr)         
    } else if (secretNumber < 0 && isNumber(!isNaN(secretNumber)) && tr > 1) {
        tr -= 1;
        getNumberDesiredRange('Загаданное число больше.' + ' Осталось попыток: ' + tr)
    } else if (isNaN(secretNumber) && tr > 1) {
        tr -= 1;
        getNumberDesiredRange('Введите число!' + ' Осталось попыток: ' + tr)
    } else if (tr <= 1) {
        resetOption();
        resetFailGame();
    } else {
        alert('Приходите ещё поиграть!')
    }
}


function resetFailGame() {
    let ask = confirm('Закончились попытки :-(. Хотите попробовать ещё раз?');
    if (ask === true) {
        resetOption();
        getNumberDesiredRange(str);
    } else if (ask !== true) {
        alert('До свидания! приходите ещё поиграть.')
    }
};

function resetGame() {
    let ask = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть ещё?');
    if (ask === true) {
        getNumberDesiredRange(str);
    } else if (ask !== true) {
        alert('До свидания! приходите ещё поиграть.')
    }
}

function resetOption() {
    tr = 10;
    randomNumber = getRandom(max);
    guessedNumber = randomNumber;
};

getNumberDesiredRange(str, guessedNumber);
