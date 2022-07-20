'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}
 const guess = (number) => {
    console.log(number);
    const numberUser = prompt("Угадай число от 1 до 100");
    if (!numberUser) {
        alert("Игра окончена");
    } else if (!isNumber(numberUser)) {
        alert("Введи число");
        guess(number);
    } else if (parseInt(numberUser) === number) {
        alert("Поздравляю, вы угадали!") }
    else if (parseInt(numberUser) > number) {
        alert("Загаданное число меньше");
        guess();
    } else if (parseInt(numberUser) < number) {
        alert("Загаданное число больше");
        guess(number);
    }
}
guess(Math.floor(100 * Math.random() + 1));