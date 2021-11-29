// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
document.writeln(`<div>Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone створити пустий масив, наповнити його 10 об'єктами new User(....) </div>`)
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