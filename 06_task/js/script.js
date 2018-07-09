let background_color = prompt('Какой будет фон страницы?');
const Colored = document.querySelector('body');
Colored.style['background-color'] = background_color;

let color = prompt('Какой будет цвет текста на странице?');
const Test_color = document.querySelector('.page');
Test_color.style['color'] = color;

let person_name = prompt('Как зовут человека, который вас вдохновяет?');
const name = document.querySelector('.name')
console.log(name);
name.innerHTML = person_name;

let img_src = prompt('Введите адрес картинки');
const image = document.querySelector('img');
image.setAttribute('src', img_src);

let text_page = prompt('Введите текст страницы');
const text = document.querySelector('.shortBio');
text.innerHTML = text_page;

text.className += ' animated';
