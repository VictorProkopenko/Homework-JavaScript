let array1 = [2,17,13,6,22,31,45,66,100,-18]; let i;
i=1;

while (i < 10) { //перебрати його циклом while
    document.write(` ${array1[i]} `);
    i++;
}

for (let n of array1) { //перебрати його циклом for
    //console.log(n);
    const p=n+" ";
    document.write(p);
}
i=1;
while (i < 10) { //4 перебрати циклом while та вивести числа тільки з непарним індексом
    //console.log(i);
    document.write(` ${array1[i]} `);
    i = i + 2; //непарний індекс
}
i=0;
while (i < 10) { //5 перебрати циклом while та вивести числа тільки парні значення
    if (array1[i] % 2 === 0) { //парні значення
        //console.log(i);
        document.write(` ${array1[i]} `);}
    i=i+1;
}
for (i = 0; i<10; i+=1) { //6. перебрати циклом for та вивести числа тільки парні значення
    if (array1[i] % 2 === 0) {
        //console.log(i);
        document.write(` ${array1[i]} `);}
}
// // 7. замінити кожне число кратне 3 на слово "okten"
for (i = 0; i<10; i++) {
    if (array1[i] % 3 === 0) { //замінити кожне число кратне 3 на слово "okten"
        //console.log(i);
        array1[i]="okten";}
        document.write(` ${array1[i]} `);

}
// //8. вивести масив в зворотньому порядку.
i=10;
while (i < 1) { //перебрати його циклом while
    i=i-1;
    document.write(`<div><h4> ${array1[i]} </h4></div>`);
}
