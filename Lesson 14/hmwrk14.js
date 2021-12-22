//зробити від 6 до 9 кроків розпорядок дня - встати почистіті зуби поїсти
//зробити через колбеки проміс авейт
const money = 1000;
let btnCallback  = document.getElementById('btn1');
let btnCallback2 = document.getElementById('btn2');
let btnCallback3 = document.getElementById('btn3');
let btnCallback4 = document.getElementById('btn4');

const pidyom = new Day(); // функції підйом
const gigiena = new Day(); // функції гігієна
const eat = new Day(); // функції їжа
const way = new Day(); // функції дорога
const work = new Day(); // функції робота
const beer = new Day(); // функції пиво
const sleep = new Day(); // функції сон

btnCallback.onclick = function () {step1(null);
    console.log('This is the start Callback');
    console.log('Callback виявився геть не страшним');
    function step1(error) {if (error) { console.log('Error step 1')}
        else {pidyom.cB2(money, `1. Підйом`, 50, 1500,() =>step2)} }
    function step2(error) {if (error) { console.log('Error step 2')}
        else {gigiena.cB2(money, `2. Гігієна`, 100, 100,() =>step3)} }
    function step3(error) {if (error) { console.log('Error step 3')}
        else {eat.cB2(money, `3. їжа`, 250, 150,() => step4)} }
    function step4(error) {if (error) { console.log('Error step 4')}
        else {way.cB2(money, `4. дорога вперед`, 7, 1500,() =>step5)} }
    function step5(error) {if (error) { console.log('Error step 5')}
        else {way.cB2(money, `5. робота`, -1000, 4000,() =>step6)} }
    function step6(error) {if (error) { console.log('Error step 6')}
        else {console.log('Step 6')} }
}



// btnCallback.onclick = function () {
//     console.log('This is the start Callback');
//     step1(null);
//     function step1(error) {
//         if (error) { console.log('Error step 1')}
//         else {cb(money, `1. Підйом`, 50, 1500,() =>step2)} }
//     function step2(error) {
//         if (error) { console.log('Error step 2')}
//         else {cb(money, `2. Гігієна`, 100, 100,() =>step3)} }
//     function step3(error) {
//         if (error) { console.log('Error step 3')}
//         else {cb(money, `3. їжа`, 250, 150,() => step4} }
//     function step4(error) {
//         if (error) { console.log('Error step 4')}
//         else {cb(money, `3. їжа`, 250, 150,() => step5} }
//
//     // {cb(money, `4. дорога вперед`, 7, 1500,() =>
//     // {cb(money, `5. робота`, -1000, 6000, () =>
//     // {cb(money, `6. пиво`, 100, 2000,() =>
//     // {cb(money, `7. дорога`, 7, 1300,() =>
//     // {cb(money, `8. сон`, 0, 4000,() =>
//     // {cb(money, `End`, 0, 0, () => console.log('callback'));});});});});});});});});
// };


btnCallback2.onclick = function (resolve, reject) {
    console.log('This is the start Promice');
    cb2(money, `1. Підйом`, 50, 1500)
        .then(() => cb2(money, `2. Гігієна`, 100, 100))
        .then(() => cb2(money, `3. їжа`, 250, 150))
        .then(() => cb2(money, `4. дорога вперед`, 7, 1500))
        .then(() => cb2(money, `5. робота`, -1000, 4000))
        .then(() => cb2(money, `6. пиво`, 100, 1000))
        .then(() => cb2(money, `7. дорога`, 7, 1300))
        .then(() => cb2(money, `8. сон`, 0, 3000))
        .catch(error => {
            alert('error');
        });
};

btnCallback3.onclick = function () {
    console.log('This is the start Await');
    funAway()
    async function funAway() { try {
        await cb2(money, `1. Підйом`, 50, 500);
        await cb2(money, `2. Гігієна`, 100, 100);
        await cb2(money, `3. їжа`, 250, 150);
        await cb2(money, `4. дорога вперед`, 7, 1500);
        await cb2(money, `5. робота`, -1000, 4000);
        await cb2(money, `6. пиво`, 100, 1000);
        await cb2(money, `7. дорога`, 7, 1300);
        await cb2(money, `8. сон`, 0, 3000);
        await console.log(`This is the end Await ${money}`);
    } catch (e) {
        console.error(e);
    }}
}
btnCallback4.onclick = function () {
    console.log('Тестовий приклад без синхронізації');
    pidyom.cB(money, `1. Підйом`, 50, 1500);
    gigiena.cB(money, `2. Гігієна`, 100, 100);
    eat.cB(money, `3. їжа`, 250, 150);
    way.cB(money, `4. дорога вперед`, 7, 1500);
    work.cB(money, `5. робота`, -1000, 4000);
    beer.cB(money, `6. пиво`, 100, 1000);
    way.cB(money, `7. дорога`, 7, 1300);
    sleep.cB(money, `8. сон`, 0, 3000);
}

    function cb(money, message, kredit, timeout, callback) {
        setTimeout(() => {
            money -= kredit;
            callback();
            console.log(`${message} ${money} Time:${timeout}`);
            return money;
        }, timeout);
    }

    function cb2(money, message, kredit, timeout) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                money -= kredit;
                resolve(money);
                console.log(`${message} ${money} Timeout:${timeout}`);
                return money;
            }, timeout)
        });
    }

// Создаём функцию, принимающую два аргумента, и возвращающую их сумму


function Day(money, message, kredit, timeout) {
    this.cB = function(money, message, kredit, timeout) {
        setTimeout(() => {
            //resolve(money);
            console.log(`${message} ${money} Timeout:${timeout}`);
            return money -= kredit;
        }, timeout)};
    this.cB2 = function(money, message, kredit, timeout, callback){
        setTimeout(() => {
            callback();
            console.log(`${message} ${money} Time:${timeout}`);
            return money -= kredit;;
        }, timeout);
    }
}
