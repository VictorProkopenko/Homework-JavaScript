let fav = document.getElementById('favorites');
let favorites2 = JSON.parse(localStorage.getItem('favorites')) || [];
console.log(favorites2,fav);
for (let user of favorites2) {
    let blockElement = document.createElement('target');
    let blockUsers = document.createElement('div');
    blockUsers.innerText = 'Ім\'я: '+user.name+' вік: ' +user.age+' статус: '+user.status;
    blockElement.append(blockUsers);
    document.body.append(blockElement);
}
