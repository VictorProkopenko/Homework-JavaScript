const container = document.getElementById('container'); const userKey = 'userKey';
const conposts = document.getElementById('conposts');
const users = JSON.parse(localStorage.getItem(userKey));
const userDiv = document.createElement('div'); userDiv.className = 'user';
const content = document.createElement('div');
const addressElement = document.createElement('div');
const companyElement = document.createElement('div');
const postBtn = document.createElement('button');
let address = users.address;
let company = users.company;

postBtn.innerHTML = 'post of current user';
content.innerHTML = `<h4>Id: ${users.id}, Name: ${users.name}</h4>, username:${users.username}, email:${users.email},
phone:${users.phone}, website:${users.website}`;
addressElement.innerHTML = ` Address street: ${address.street}, suite: ${address.suite}, city: ${address.city}, zip: ${address.zipcode}, 
geo: lat | lng ${address.geo.lat} : ${address.geo.lng} `;
companyElement.innerHTML = ` Company Name: ${company.name} , Catch: ${company.catchPhrase} , Bs: ${company.bs}  `+ `<br />`;
postBtn.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/users/' + users.id + '/posts')
        .then(response => {
           return response.json();
        })
        .then(posts => {
            for (const post of posts) {
                const userPosts = document.createElement('div');
                userPosts.innerHTML = `<br /> <a href='post-details.html'> <h5> ${post.title} </h5>  </a>  <br />`;
                userPosts.addEventListener('click', userPost => {
                    let posts=`post`;
                    localStorage.setItem(posts, JSON.stringify(post));
                });
                conposts.appendChild(userPosts);
                postBtn.disabled = true;
            }
        })
}
content.appendChild(addressElement);
content.appendChild(companyElement);
content.appendChild(postBtn);
userDiv.appendChild(content);
container.appendChild(userDiv);
container.appendChild(conposts);




