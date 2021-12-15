// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(posts => posts.json())
    .then(jPostArray => {
        let classPost = document.getElementsByClassName('post')[0];
        for (let jPostArrayElement of jPostArray) {
            let divPost1 = document.createElement('p');
            divPost1.innerText = `Id: ${jPostArrayElement.id} userId:${jPostArrayElement.userId} `
            let divPost2 = document.createElement('h3');
            divPost2.innerText = `${jPostArrayElement.title} `;
            let divPost3 = document.createElement('div');
            divPost3.innerHTML = `<span style="font-style: italic ; background:pink;">` + `${jPostArrayElement.body}` + `</span>`;
            classPost.append(divPost1,divPost2,divPost3);
        }
        document.body.appendChild(classPost);
});


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//  Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(comments => comments.json())
    .then(commentsArray => {
        for (const commentsArrayElement of commentsArray) {
            let classComment = document.getElementsByClassName('comments')[0];
            let divComment = document.createElement('p');
            divComment.classList.add('comment');
            divComment.innerText = `Id: ${commentsArrayElement.id} postId: ${commentsArrayElement.postId}`;
            let divName = document.createElement('div');
            divName.innerText = `Name: ${commentsArrayElement.name} `;
            let divEmail = document.createElement('div');
            divEmail.innerText = `Email: ${commentsArrayElement.email} `;
            let divBody = document.createElement('div');
            divBody.innerHTML = `<span style="font-style: italic ; background:palegoldenrod;">` + `${commentsArrayElement.body}` + `</span>`;
            classComment.append(divComment,divName,divEmail,divBody);
        }
        //document.body.appendChild(classComment);
    });
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body":