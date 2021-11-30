document.writeln(`<div>Створити функцію конструктор для об'єктів User 
з полями id, name, surname , email, phone створити пустий масив, наповнити його 10 об'єктами new User(....) </div>`)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let newUsers = [];
newUsers[0] = new User(1, `Name1`, `Surname1`, 'U1@email.com', `11111111`);
newUsers[1] = new User(2, `Name2`, `Surname2`, 'U2@email.com', `22-222-222`);
newUsers[2] = new User(3, `Name3`, `Surname3`, 'U3@email.com', `33-333-333`);
newUsers[3] = new User(4, `Name4`, `Surname4`, 'U4@email.com', `44-444-444`);
newUsers[4] = new User(5, `Name5`, `Surname5`, 'U5@email.com', `555-111-11`);
newUsers[5] = new User(6, `Name6`, `Surname6`, 'U6@email.com', `66511111`);
newUsers[6] = new User(7, `Name7`, `Surname7`, 'U7@email.com', `77-222-222`);
newUsers[7] = new User(8, `Name8`, `Surname8`, 'U8@email.com', `88-333-333`);
newUsers[8] = new User(9, `Name9`, `Surname9`, 'U9@email.com', `99-444-444`);
newUsers[9] = new User(10, `Name10`, `Surname10`, 'U10@email.com', `109-111-11`);
console.log(newUsers);

document.writeln(`Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)`);
let pairUsers = newUsers.filter(a => a.id%2===0)
console.log(pairUsers);

document.writeln(`Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)`);
let heightUsers = newUsers.sort((a, b) => b.id - a.id); // вони і так були по зростанню, зробив по спаданню
console.log(heightUsers);

document.writeln(`створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)`);
class Clients {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;}
}

document.write(`<div> створити пустий масив, наповнити його 10 об'єктами Client </div>`)
let nClients = [];
nClients[0] = new Clients(1, 'Ім\'я 1 ','Призвіще 1 ','mail0@mail.com','111-111  ',['товар1, товар2, товар3']);
nClients[1] = new Clients(2, 'Ім\'я 2 ','Призвіще 2 ','U1@email.com', `11111111  `,['товар2,  товар2, товар3 товар10 товар2']);
nClients[2] = new Clients(3, 'Ім\'я 3 ','Призвіще 3 ','U2@email.com', `22-222-222`,['товар3,  товар2, товар3 товар2 товар3']);
nClients[3] = new Clients(4, 'Ім\'я 4 ','Призвіще 4 ','U3@email.com', `33-333-333`,['товар4,  товар2, товар3']);
nClients[4] = new Clients(5, 'Ім\'я 5 ','Призвіще 5 ','U4@email.com', `44-444-444`,['товар5,  товар2, товар3 товар2 товар3 товар2 товар3']);
nClients[5] = new Clients(6, 'Ім\'я 6 ','Призвіще 6 ','U5@email.com', `555-111-11`,['товар6,  товар2 ']);
nClients[6] = new Clients(7, 'Ім\'я 7 ','Призвіще 7 ','U6@email.com', `66511111  `,['товар7  товар2 товар3 товар7  товар2 товар3 товар7  товар2 товар3']);
nClients[7] = new Clients(8, 'Ім\'я 8 ','Призвіще 8 ','U7@email.com', `77-222-222`,['товар8  товар2 товар3']);
nClients[8] = new Clients(9, 'Ім\'я 9 ','Призвіще 9 ','U8@email.com', `88-333-333`,['товар9  товар2 товар3 товар3']);
nClients[9] = new Clients(10,'Ім\'я 10','Призвіще 10','U9@email.com', `99-444-444`,['товар10 товар2 товар3 товар10 товар2 товар10 товар2 товар10 товар2 товар2 товар3']);
console.log(nClients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
document.writeln(`Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)`);
//let hightOrder = nClients.sort(a => );
let hightOrder = nClients.sort((a, b) => (Object.keys(b.order).length) - (Object.keys(a.order).length));
console.log(Object.keys(nClients[8].order).length);