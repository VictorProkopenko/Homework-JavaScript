// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
let clickText1 = document.getElementById('text');
let clickBtn0 = document.getElementById('btn0');
clickBtn0.addEventListener('click', function () {
    clickText1.style.display='none';
    clickBtn0.style.display='block';
});

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
let clickText2 = document.getElementById('btn');
clickText2.addEventListener('click', function () {
    clickText2.style.display='none'
});

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
let target = document.getElementById('btn1');

let inpt;
target.addEventListener('click', function () {
    inpt = input.value;
    if (inpt >= 18) {
        result.innerText = input.value;
    } else {
        result.innerText = 'Ні ';
    }
})

// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
let clickMenu = document.getElementById('menu');
let clickItem = document.getElementById('items');
let clickTrigger=true
clickMenu.addEventListener('click', function () {
    if (clickTrigger) {
        clickItem.style.display = 'none';
        clickTrigger=false;
    } else {
        clickItem.style.display = 'block';
        clickTrigger=true;
    }
});


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments;
comments = [
{title: ' Коментар 1', body: ' Bla-bla-bla 1  Bla-bla-bla 1 Bla-bla-bla 1 Bla-bla-bla 1 Bla-bla-bla 1 Bla-bla-bla 1 Bla-bla-bla 1 Bla-bla-bla 1 '},
{title: ' Коментар 2', body: ' Bla-bla-bla 2  Bla-bla-bla 2 Bla-bla-bla 2 Bla-bla-bla 2 Bla-bla-bla 2 Bla-bla-bla 2 Bla-bla-bla 2 Bla-bla-bla 2 '},
{title: ' Коментар 3', body: ' Bla-bla-bla 3 Bla-bla-bla 3 Bla-bla-bla 3 Bla-bla-bla 3 Bla-bla-bla 3 Bla-bla-bla 3 Bla-bla-bla 3 '},
{title: ' Коментар 4', body: ' Bla-bla-bla 4 '},
{title: ' Коментар 5', body:  'Bla-bla-bla 5 Bla-bla-bla 5 Bla-bla-bla 5 Bla-bla-bla 5 Bla-bla-bla 5 Bla-bla-bla 5 Bla-bla-bla 5 Bla-bla-bla 5 Bla-bla-bla 5 Bla-bla-bla 5 '}
];
//alt enter
for (let comment of comments) {
    let blockElement = document.createElement('target');
    let blockTitle  = document.createElement('h4');
    let blockComent = document.createElement('div');
    let button = document.createElement('button');
    let clickTrigger2 = true;
    blockTitle.innerText  = comment.title ;
    blockComent.innerText = comment.body;
    button.innerText = ' Сховати';
    button.onclick = function () {

        if (clickTrigger2) {
            button.innerText = ' Дістати';
            blockComent.style.display = 'none';

        } else {
            button.innerText = ' Сховати';
            blockComent.style.display = 'block';

        }
        clickTrigger2 = !clickTrigger2;

    };

    blockElement.append(blockTitle);
    blockElement.append(blockComent);
    blockElement.append(button);
    document.body.append(blockElement);
}
