// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Cars(model,produser,yearCar,maxSpeed,engineCar) {
    this.model = model;
    this.produser = produser;
    this.yearCar =yearCar;
    this.maxSpeed = maxSpeed;
    this.engineCar = engineCar;
    this.funDrive = function() {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    };
    this.funInfo = function() { //виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
        console.log(`Модель ${model} `);
        console.log(`Виробник ${produser} `);
        console.log(`Рік випуску ${yearCar} `);
        console.log(`Максимальна швидкість ${maxSpeed} `);
        console.log(`Об'єм двигуна ${engineCar} `);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        // підвищує значення максимальної швидкості на значення newSpeed
        this.maxSpeed = this.maxSpeed+newSpeed;

    };
    this.changeYear = function (newValue) {
        // змінює рік випуску на значення newValue
        this.yearCar = newValue;
    };
    this.addDriver = function (driver) {
        // приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
        return this.driver = driver;
    };
}
let newCars = new Cars('Ford Mustang', 'Ford', 2004,180,'3.8 л');
console.log(newCars);
newCars.funDrive();
newCars.funInfo();
newCars.increaseMaxSpeed(15);
newCars.changeYear(2005);
//newCars.driver=newCars.addDriver('Jon');
newCars.addDriver('Jon');
//newCars.driver='Jon';
console.log(newCars);
console.log(`Водій ${newCars.driver} `);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
class Cars2 {
    constructor(model,produser,yearCar,maxSpeed,engineCar) {
    }
}
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
