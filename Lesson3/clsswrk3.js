document.write(` Зробити масив з 10 чисел та<br/> `);
let array1 = [2,17,13,6,22,31,45,66,100,-18]; let i;
i=1;
document.write(` 1. перебрати його циклом while<br/> `);
while (i < 10) { //перебрати його циклом while
    document.write(` ${array1[i]} `);
    i++;
}
document.write(` <br/> `);
document.write(` 2. перебрати його циклом for<br/> `);
for (let n of array1) { //перебрати його циклом for
    //console.log(n);
    const p=n+" ";
    document.write(p);
}
document.write(` <br/> `);
document.write(` 3. перебрати циклом while та вивести числа тільки з непарним індексом.<br/> `);
i=1;
while (i < 10) { //перебрати циклом while та вивести числа тільки з непарним індексом
    //console.log(i);
    document.write(` ${array1[i]} `);
    i = i + 2; //непарний індекс
}
document.write(` <br/> `);
document.write(` 4. перебрати циклом for та вивести числа тільки з непарним індексом<br/> `);
for (i = 0; i<10; i+=1) { //4. перебрати циклом for та вивести числа тільки з непарним індексом
    if (i % 2 === 0) { }
    else {
        document.write(` ${array1[i]} `);
    }
}
document.write(` <br/> `);
document.write(` 5 перебрати циклом while та вивести числа тільки парні значення.<br/> `);
i=0;
while (i < 10) { //5 перебрати циклом while та вивести числа тільки парні значення
    if (array1[i] % 2 === 0) { //парні значення
        //console.log(i);
        document.write(` ${array1[i]} `);}
    i=i+1;
}
document.write(` <br/> `);
document.write(` 6. перебрати циклом for та вивести числа тільки парні значення.<br/> `);
for (i = 0; i<10; i+=1) { //6. перебрати циклом for та вивести числа тільки парні значення
    if (array1[i] % 2 === 0) {
        //console.log(i);
        document.write(` ${array1[i]} `);}
}
document.write(` <br/> `);
document.write(` 7. замінити кожне число кратне 3 на слово "okten".<br/> `);
// 7. замінити кожне число кратне 3 на слово "okten"
for (i = 0; i<10; i++) {
    if (array1[i] % 3 === 0) { //замінити кожне число кратне 3 на слово "okten"
        //console.log(i);
        array1[i]="okten";}
        document.write(` ${array1[i]} `);
}
document.write(` <br/> `);
document.write(` 8. вивести масив в зворотньому порядку.<br/> `);
//8. вивести масив в зворотньому порядку.
let r;
for (r = array1.length-1; r >= 0; r--)
{
    document.write(` ${array1[r]} `);
}
document.write(` <br/> `);
document.write(` 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед).<br/> `);
array1 = [2,17,13,6,22,31,45,66,100,-18];
document.write(` 9.1. перебрати його циклом while<br/> `);
i=10;
while (i > 0) { //перебрати його циклом while
    i--;
    document.write(` ${array1[i]} `);
}
document.write(` <br/> `);
document.write(` 9.2. перебрати його циклом for<br/> `);
for (r = array1.length-1; r >= 0; r--)
{
    document.write(` ${array1[r]} `);
}
document.write(` <br/> `);
document.write(` 9.3. перебрати циклом while та вивести числа тільки з непарним індексом.<br/> `);
i=10;
while (i > 0) { //перебрати його циклом while
    i--;
    document.write(` ${array1[i]} `);
    i--;
}
document.write(` <br/> `);
document.write(` 9.4. перебрати циклом for та вивести числа тільки з непарним індексом<br/> `);
for (r = array1.length-1; r >= 0; r--)
{
    if (r % 2 === 0) { }
    else {document.write(` ${array1[r]} `);}
}
document.write(` <br/> `);
document.write(` 9.5 перебрати циклом while та вивести числа тільки парні значення.<br/> `);
i=10;
while (i > 0) { //перебрати його циклом while
    i--;
    if (array1[i] % 2 === 0) { //парні значення
        document.write(` ${array1[i]} `);}
}
document.write(` <br/> `);
document.write(` 9.6. перебрати циклом for та вивести числа тільки парні значення.<br/> `);
for (r = array1.length-1; r >= 0; r--) { //6. перебрати циклом for та вивести числа тільки парні значення
    if (array1[r] % 2 === 0) {
        //console.log(i);
        document.write(` ${array1[r]} `);}
}
document.write(` <br/> `);
document.write(` 9.7. замінити кожне число кратне 3 на слово "okten".<br/> `);
// 7. замінити кожне число кратне 3 на слово "okten"
for (r = array1.length-1; r >= 0; r--) {
    if (array1[r] % 3 === 0) { //замінити кожне число кратне 3 на слово "okten"
        array1[r]="okten";}
    document.write(` ${array1[r]} `);
}
