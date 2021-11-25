let str1='hello world'; let str2='lorem ipsum'; let str3='javascript is cool'; //cmnd alt v
document.write(`<div> Знайти та вивести довжину наступних стрінгових значень </div>`);
document.write(`<div><h4> hello world = ${str1.length}, lorem ipsum = ${str2.length}, javascript is cool = ${str3.length} </h4></div>`);

document.write(`<div> Перевести до великого регістру наступні стрінгові значення </div>`);
document.write(`<div>'hello world', 'lorem ipsum', 'javascript is cool'</div>`);
str1 = str1.toUpperCase(); str2 = str2.toUpperCase(); str3 = str3.toUpperCase();
document.write(`<div><h4> ${str1}, ${str2}, ${str3} </h4></div>`);

document.write(`<div> Перевести до нижнього регістру настипні стрінгові значення </div>`);
document.write(`<div>'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'</div>`);
str1 = str1.toLowerCase(); str2 = str2.toLowerCase(); str3 = str3.toLowerCase();
document.write(`<div><h4> ${str1} , ${str2}, ${str3} </h4></div>`);

document.write(`<div> Є "брудна" стрінга let str = "   dirty string    " . Почистити її від зайвих пробілів. </div>`);
let str4=' dirty string   '; str4 = str4.trim();
document.write(`<div><h4> ${str4} </h4></div>`);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.