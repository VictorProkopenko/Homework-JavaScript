//Створити змінні. Присвоїти кожному з них значення Вивести кожну змінну за допомогою: console.log , alert, document.write
let array0=[' hello',' owu',' com',' ua']; //масив
let num1=1; let num2=10;
let array1=[-999, 123, 3.14, 2.7, 16];//масив
let bul1=true; let bul2=false;
console.log(array0);
console.log(num1); console.log(num2);
console.log(array1);
console.log(bul1, bul2);
alert(array0);
alert(num1); alert(num2);
alert(array1); //alert(array1[2]+num2); // як числа
alert(bul1+" "+bul2);
document.write(array0+" "+'<br \/>'); document.write(array0[0]+array0[1]+"."+array0[2]+"."+array0[3]+'<br \/>');
//document.write(num1+num2); //+'<br \/>'
num1 = num1+" "; num2 = num2+" ";
document.write(num1+num2+'<br \/>');
array1 = array1+' ';
document.write(array1+'<br \/>'); // +'<br \/>'
bul1 = bul1+" "; bul2 = bul2+" ";
document.write(bul1, bul2);
//Переприсвоїти кожній змінній з завдання значення на довільне.
bul1=false; //Міняємо місцями
bul2=true;
//Поміняємо масивам тип та значення .
array0=[2,0,2,1];
array1=["-999", "123", "3.14", "2.7", "16"];
//Поміняємо тип та значення
num1="One"; num2="Ten";
console.log(" "+array0);
console.log(num1+" "); console.log(" "+num2);
console.log(array1);
console.log(bul1, bul2);
alert(array0);
alert(num1); alert(" "+num2);
alert(array1);
alert(bul1+" "+bul2);
array0 = array0+' ';
document.write(array0+" "+'<br \/>');
document.write(num1+" "+num2+'<br \/>');
document.write(array1+'<br \/>');
bul1 = bul1+" "; bul2 = bul2+" ";
document.write(bul1, bul2);
//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
let firstName="Прокопенко "; let middleName="Віктор "; let lastName="Юрійович ";
let person = firstName+middleName+lastName;
console.log(person);
//За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
let person0 = {
    firstName: " Призвіще",
    middleName: " Iм"+"'"+"я",
    lastName: " По баткові",
    age: " вік"
};
//person0.firstName = prompt(person0.firstName); // крім призвіща
person0.middleName = prompt(person0.middleName);
person0.lastName = prompt(person0.lastName);
person0.age = prompt(person0.age);
document.write("<br \/>"+" Вітаю "+person0.middleName+" "+person0.lastName+". Тобі "+person0.age+" рочків"+ "<br/>");
//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100; let b = '100'; let c = true;
console.log(typeof a); console.log(typeof b); console.log(typeof c);
//Визначити відповідний оператор в виразах що б вийшов відповідний результат.
console.log(5 < 6); //logs true
console.log(5 >= 6); //logs false
console.log(5 > 6); //logs false
console.log(5 === 6); //logs false
console.log(10 === 10); //logs true
console.log(10 >= 10); //logs true
console.log(10 > 10); //logs false
console.log(10 < 10); //logs false
console.log(10 !== 10); //logs false
console.log(123 > '123'); //logs false
console.log(123 !== '123'); //logs true
//Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20"; a = 5;
document.write("Результат "+str + a + "тому що тип змінних перетворено до string"+"<br/>"); // як символи
document.write(str - a + "<br/>"); // як числа
document.write(str * "2" + "<br/>"); // як числа
document.write(str / 2 + "<br/>"); // як числа


