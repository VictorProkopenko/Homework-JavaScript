// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculateSquare(a,b) {
    //console.log(arguments);
    let square = a * b;
    return square;
}
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calculateCircle(r) {
    //console.log(arguments);
    let squareCircle =  3.14 * r * r;
    return squareCircle;
}
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calculateCilindr(h,r) {
    //console.log(arguments);
    quareCilindr =  3.14 * r * h;
    return quareCilindr;
}
// - створити функцію яка приймає масив та виводить кожен його елемент
function typeArray(array1) {
    //console.log(arguments);
    for (let i = 0; i < array1.length; i++) {
                document.write(`<div> ${array1[i]} </div>`);
             }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(txt) {
    document.write(`<p> ${txt} </p>`);
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function spisok(sp) {
    document.write(`<ul> <li>${sp}</li> <li>${sp}</li> <li>${sp}</li> </ul>`)
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function spisok2(sp, n) {
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li> ${sp} </li>`);
    }
    document.write(`</ul>`);
}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function spisokArray(array1) {
    document.write(`<ul>`);
    for (let i = 0; i < array1.length; i++) {
        document.write(`<li> ${array1[i]} </li>`);
    }
    document.write(`</ul>`);
}
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function viewArray(arrObj) {
    for (let i = 0; i < arrObj.length; i++) {
        document.write(`<div> ${arrObj.id} </div>`);
    }
}
