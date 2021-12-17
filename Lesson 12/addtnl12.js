// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
// address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
// company: {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
// email: "Sincere@april.biz"
// id: 1
// name: "Leanne Graham"
// phone: "1-770-736-8031 x56442"
// username: "Bret"
// website: "hildegard.org"
fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(postsArray => {
        let classPosts = document.getElementsByClassName('users')[0];
        for (let postsArrayElement of postsArray) {
            console.log(postsArrayElement);
            let divPostTitle = document.createElement('h3');
            let divPostBody = document.createElement('div');
            let divPostId = document.createElement('div');
            let divPostMailPhone = document.createElement('div');
            let divPostBtn = document.createElement('button');
            divPostTitle.innerText = `Name: ${postsArrayElement.name}`;
            divPostBody.innerHTML = `<span style="font-style: italic ; background:yellow;"> ${postsArrayElement.address.street}</span>`;
            divPostMailPhone.innerHTML = `<span style="background:darkseagreen;"> ${postsArrayElement.email}</span>`;
            divPostId.innerText = `Id: ${postsArrayElement.id} Username: ${postsArrayElement.username}`;
            divPostBtn.innerText = `Пости`;
            classPosts.append(divPostId,divPostTitle,divPostMailPhone,divPostBody,divPostBtn);
            divPostBtn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${postsArrayElement.id}`)
                    .then(post => post.json())
                    .then(postArray => {
                        console.log(postArray);
                        for (let postArrayElement of postArray) {
                            console.log(postArrayElement.body);
                            let divPost = document.createElement('div');
                            divPost.innerHTML = `<div style="font-style: normal ; background:cadetblue;"> ${postArrayElement.body}</div>`;
                            divPostBody.append(divPost);
                        }

                    });
            };
        }


    });