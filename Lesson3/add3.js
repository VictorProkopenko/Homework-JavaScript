let array1 = []; //Створити пустий масив
for (i = 2; i<101; i+=2) { //заповнити його 50 парними числами за допомоги циклу.
        console.log(i);
        array1[i]=i;
        document.write(`<div><h4> ${array1[i]} </h4></div>`);
}