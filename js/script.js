// Называем переменные
let page = document.querySelector('.page');
let lightButton = document.querySelector('.light-button');
let message = document.querySelector('.message');

console.log(document.querySelector('.page')); //Выводим класс с селектором .page
page.classList.add('second-page'); //Добавляем новый класс
//Функция: при нажатии на lightButton появляется сообщенеие об успешном нажатии
lightButton.onclick = function () {
    console.log('Кнопка нажата!');
};
//Выводим текстовое значение из message в консоль
console.log(message.textContent);