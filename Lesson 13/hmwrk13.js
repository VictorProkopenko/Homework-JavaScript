// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсторадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар



let item = [
    {
        itemId: 1,
        itemName: `iPhone 11 Spase Grey 32Gb`,
        itemCost: 500,
        itemNumber: 10,
        itemPhoto: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-purple-select-2019_GEO_EMEA?wid=470&hei=556&fmt=png-alpha&.v=1567021766320'
    },
    {
        itemId: 2,
        itemName: `iPhone 12 wiolet 32Gb`,
        itemCost: 600,
        itemNumber: 3,
        itemPhoto: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1617130317000'
    },
    {
        itemId: 3,
        itemName: `iPhone 13 Gold 64Gb`,
        itemCost: 1000,
        itemNumber: 1,
        itemPhoto: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1629842667000'
    },

];
let table1 = document.getElementsByClassName('item');

for (let itemElement of item) {
    let itemTitle = document.createElement('h3');
    itemTitle.innerHTML=itemElement.itemName+'<br />';
    let itemPrice = document.createElement('div');
    itemPrice.innerText = itemElement.itemCost+' USD ';
    let itemImg = document.createElement('img');
    itemImg.src=itemElement.itemPhoto;
    let addItem = document.createElement('button');
    addItem.innerText = 'Добавити в кошик';
    table1.append(itemTitle, itemImg, itemPrice, addItem);
}
let listitem = document.createElement('div');
listitem.innerHTML = `<a href='list.html'> На сторінку товарів - в кошик</a>`;
let checkout = document.createElement('button');
checkout.innerText = `Оформити замовлення`;
document.body.append(table1,listitem,checkout);

// Get LocalStorage
function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}
// record in LocalStorage
function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}
