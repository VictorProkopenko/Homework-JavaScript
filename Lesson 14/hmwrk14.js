//зробити від 6 до 9 кроків розпорядок дня - встати почистіті зуби поїсти
//зробити через колбеки проміс авейт
let money = 1000;
console.log('This is the start');



// cb(money, `1. Підйом`, 50, 1500,() =>
// {cb(money, `2. Гігієна`, 100, 100,() =>
// {cb(money, `3. їжа`, 250, 150,() =>
// {cb(money, `4. дорога вперед`, 7, 1500,() =>
// {cb(money, `5. робота`, -1000, 6000, () =>
// {cb(money, `6. пиво`, 100, 2000,() =>
// {cb(money, `7. дорога взад`, 7, 1300,() =>
// {cb(money, `8. сон`, 0, 4000,() => {console.log(`This is the end ${money}`);});});});});});});});});

cb3(1500, () => cb2(500));
cb(money, `message`, 50, 1500, () => cb2(500));

function cb(money, message, kredit, timeout, callback) {
    setTimeout(()=>{console.log(`${message} ${money}`)}, timeout);
    money -= kredit;
    callback();
    return money;
};

function cb2(timeout) {
    setTimeout(()=>{console.log(`  cb 2 `)}, timeout);
};

function cb3(timeout, callback) {
    setTimeout(()=>{console.log(` cb3 ${money}`)}, timeout);
    callback();
};