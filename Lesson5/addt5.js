//Дано натуральное число n. Выведите все числа от 1 до n.
const calculateNatural = (n) => {
    let i
    for (i = 0; i < n; i++) {
        document.write(`<div> ${i + 1} </div>`);
    }
}
//Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае
const vivodotAdoB = (a, b) => {
    let i; let n;
    if (a > b) {
        n = a - b;
        for (i = n; i >= 0; i--) {
            document.write(`<div> ${b + i}</div>`);
        }
    } else {
        n = b - a;
        for (i = n; i >= 0; i--) {
            document.write(`<div> ${b - i}</div>`);
        }
    }
};
//функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
const sdvigArr = (numArray, i) => {
    let nn; let buf; nn = numArray.length;
    if (nn>i) {
        buf = numArray[i]; numArray[i]=numArray[i+1]; numArray[i+1]=buf;
    }
    return numArray;
};
// <!-- - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.-->
// <!--Двожина масиву від 2 до 100-->
const sortEight = (numArray) => {
        let len; len = numArray.length;
    for (let i = 0; i < len; i++) {
        if (numArray[i] === 0) {
            numArray.push(numArray.splice(i, 1)[0]); // добавити вирізати
            i--; len--; // зупинка на i скорочення кроків циклу
        }
    }
    console.log(numArray)
    return numArray;
};



