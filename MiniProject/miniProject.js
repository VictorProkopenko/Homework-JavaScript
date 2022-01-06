// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(usersArray => {
        console.log(usersArray);
        let classUsers = document.getElementsByClassName('users')[0];
        for (let usersArrayElement of usersArray) {
            let divUserId = document.createElement('div');
            let divUserName = document.createElement('h5');
            let divUserBtn = document.createElement('button');
            divUserId.innerText = `Id: ${usersArrayElement.id}`;
            divUserName.innerHTML = `<span style="font-style: italic ; background:yellow;"> ${usersArrayElement.name}</span>`;
            divUserBtn.innerText = 'Детальна інформація';
            // <a href='user-details.html'> На сторінку товарів - в кошик</a>
            classUsers.append( divUserId, divUserName, divUserBtn);
        }
    });

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.innerText = `user id - ${user.id}; user name - ${user.name}`
            document.body.append(div);
        }
    });

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
// },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
// }
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
//
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment
// визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
