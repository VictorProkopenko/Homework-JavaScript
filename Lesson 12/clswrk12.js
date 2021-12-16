// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(posts => posts.json())
    .then(postsArray => {
        let classPosts = document.getElementsByClassName('posts')[0];
        for (let postsArrayElement of postsArray) {
            let divPostTitle = document.createElement('h5');
            let divPostBody = document.createElement('div');
            let divPostId = document.createElement('div');
            let divPostBtn = document.createElement('button');
            divPostTitle.innerText = `Title: ${postsArrayElement.title}`;
            divPostBody.innerHTML = `<span style="font-style: italic ; background:yellow;"> ${postsArrayElement.body}</span>`;
            divPostId.innerText = `Id: ${postsArrayElement.id} UserId: ${postsArrayElement.userId}`;
            divPostBtn.innerText = `Коментарі`;
            classPosts.append(divPostId,divPostTitle,divPostBody,divPostBtn);
            divPostBtn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${postsArrayElement.id}/comments`)
                    .then(comment => comment.json())
                    .then(commentArray => {

                        for (let commentArrayElement of commentArray) {
                            console.log(commentArrayElement.body);
                            let divComment = document.createElement('div');
                            // `<span style="font-style: italic ; background:blue;"> ${commentArrayElement.body}</span>`;
                            divComment.innerHTML = `<div style="font-style: normal ; background:cadetblue;"> ${commentArrayElement.body}</div>`;
                            divPostBody.append(divComment);
                        }

                    });
            };
        }


    });
