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
let tr = 11;
let max = 100,
    min = 0


function random(min, max) {
    return min + Math.random() * (max - min);
}

let guessedNumber;


function getNumberDesiredRange(str) {
    secretNumber = +prompt(str);
    guessedNumber = parseInt(random(min, max));
    if (secretNumber === guessedNumber) {
        resetGame();
        //return confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть ещё?');
    } else if (secretNumber > 100 && isNumber(secretNumber) && tr >= 1) {
        tr -= 1;
        getNumberDesiredRange('Загаданное число меньше.' + ' Осталось попыток: ' + tr)         
    } else if (secretNumber < 0 && isNumber(!isNaN(secretNumber)) && tr >= 1) {
        tr -= 1;
        getNumberDesiredRange('Загаданное число больше.' + ' Осталось попыток: ' + tr)
    } else if (isNaN(secretNumber) && tr >= 1) {
        tr -= 1;
        getNumberDesiredRange('Введите число!' + ' Осталось попыток: ' + tr)
    } else if (typeof(secretNumber) === 'object' || tr < 1) {
        alert('Игра завершена');
    }
}


function resetGame() {
    let ask = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть ещё?');
    if (ask === true) {
        getNumberDesiredRange(str);
    } else if (ask !== true) {
        alert('До свидания! приходите ещё поиграть.')
    }
}

getNumberDesiredRange(str, guessedNumber);