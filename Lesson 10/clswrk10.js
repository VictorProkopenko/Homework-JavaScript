// - створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
document.getElementById('btn1').onclick = function () {
    let input1 = document.forms.form1.name11;
    let input2 = document.forms.form1.name12;
    let input3 = document.forms.form2.name21;
    let input4 = document.forms.form2.name22;
    console.log(input1.value, input2.value, input3.value, input4.value);
};
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
//
let table1 = document.forms.form3;
function buildTable () {
    let r = +table1.row.value;
    let c = +table1.col.value;
    let cont = table1.cont.value;
    console.log(r,c,cont);
    let table = document.createElement('table');
    table.style.border = '1px solid black';
    for (let i=0; i < r; i++) {
        let trow = document.createElement("tr");
        for (let j=0; j < c; j++) {
            let tcol = document.createElement("td");
            trow.appendChild(tcol);
            tcol.innerText = cont;
        }
        table.appendChild(trow);
    }
    document.body.appendChild(table);
};

// - Сворити масив не цензцрних слів.
let notCenz = ['test1','test2','test3'];
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
function testCenz2(n) {
    let wrdb = document.forms[n].cenz.value;
    if (notCenz.includes(wrdb)) {
        alert('Not good '+wrdb);
    } else {
        alert('Good!');
    }
}
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

