//зробити від 6 до 9 кроків розпорядок дня - встати почистіті зуби поїсти
//зробити через колбеки проміс авейт
const money = 1000;
let btnCallback = document.getElementById('btn1');
let btnCallback2 = document.getElementById('btn2');
let btnCallback3 = document.getElementById('btn3');
btnCallback.onclick = function () {
    console.log('This is the start Callback');
    cb(money, `1. Підйом`, 50, 1500,() =>
    {cb(money, `2. Гігієна`, 100, 100,() =>
    {cb(money, `3. їжа`, 250, 150,() =>
    {cb(money, `4. дорога вперед`, 7, 1500,() =>
    {cb(money, `5. робота`, -1000, 6000, () =>
    {cb(money, `6. пиво`, 100, 2000,() =>
    {cb(money, `7. дорога взад`, 7, 1300,() =>
    {cb(money, `8. сон`, 0, 4000,() => {console.log(``);});});});});});});});});
};
btnCallback2.onclick = function () {
    console.log('This is the start Promice');
    cb2(money, `1. Підйом`, 50, 1500)
        .then(() => cb2(money, `2. Гігієна`, 100, 100))
        .then(() => cb2(money, `3. їжа`, 250, 150))
        .then(() => cb2(money, `4. дорога вперед`, 7, 1500))
        .then(() => cb2(money, `5. робота`, -1000, 4000))
        .then(() => cb2(money, `6. пиво`, 100, 1000))
        .then(() => cb2(money, `7. дорога взад`, 7, 1300))
        .then(() => cb2(money, `8. сон`, 0, 3000))
        .then(() => console.log(`This is the end Promice ${money}`));
};
btnCallback3.onclick = function () {
    console.log('This is the start Await');
    funAway()
    async function funAway() {
        await cb2(money, `1. Підйом`, 50, 500);
        await cb2(money, `2. Гігієна`, 100, 100);
        await cb2(money, `3. їжа`, 250, 150);
        await cb2(money, `4. дорога вперед`, 7, 1500);
        await cb2(money, `5. робота`, -1000, 4000);
        await cb2(money, `6. пиво`, 100, 1000);
        await cb2(money, `7. дорога взад`, 7, 1300);
        await cb2(money, `8. сон`, 0, 3000);
        await console.log(`This is the end Await ${money}`);
    }

};


function cb(money, message, kredit, timeout, callback) {
    setTimeout(()=>
        {
        money -= kredit;
        callback();
        console.log(`${message} ${money} Time:${timeout}`);
        return money;
        }, timeout);
}
function cb2(money, message, kredit, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            money -= kredit;
            resolve(money);
            console.log(`${message} ${money} Time:${timeout}`);
            return money;
        }, timeout)
    });
}
