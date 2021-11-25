let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool'; //cmnd-alt-v генерація змінної, cmnd-p  параметри, F1 help
document.write(`<div> Знайти та вивести довжину наступних стрінгових значень </div>`);
document.write(`<div><h4> hello world = ${str1.length}, lorem ipsum = ${str2.length}, javascript is cool = ${str3.length} </h4></div>`);
//-------------------------
document.write(`<div> Перевести до великого регістру наступні стрінгові значення </div>`);
document.write(`<div>'hello world', 'lorem ipsum', 'javascript is cool'</div>`);
str1 = str1.toUpperCase();
str2 = str2.toUpperCase();
str3 = str3.toUpperCase();
document.write(`<div><h4> ${str1}, ${str2}, ${str3} </h4></div>`);
//-------------------------
document.write(`<div> Перевести до нижнього регістру настипні стрінгові значення </div>`);
document.write(`<div>'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'</div>`);
str1 = str1.toLowerCase();
str2 = str2.toLowerCase();
str3 = str3.toLowerCase();
document.write(`<div><h4> ${str1} , ${str2}, ${str3} </h4></div>`);
//-------------------------
document.write(`<div> Є "брудна" стрінга let str = "  dirty string  " . Почистити її від зайвих пробілів. </div>`);
let str4 = '    dirty string    ';
str4 = str4.trim();
document.write(`<div><h4>${str4}</h4></div>`);
//-------------------------
document.write(`<div> Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів. </div>`);
let str5 = 'Каждый охотник желает знать';
let split;
const stringToarray = (str5) => {
    return str5.split(` `)
};
split = stringToarray(str5);
document.write(`<div><h4>${split}</h4></div>`);
//-------------------------
document.write(`<div> Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів. </div>`);
str5 = 'Каждый охотник желает знать';
let length = 7;
const delete_characters = (str5, length) => {
    return str5.slice(0, length);
};
let slice;
slice = delete_characters(str5, length);
document.write(`<div><h4>${slice}</h4></div>`);
//-------------------------
document.write(`<div> Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. 
При цьому всі символи рядка необхідно перевести у верхній регістр. </div>`);
str6 = 'HTML JavaScript PHP';
const insert_dash = (str6) => {
    return str6.toUpperCase().replace(" ", "-")
};
slice = insert_dash(str6);
document.write(`<div><h4>${slice}</h4></div>`);
//-------------------------
document.write(`<div> Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр 
першого символу рядка з нижнього регістру у верхній. </div>`);
str5 = 'каждый охотник желает знать';
const str_to_upper = (str5) => {
    return str5.toUpperCase()[0] + str5.slice(1)
};
strUp = str_to_upper(str5);
document.write(`<div><h4>${strUp}</h4></div>`);
//-------------------------
document.write(`<div> Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери. </div>`);
str5 = 'каждый   охотник желает      знать';
document.write(`<div> ${str5} </div>`);
const capitalize = (str5) => {
    str5 = str5.toUpperCase()[0] + str5.slice(1);//перша якшо попереду не пробіл
    let ii = -1;
    while ((ii = str5.indexOf(" ", ii + 1)) !== -1) {
        str5 = str5.slice(0, ii + 1) + str5.toUpperCase()[ii + 1] + str5.slice(ii + 2);
    }
    return str5;
};
strUp = capitalize(str5);
document.write(`<div><h4>${strUp}</h4></div>`);