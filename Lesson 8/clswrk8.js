// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let getId = document.getElementById('main_header');
console.log(getId);
getId.classList.add('sep-2021');
// b) робить шириниу елементу ul 400px
getId.style.width = '400px';
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let getLink = document.getElementsByClassName('linkList');
for (let getLL of getLink) {
    getLL.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
let getTextLE2 = document.getElementsByClassName('listElement2');
let inTxtLE2 = getTextLE2[0].innerText;
console.log(inTxtLE2);
// e) отримує всі елементи li та змінює ім колір фону на сірий
let getLi = document.getElementsByTagName('li');
for (let gli of getLi) {
    gli.style.background = 'gray';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let getA = document.getElementsByTagName('a');
for (let getElA of getA) {
    getElA.classList.add('anchor');
    if (getElA.innerText.includes('link3')) {
        getElA.style.fontSize = '40px';
    }
    getElA.classList.add('element_'+getElA.innerText);
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let getSubHead = document.getElementsByClassName('sub-header');
for (let getSH of getSubHead) {
    getSH.style.background = prompt('Color background '+getSH.innerHTML);
    if (getSH.innerText === 'content 2 segment') {
        getSH.style.color=prompt('Color text '+getSH.innerHTML);
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let getCont1 = document.getElementsByClassName('content_1');
for (let gCont1 of getCont1) {
    gCont1.innerText = prompt('Заміна'+gCont1);
}

// l) отримати елементи p та змінити їм padding на 20px
let getP = document.getElementsByTagName('p');
for (let gP of getP) {
    gP.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let getText2 = document.getElementsByClassName('text2');
for (let gText2 of getText2) {
    console.log(gText2);
    gText2.innerHTML = 'sep-2021';
}
