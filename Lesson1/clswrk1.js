//Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let result=0; let i;
let array1 = [];
for(i = 0; i < 11; i++) {
    array1[i] = Math.floor( Math.random() * 10 );
    console.log(array1[i]);
    result=result+array1[i];
}
console.log(result);
