// Задание номер 1. Написать функцию, преобразующую число в объект.
console.log('----------Задание 1----------')
function createObject(num) {
    num = +prompt("Введите число от 0 до 999");
    let divide = {
        "сотен": null,
        "десятков": null,
        "единиц": null
    };
    if (num <= 9) {
        divide["единиц"] = num;
    } else if (num <= 999) {
        divide["сотен"] = Math.floor(num / 100 % 10);
        divide["десятков"] = Math.floor(num / 10 % 10);
        divide["единиц"] = Math.floor(num % 10);
    } else {
        num = 0;
        console.log('Вы ввели значение не из диапазона 0 - 999');
    }
    console.log(divide);
}

createObject();