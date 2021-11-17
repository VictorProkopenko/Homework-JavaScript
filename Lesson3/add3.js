document.write(` 1. Створити пустий масив та :<br/> `);
let array1 = []; let i; let n;//Створити пустий масив
n=0;
document.write(` a. заповнити його 50 парними числами за допомоги циклу.<br/> `);
for (i = 2; i<101; i+=2) { //заповнити його 50 парними числами за допомоги циклу.
        array1[n]=i;
        document.write(` ${array1[n]} `);
        n++;
}
document.write(` <br/> b. заповнити його 50 непарними числами за допомоги циклу.<br/> `);
n=0;
for (i = 1; i<101; i+=2) {
        array1[n]=i;
        document.write(` ${array1[n]} `);
        n++;
}
document.write(` <br/> c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)<br/> `);
array1 = [];
for (i = 0; i<20; i++) {
        array1[i]=Math.floor(Math.random() * 100);
        document.write(` ${array1[i]} `);
}
array1 = []; let min; let max;
document.write(` <br/> d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)<br/> `);
for (i = 0; i<20; i++) {
        min = Math.ceil(8);
        max = Math.floor(733);
        array1[i]=Math.floor(Math.random() * (max - min + 1) + min);
        document.write(` ${array1[i]} `);
}
document.write(` <br/> 2. Вивести за допомогою console.log кожен третій елемент <br/> `);
for (i = 1; i < 21; i += 3) {
        n=i-1;
        console.log(n);
        console.log(array1[n]);
}
document.write(` <br/> `);
document.write(` <br/> 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним. <br/> `);
n=0;
for (i = 1; i < 21; i += 3) {
        n=i-1;
        console.log(n);
         if (array1[n] % 2 === 0) {
                 console.log(array1[n]); }
}
document.write(` <br/> `);
document.write(` <br/> 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив <br/> `);
let array2=[0]; let ii; n=0; ii=0;
for (i = 1; i < 21; i += 3) {
        n=i-1;
        console.log(n);
        if (array1[n] % 2 === 0) {
                console.log(array1[n]);
                array2[ii]=array1[n];
                ii++;
        }
}
console.log(array2);
document.write(` <br/> `);
document.write(` <br/> 5. Вивести кожен елемент масиву, сусід справа якого є парним <br/> `);
n=0; ii=0; let p;
for (i = 1; i < 21; i += 3) {
        n=i-1;
        if (array1[n] % 2 === 0) {
                console.log(array1[n]);
                p=array1[n-1];
                document.write(` ${p} `);
                ii++;
        }
}
document.write(` <br/> 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек <br/> `);
array1=[100,250,50,168,120,345,188]; let sum; sum=0;
for (let n of array1) {
        sum=sum+n;
        //document.write(n);
}
sum=sum/array1.length;
document.write(sum.toFixed(2));
document.write(` <br/> 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив. <br/> `);
ii=Math.floor(Math.random() * 10); // розмір массиву
array1=[]; array2=[];
for (i = 0; i<ii; i+=1) {
        array1[i]=Math.floor(Math.random() * 10);
        array2[i]=array1[i]*5;
        document.write(` ${array2[i]} `);
}
document.write(` <br/> 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив. <br/> `);
array3=[]; array1=[]; ii=0;
for (i = 0; i<50; i++) {
        if (i % 2 === 0) {array3[i]=("Strng "+i);}
        else if (i % 3 === 0) {array3[i]=true}
        else {array3[i] = i+10;}
        console.log(array3[i]);
}
for (i = 0; i<50; i++) {
        if (typeof (array3[i]) === "number") {
                array1[ii]=array3[i];
                document.write(` ${array1[ii]} `);
                ii++;
        }
}
document.write(` <br/> 9. Дано 2 масиви з рівною кількістю об'єктів З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" 
 Записати цей об'єкт в новий масив <br/> `);
let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
        {user_id: 3, country: 'USA', city: 'Portland'},
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        {user_id: 2, country: 'Poland', city: 'Krakow'},
        {user_id: 4, country: 'USA', city: 'Miami'}
];
//console.log(citiesWithId);
let usersWithCities = [
        {id: 1, name: 'name', age: 0, status: false, address: { user_id: 1, country: 'country', city: 'city'}},
        {id: 1, name: 'name', age: 0, status: false, address: { user_id: 1, country: 'country', city: 'city'}},
        {id: 1, name: 'name', age: 0, status: false, address: { user_id: 1, country: 'country', city: 'city'}},
        {id: 1, name: 'name', age: 0, status: false, address: { user_id: 1, country: 'country', city: 'city'}}
        ]
for (i=0; i<usersWithId.length; i++) {
        console.log(usersWithId[i].id);
        usersWithCities[i].id = usersWithId[i].id;
        usersWithCities[i].name = usersWithId[i].name;
        usersWithCities[i].age = usersWithId[i].age;
        usersWithCities[i].status = usersWithId[i].status;
        ii=0;
        while (ii<4) {
                if (usersWithCities[i].id === citiesWithId[i].user_id) {
                usersWithCities[i].address.user_id = citiesWithId[i].user_id;
                usersWithCities[i].address.country = citiesWithId[i].country;
                usersWithCities[i].address.city = citiesWithId[i].city;
                ii=5;
                }
                ii++;
        }
}
console.log(usersWithCities);

document.write(` <br/> Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними. <br/> `);
array1=[];
for (i = 0; i<10; i+=1) {
        array1[i]=i+1;
}
for (i = 0; i<10; i+=1) {
        if (array1[i] % 2 === 0) {
                console.log(array1[i]);
        }
}
document.write(` <br/> Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. 
 За допомогою будь-якого циклу скопіювати значення одного масиву в інший. <br/> `);

for (i = 0; i<10; i++) {
        array1[i]=array2[i];
}
console.log(array1, array2);
document.write(` <br/> Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово <br/> `);
p=" "; let strarray = [ 'a', 'b', 'c'];
for (i = 0; i<3; i++) {
        p=p+strarray[i];
}
console.log(p);
document.write(` <br/> Дано масив: [ 'a', 'b', 'c'] . while зібрати всі букви в слово. <br/> `);
i=0; p=" ";
while (i < 3) {
        p=p+strarray[i];
        i++;
}
console.log(p);
document.write(` <br/> Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово. <br/> `);
p=" ";
for (let n of strarray) { //перебрати його циклом for
        p=p+n;
}
console.log(p);


