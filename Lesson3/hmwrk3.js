//debugger;
// створити масив з:
// з 5 числових значень з 5 стрічкових значень з 5 значень стрічкового, числового та булевого типу та вивести його в консоль
let array1 = []; let array2 = []; let array3 = []; let i;
for (i = 0; i<5; i++) {
    array1[i]=i;
    array2[i]=("str "+i);
    if (i % 2 === 0) {array3[i]=("str "+i); //стрічкового типу
    }
    else if (i % 3 === 0) {array3[i]=true //булевого типу
    }
    else {
        array3[i] = i;
    }
}
console.log(array1);
console.log(array2);
console.log(array3);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині
for (i = 5; i<20; i++) {
    if (i % 2 === 0) {array3[i]=("txt "+i);}
    else if (i % 3 === 0) {array3[i]=true}
    else {array3[i] = i+10;}
}
 //10 блоків div
console.log(array3);
for (let i = 0; i < 10; i++) {
    document.write(`<div class="a"> <h3> Довільний текст ${array3[i]}  </div> </h3>`)
}
document.write(` <br/> `);
for (let i = 0; i < 10; i++) {
    array3[i]=i+" "+array3[i];
    document.write(`<div class="a"> <h4> Довільний текст ${i} ${array3[i]}  </div> </h4>`)
}
document.write(` <br/> `);
document.write(`<h1>`)
i=0;
while (i < 20) {
    document.write(`  Довільний текст ${array3[i]} `)
    i++;
}
document.write(` <br/> `);
i=0;
while (i < 20) {
    array3[i]=i+" "+array3[i]; // добавився індекс
    document.write(` Довільний текст ${array3[i]} `)
    i++;
}
document.write(`</h1>`)
document.write(` <br/> `);
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи
for (i = 0; i<10; i++) {
    array1[i] = i;
    console.log(array1[i]);
}
for (i = 0; i<10; i++) {
    array2[i] = "Str "+i;
    console.log(array2[i]);
}
for (i = 0; i<10; i++) {
    if (i % 2 === 0) {array3[i]=("Str "+i);}
    else if (i % 3 === 0) {array3[i]=true}
    else {array3[i] = i+10;}
    console.log(array3[i]);
}
for (i = 0; i<10; i++) {
    if (typeof (array3[i]) === "boolean") {
        console.log(array3[i]);}
}
for (i = 0; i<10; i++) {
    if (typeof (array3[i]) === "number") {
        console.log(array3[i]);}
}
for (i = 0; i<10; i++) {
    if (typeof (array3[i]) === "string") {
        console.log(array3[i]);}
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
let array4 = [];
array4[0] = [2];
array4[1] = [0];
array4[2] = [2];
array4[3] = [1];
array4[4] = [true];
array4[5] = [false];
array4[6] = [[1,2]];
array4[7] = [{}];
array4[8] = ["Name"];
array4[9] = ["Jon"];
for (i = 0; i<10; i++) {
    console.log(array4[i]);
    //document.write(array4[i]);
}
for (i = 0; i<10; i++) {
    console.log(i);
    document.write(i);
}
document.write(` <br/> `);
for (i = 0; i<100; i++) {
    console.log(i);
    document.write(i);
}
document.write(` <br/> `);
for (i = 0; i<100; i+=2) {
    console.log(i);
    document.write(i);
}
document.write(` <br/> `);
for (i = 0; i<100; i+=2) { // вони і так парні
    if (i % 2 === 0) {
    console.log(i);
    document.write(` ${i} `)}
}
document.write(` <br/> `);
for (i = 0; i<100; i++) {// це був способ 1 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
    if (i % 2 === 0) { } else {
        console.log(i);
        document.write(` ${i} `)
    }
}
for (i = 0; i<100; i++) {// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
    if (i % 2 === 1) {
        console.log(i);
        document.write(` ${i} `)
    }
}
