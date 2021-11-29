let str = 'насолодження';
document.write(`<div>Напишите функцию cutString(str, n), которая делит строку " ${str} " на подстроки, состоящие из n символов.</div>`) // -
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutString(str,n) {
    let str1=[];
    for (let i=0; i<str.length; i+=n) {
        str1.push(str.slice(i, i + n));
    }
    return str1;
}
str1=cutString(str, 3);
document.writeln(`<div><h4>${str1}</h4></div>`);
// Протестувати на значеннях
let e1 = 'someemail@gmail.com'; let e2 = 'someeMAIL@gmail.com'; let e3 = 'someeMAIL@i.ua'; let e4 = 'some.email@gmail.com';
document.write(`<div>Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в 
себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше 
ніж на 2 символ далі після равлика, функція не чутлива до регістру</div>`);

function validEmail(eMail) {
    return eMail.indexOf('@') > 0
        && eMail.indexOf('.', eMail.indexOf('@')) > 0
        && eMail.indexOf('.') < eMail.length-2;
}
document.write(`<div><h4>${e1} is ${validEmail(e1)}, ${e2} is ${validEmail(e2)}, ${e3} is ${validEmail(e3)}, ${e4} is ${validEmail(e4)}, </h4></div>`);
e1 = '@gmail.com'; e2 = 'someeMAIL@gmail'; e3 = 'someeMAIL@i.u'; e4 = 'some.email@';
document.write(`<div><h4>${e1} is ${validEmail(e1)}, ${e2} is ${validEmail(e2)}, ${e3} is ${validEmail(e3)}, ${e4} is ${validEmail(e4)}, </h4></div>`);
// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'</div>