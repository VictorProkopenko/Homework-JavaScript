let array1 = [2,17,13,6,22,31,45,66,100,-18];
i=1;
while (i < 10) { //перебрати його циклом while
    document.write(`<div><h4> ${array1[i]} </h4></div>`);
    i++;
}
for (let n of array1) { //перебрати його циклом for
    console.log(n);
}
i=1;
while (i < 10) { //4 перебрати циклом while та вивести числа тільки з непарним індексом
    console.log(i);
    document.write(`<div><h4> ${array1[i]} </h4></div>`);
    i=i+2;
}
i=0;
while (i < 10) { //5 перебрати циклом while та вивести числа тільки парні значення
    if (array1[i] % 2 === 0) {
        console.log(i);
        document.write(`<div><h4> ${array1[i]} </h4></div>`);}
    i=i+1;
}

for (i = 0; i<10; i+=1) { //6. перебрати циклом for та вивести числа тільки парні значення
    if (array1[i] % 2 === 0) {
        console.log(i);
        document.write(`<div><h4> ${array1[i]} </h4></div>`);}
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (i = 0; i<10; i++) { //6. перебрати циклом for та вивести числа тільки парні значення
    if (array1[i] % 3 === 0) {
        console.log(i);
        document.write(`<div><h4> ${array1[i]} </h4></div>`);
        array1[i]="okten";}
}