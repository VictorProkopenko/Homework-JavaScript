// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let druzi = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; let k;
console.log(druzi);
k=druzi.length; //k=2;
console.log(k);
if (k >= 3) {
    console.log("Це великий масив, в якому  3 і більше елементи.");
} else {
    console.log("Це маленький масив, в якому менше 3-х елементів.");
}
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let a; a = Math.floor(Math.random() * 11); let b; b = Math.floor(Math.random() * 11);  let c; c = Math.floor(Math.random() * 11);
console.log(a, b, c);
if ((a > b && a < c) || (a < b && a > c)) {
    console.log("Перше число "+a+" його значення між двома іншими ");
}
else if ((b > a && b < c) || (b < a && b > c)) {
    console.log("Друге число "+b+" його значення між двома іншими ");
}
else if ((c > b && c < a) || (c < b && c > a)) {
    console.log("Третє число "+c+" його значення між двома іншими ");
}
if ((a > b && a < c) || (a < b && a > c)) {
    console.log("Перше число "+a+" між "+b+" та "+c);
}
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
let result = (a + b < 4) ? ' Мало' : ' Багато';
console.log((a+b)+result);
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
a = (Math.floor(Math.random() * 201))-100; //число від -100 , 0 , +100
result = (a < 0) ? ' Число негативне' : (a > 0) ? ' Число позитивне' : (a = 0) ? ' Нуль' : 'Щось незрозуміле';
console.log((a)+result);