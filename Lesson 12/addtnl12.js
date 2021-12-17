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
    .then(usersArray => {
        let classusers = document.getElementsByClassName('users')[0];
        for (let usersArrayElement of usersArray) {
            console.log(usersArrayElement);
            let divPostTitle = document.createElement('h3');
            let divPostAddress = document.createElement('div');
            let divPostId = document.createElement('div');
            let divPostMailPhone = document.createElement('div');
            let divPostBody = document.createElement('div');
            let divPostBtn = document.createElement('button');
            divPostTitle.innerText = `Name: ${usersArrayElement.name}`;
            divPostAddress.innerHTML = `<span style="font-style: italic ; background:yellow;"> ${usersArrayElement.address.street}</span>`;
            divPostMailPhone.innerHTML = `<span style="background:darkseagreen;"> ${usersArrayElement.email}</span>`;
            divPostId.innerText = `Id: ${usersArrayElement.id} Username: ${usersArrayElement.username}`;
            divPostBody.innerText = ` `;
            divPostBtn.innerText = `Пости`;
            classusers.append(divPostId,divPostTitle,divPostMailPhone,divPostAddress,divPostBody,divPostBtn);
            divPostBtn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts`)
                    .then(post => post.json())
                    .then(postArray => {
                        for (let postArrayElement of postArray) {
                            if (postArrayElement.userId === usersArrayElement.id) {
                                let divPost = document.createElement('div');
                                let divCommBtn = document.createElement('button');
                                divPost.innerHTML = `<div style="font-style: normal ; background:cadetblue;"> ${postArrayElement.body}</div>`;
                                divCommBtn.innerText = `Коментар`;
                                divCommBtn.onclick = function () {
                                    fetch(`https://jsonplaceholder.typicode.com/comments`)
                                        .then(comments => comments.json())
                                        .then .then(commentArray => {
                                        for (let commentArrayElement of commentArray) {
                                            if (commentArrayElement.postId === postArrayElement.id) {
                                                let divComment = document.createElement('div');
                                                divComment.innerHTML = `<div style="font-style: normal ; background:grey;"> ${commentArrayElement.body}</div>`;
                                                divPost.append(divComment);
                                            }

                                        }
                                    })

                                };
                                divPost.append(divCommBtn);
                                divPostBody.append(divPost);
                            }
                        }

                    });
            };
        }
    });