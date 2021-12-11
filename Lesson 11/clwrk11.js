//є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let favorites = JSON.parse(localStorage.getItem('favorites')) || [ ];
console.log(favorites);
let clickTrigger3 = true;
for (let user of users) {
    let blockElement = document.createElement('target');
    let blockUsers = document.createElement('div');
    let button = document.createElement('button');
    button.innerText = ' in favorites';
    blockUsers.innerText = 'Ім\'я '+user.name+' вік ' +user.age+' статус '+user.status;
    blockElement.append(blockUsers);
    blockElement.append(button);
    document.body.append(blockElement);
    button.onclick = function () {
    clickTrigger3 = favorites.includes(user.name);
        console.log(user.name);
        if (clickTrigger3) {
            button.innerText = ' in favorites';
            let favoritess = [ ];
            favoritess = favorites.filter(function (item){return item.name !== user.name  && item.age !== user.age});
            localStorage.setItem('favorites', JSON.stringify(favoritess));
        } else {
            button.innerText = ' out favorites';
            favorites.push({user});
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
        console.log(clickTrigger3,favorites);

    };

}
