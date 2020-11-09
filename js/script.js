let page = document.querySelector('.page');
let lightButton = document.querySelector('.light-button');
let message = document.querySelector('.message');
console.log(document.querySelector('.page'));
page.classList.add('second-page');
lightButton.onclick = function () {
    console.log('Кнопка нажата!');
};
console.log(message.textContent);