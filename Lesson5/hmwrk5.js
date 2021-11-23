//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const calculateSquare = (a,b) => {
    return a * b;
}
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const calculateCircle = (r) => {
    return 3.14 * r * r;
}
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const calculateCilindr = (h,r) => {
    return 3.14 * r * h;
}
// - створити функцію яка приймає масив та виводить кожен його елемент
const typeArray = (array1) => {
    for (let i = 0; i < array1.length; i++) {
                document.write(`<div> ${array1[i]} </div>`);
             }
}
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraf = (txt) => {
    document.write(`<p> ${txt} </p>`);
}
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const spisok = (sp) => {
    document.write(`<ul> <li>${sp}</li> <li>${sp}</li> <li>${sp}</li> </ul>`)
}
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const spisok2 = (sp, n) => {
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li> ${sp} </li>`);
    }
    document.write(`</ul>`);
}
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const spisokArray = (array1) => {
    document.write(`<ul>`);
    for (let i = 0; i < array1.length; i++) {
        document.write(`<li> ${array1[i]} </li>`);
    }
    document.write(`</ul>`);
}
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const viewArray = (arrObj) => {
    for (let i = 0; i < arrObj.length; i++) {
        document.write(`<div> ${arrObj[i].id} ${arrObj[i].name} ${arrObj[i].age}</div>`);
    }
}
