// Называем переменные
let userinfo = document.querySelector('.input');
let paragraph = document.querySelector('.para');
let form = document.querySelector('.form');

//Функция: при отправке формы меняется текстовка параграфа
form.onsubmit = function (evt) {
    paragraph.textContent = userinfo.value;
};
//Задачка по приоритетам
console.log( 55 * (7 + 2) / (4 + 2) );