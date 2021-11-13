// 1.
let time;
time = Math.floor(Math.random() * 60); // згенеруємо число від 0 до 59
if (time <= 15) {
    console.log(time + ' хвилини - перша чверть години');
} else if (time <= 30) {
    console.log(time + ' хвилини - друга чверть години');
} else if (time <= 45) {
    console.log(time + ' хвилини - третя чверть години');
} else if (time <= 59) {
    console.log(time + ' хвилини - четверта чверть години');
}
// 2.
let day;
day = (Math.floor(Math.random() * 31)) + 1; // згенеруємо число від 1 до 31
if (day <= 11) {
    console.log(day + ' число - перша декада місяця');
} else if (day <= 21) {
    console.log(day + ' число - друга декада місяця');
} else if (day <= 31) {
    console.log(day + ' число - третя декада місяця');
}

// 3. змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'
//   Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//let test = true;
let test = false;
if (test === true) {
    console.log('Неправильно ')
} else {
    console.log('Якщо test не дорівнює true, виведіть \'Вірно\' - так написано в завданні')
}
test = test ? "Неправильно" : "Вірно";
console.log(test);

// 4 Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a;
a = Math.floor(Math.random() * 3);
if (a === 2) {
    a = -3
} // згенеруємо число  -3, 0, 1
console.log(a);
(a !== 0) ? console.log("Вірно") : console.log("Невірно");


// 5. Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let dayOfWeeks;
dayOfWeeks = parseInt(prompt('Введіть день тижня від 1 до 7'));
//console.log(dayOfWeeks);
switch (dayOfWeeks) {
    case 1:
        console.log('ПОНЕДІЛОК: вперед до праці!');
        break;
    case 2:
        console.log('ВІВТОРОК: вперед до праці!');
        break;
    case 3:
        console.log('СЕРЕДА: вперед до праці!');
        break;
    case 4:
        console.log('ЧЕТВЕР: вперед до праці!');
        break;
    case 5:
        console.log('ПЯТНИЦЯ: вперед до праці!');
        break;
    case 6:
        console.log('СУБОТА: вперед до праці!');
        break;
    case 7:
        console.log('НЕДІЛЯ: відпочинок!!!');
        break;
    default:
        console.log("Спробуй ще раз");
}


// 6. Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year;
year = parseInt(prompt('Введіть рік'));
if (!!(year)) {
    if (year % 4 === 0) {
        console.log(year + ' рік ВИСОКОСНИЙ');
    } else {
        console.log(year + ' рік не ВИСОКОСНИЙ');
    }
}else {
    console.log('Спробуй ще раз');
}

// 7. Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“<br>
//    Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!<br>

// let oficialName = prompt('Яка «офіційна» назва JavaScript?');
// if(oficialName === 'ECMAScript'){
//    alert('Правильно, гарна робота');
// } else{
//    alert('Неправильно, офіційна назва - ECMAScript!');
// }