// - Дано список імен.
let n1 = 'Harry..Potter'; let n2 = 'Ron---Whisley'; let n3 = 'Hermione__Granger';
console.log(n1, n2, n3);
document.write(`<div> Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд </div>`);
// const validName = (n) => {
// return n;
// };
// n1 = validName(n1);
document.write(`${n1}, ${n2}, ${n3}`);
document.write(`<div> - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100. </div>`);
document.write(`<div> - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort </div>`);
document.write(`<div> - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, 
залишивши тільки парні числа</div>`);
document.write(`<div>- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . 
за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.</div>`);
document.write(`<div>- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
 або навпаки в залежності від значення аргументу direction.</div>`);
let nums = [11,21,3];
console.log(nums);
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
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
document.write(`<div>відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців</div>`);

