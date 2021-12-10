// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
function writeLS1(n) {
    let name = document.forms[n].name.value;
    let age = document.forms[n].age.value;
    let user = {name: name, age: age};
    console.log(name, age, user);
    localStorage.setItem('users', JSON.stringify(user));
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
function writeLS2(n) {
    let model = document.forms[n].model.value;
    let type = document.forms[n].type.value;
    let volume = document.forms[n].volume.value;
    let carsArr = JSON.parse(localStorage.getItem('cars')) || [];
    carsArr.push({model,type,volume});
    console.log(model,type,volume,carsArr);
    localStorage.setItem('cars', JSON.stringify(carsArr));
}
