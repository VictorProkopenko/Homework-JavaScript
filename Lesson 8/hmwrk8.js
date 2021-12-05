// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//console.log(document.body);
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
//let conList = document.getElementsByTagName("content");
//console.log(conList);
let conList = document.getElementById("content");
console.log(conList);
//conList = document.getElementsByTagName("content");
//console.log(conList);
// -- отримує текст з блоку з id "rules"
let constRules = document.getElementById('rules');
console.log(constRules);
// -- замініть текст параграфа з id 'content' на будь-який інший
conList.innerText = 'замініть текст параграфа з id content на будь-який інший';
// -- замініть текст параграфа з id 'rules' на будь-який інший
constRules.innerText = 'замініть текст параграфа з id \'rules\' на будь-який інший';
// -- змініть кожному елементу колір фону на червоний
conList.style.background = 'red';
constRules.style.background = 'red';
let constLi = document.getElementsByTagName('li');
console.log(constLi);
for (const cLi of  constLi) {
    cLi.style.background = 'red';
    cLi.style.color = 'blue';
    console.log(cLi.classList); // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
}
// -- змініть кожному елементу колір тексту на синій
conList.style.color = 'blue';
constRules.style.color = 'blue';
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (const cLi of  constLi) {
    cLi.style.color = 'darkRed';
}