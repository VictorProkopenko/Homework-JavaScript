//1.Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let result=0; let i;
let array1 = [];
for(i = 0; i < 10; i++) {
    array1[i] = Math.floor(Math.random() * 100);
    console.log(array1[i]);
    result=result+array1[i];
}
console.log(result);
document.write(array1+" "+'<br \/>');
document.write("Ітого "+result+" "+'<br \/>');
//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book1 = {
    nazva: " назва",
    klkStr: " кількість сторінок",
    janr: " жанр"
};
console.log(book1);
//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
book1 = {
    nazva: " назва",
    klkStr: " кількість сторінок",
    janr: " жанр",
    avtors: " автори"
};
console.log(book1);
//4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [
    ["назва 1", 100, "жанр", "автори"],
    ["назва 2", 200, "жанр", "автори"],
    ["назва 3", 300, "жанр", "автори"]
];
for(i = 0; i < 3; i++) {
    //console.log(books[i]);
    document.write(" "+books[i]+'<br \/>');
}
//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width). s
let height=23; let width=23; let s; s = height * width;
document.write("Площа прямокутника висотою "+height+" см та шириною "+width+" см "+s+" см²"+'<br \/>');
//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC)
let heightC=10; let dC=4; let v; v = heightC * dC;
document.write("Oб'єм циліндра заввишки "+heightC+" м та та діаметром основи "+dC+" м "+v+" м²"+'<br \/>');
