//
// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
let block1 = document.createElement('block1');
block1.classList.add('wrap');
block1.classList.add('collapse,alpha,beta');
block1.innerText = ' Hello! ';
block1.style.color = 'gold';
block1.style.background = 'blue';
block1.style.fontSize = '300px'; //колір фону, колір тексту, розмір тексту
document.body.appendChild(block1);
let cloneBlock1 = block1.cloneNode(true);
document.body.appendChild(cloneBlock1);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає
// його до блоку .menu
// // Завдання робити через цикли.
let array1 = ['Main', 'Products', 'About us', 'Contacts'];
let menuClass = document.getElementsByClassName('menu');
console.log(menuClass[0]);
function getList() {
    let result = [];
    for(let i=0; i<array1.length; i++) {
        let li = document.createElement('li');
        li.append(array1[i]);
        result.push(li);
    }
    return result;
}
menuClass[0].append(...getList());

// // - Є масив
let coursesAndDurationArray;
coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
let cADAE;
for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
    cADAE = document.createElement('div');
    cADAE.innerHTML = coursesAndDurationArrayElement.title+' '+coursesAndDurationArrayElement.monthDuration;
    document.body.append(cADAE);
}
// //
// // - Є масив

// coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
//
for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
    let cADAE0 = document.createElement('div');
    let cADAE1 = document.createElement('h1');
    let cADAE2 = document.createElement('p');
    cADAE1.innerText = coursesAndDurationArrayElement.title;
    cADAE2.innerText = coursesAndDurationArrayElement.monthDuration;
    cADAE0.appendChild(cADAE1);
    cADAE0.appendChild(cADAE2);
    document.body.append(cADAE0);
    console.log(cADAE0);
}
