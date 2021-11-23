// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function calculateMin(a,b,c) {
    let min=a; let i;
    for (i = 0; i<3; i+=1) {
        if (min > arguments[i]) {
            min = arguments[i];
        }
    }
    return min;}
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function calculateMaxN(a,b,c) {
    let max=a; let i;
    for (i = 0; i<3; i+=1) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;}
// - створити функцію яка повертає найбільше число з масиву
function calculateMinimum(numArray) {
    let min; let i; min=numArray[0];
    for (i = 0; i<numArray.length; i+=1) {
        if (min >= numArray[i]) {
            min = numArray[i];
        }
    }
    return min;}
// - створити функцію яка повертає найменьше число з масиву
function calculateMax(numArray) {
    let max; let i; max=numArray[0];
    for (i = 0; i<numArray.length; i+=1) {
        if (max < numArray[i]) {
            max = numArray[i];
        }
    }
    return max;}
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function calculateArray(numArray) {
    let sum; let i; sum=numArray[0];
    for (i = 1; i<numArray.length; i+=1) {
        sum=sum+numArray[i];
    }
    return sum;}
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function calculateArrayMean(numArray) {
    let sum; let i; sum=numArray[0];
    for (i = 1; i<numArray.length; i+=1) {
        sum=sum+numArray[i];
    }
    return sum/numArray.length;}
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function returnMin() {
    let min=arguments[0]; let i;  let max=arguments[0];
    for (i = 1; i<arguments.length; i+=1) {
        if (min > arguments[i]) {
            min = arguments[i];
        }
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    document.write(`<div> Максимум = ${max} </div>`);
    return min;}
// - створити функцію яка заповнює масив рандомними числами

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].