// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const calculateMin = (a,b,c) => {
    let min=a;
        if (min > b) {min = b;}
        else if (min > c) {min = c;}
    return min;}
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const calculateMaxN = (a,b,c)  => {
    let max=a;
    if (max < b) {
        max=b;
    }
    else if (max < c) {
        max=c;
    }
    return max;}
// - створити функцію яка повертає найменьше число з масиву
const calculateMinimum = (numArray) => {
    let min; let i; min=numArray[0];
    for (i = 0; i<numArray.length; i+=1) {
        if (min >= numArray[i]) {
            min = numArray[i];
        }
    }
    return min;}
// - створити функцію яка повертає найбільше  число з масиву
const calculateMax = (numArray) => {
    let max; let i; max=numArray[0];
    for (i = 0; i<numArray.length; i+=1) {
        if (max < numArray[i]) {
            max = numArray[i];
        }
    }
    return max;}
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const calculateArray = (numArray) => {
    let sum; let i; sum=numArray[0];
    for (i = 1; i<numArray.length; i+=1) {
        sum=sum+numArray[i];
    }
    return sum;}
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const calculateArrayMean = (numArray) => {
    let sum; let i; sum=numArray[0];
    for (i = 1; i<numArray.length; i+=1) {
        sum=sum+numArray[i];
    }
    return sum/numArray.length;}
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
const returnMin = (...theArgs) => {
    let i; let min=theArgs[0]; let max=theArgs[0];
    for (i = 0; i < theArgs.length; i += 1) {
        if (min > theArgs[i]) {
            min = theArgs[i];}
        if (max < theArgs[i]) {
            max = theArgs[i];}
    }
    document.write(`<div> Виводить найбільше = ${max} </div>`);
    return min;
}
// - створити функцію яка заповнює масив рандомними числами
const returnRanNum=(len) => {
     let ranNumArray = [];
     for (let i = 0; i < len; i++) {
         ranNumArray[i] = Math.round(Math.random()*10);
     }
    return ranNumArray;
}
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
const returnRanNumHd = (len) =>{
    let ranNumArray = [];
    for (let i = 0; i < len; i++) {
        ranNumArray[i] = Math.round(Math.random()*100);
    }
    return ranNumArray;
}

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
const returnRanNumLm = (len, lim) =>{
    let ranNumArray = [];
    for (let i = 0; i < len; i++) {
        ranNumArray[i] = Math.round(Math.random()*lim);
    }
    return ranNumArray;
}
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const reversArray = (numArray) => {
    let rArr=[]; let i; ii = numArray.length;
    for (i = 0; i<numArray.length; i+=1) {
        rArr[ii]=numArray[i]; ii--;
    }
    return rArr;}
