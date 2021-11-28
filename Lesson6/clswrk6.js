// - Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
console.log(n1, n2, n3);
document.write(`<div> Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд </div>`);
const validName = (n1, garb) => {
    n1 = n1.replaceAll(garb, ' ');
    return n1;
};
n1 = validName(n1, '..');
n2 = validName(n2, '---');
n3 = validName(n3, '__');
document.write(`${n1}, ${n2}, ${n3}`);
document.write(`<div> - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100. </div>`);
let kol = 10;
console.log(kol);
const randomNat = (kol) => {
    let arr1 = [kol]; let i;
    for (i = 0; i < kol; i++) {
        arr1[i] = Math.round(Math.random() * 100);
    }
    console.log(arr1);
    return arr1;
};
arr1 = randomNat(kol);
document.write(`<div> ${arr1} </div>`);
document.write(`<div> - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort </div>`);
arr1 = randomNat(10);
arr1 = arr1.sort((a, b) => a - b );
document.write(`<div> ${arr1} </div>`);
arr1 = randomNat(10);
arr1 = arr1.sort((a, b) => b - a);
document.write(`<div> ${arr1} </div>`);

document.write(`<div> - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових 
значень. відфільтрувати  його за допомоги filter, 
залишивши тільки парні числа</div>`);
arr1 = randomNat(10);
arr1 = arr1.filter(val => val%2===0);
document.write(`<div> ${arr1} </div>`);

document.write(`<div>- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . 
за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.</div>`);
arr1 = randomNat(10);
let arr2 = arr1.map(x => x + '');
console.log(arr2);
document.write(`<div>  ${arr2} </div>`);

document.write(`<div>- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
 або навпаки в залежності від значення аргументу direction.</div>`);
let nums = [11, 21, 3];
function sortNums(arr, direction) {
    if (direction === 'top') {
        arr.sort((a, b) => b - a);
    } else {
        arr.sort((a, b) => a - b);
    }
    return arr;
}
sortNums(nums,'top') // [3,11,21]
console.log(nums);
sortNums(nums,'bottom') // [21,11,3]
console.log(nums);
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray[0]);
document.write(`<div>є масив coursesAndDurationArray</div>`);
document.write(`<div>відсортувати його за спаданням за monthDuration</div>`);
arr1 = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);

console.log(arr1);
document.write(`<div>відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців</div>`);
arr1 = coursesAndDurationArray.filter(a => a.monthDuration>5);
console.log(arr1);
