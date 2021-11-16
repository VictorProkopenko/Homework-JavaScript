let array1 = [2,17,13,6,22,31,45,66,100,-18];
i=1;
while (i < 10) { //перебрати його циклом while
    document.write(`<div><h4> ${array1[i]} </h4></div>`);
    i++;
}
for (let n of array1) {
    console.log(n);
}
i=1;
while (i < 10) { //перебрати циклом while та вивести числа тільки з непарним індексом
    document.write(`<div><h4> ${array1[i]} </h4></div>`);
    i=i+2;
}
