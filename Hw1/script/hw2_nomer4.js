// Задание 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
console.log("---------------Задание 4----------------")
let q = +prompt("Введите число в промежутке от 0 - 15");

switch (q) {
    case 0:
        console.log(q++);

    case 1:
        console.log(q++);

    case 2:
        console.log(q++);

    case 3:
        console.log(q++);

    case 4:
        console.log(q++);

    case 5:
        console.log(q++);

    case 6:
        console.log(q++);

    case 7:
        console.log(q++);

    case 8:
        console.log(q++);

    case 9:
        console.log(q++);

    case 10:
        console.log(q++);

    case 11:
        console.log(q++);

    case 12:
        console.log(q++);

    case 13:
        console.log(q++);

    case 14:
        console.log(q++);

    case 15:
        console.log(q);
        break;

    default:
        console.log('q должно быть от 0 до 15');
        break;
}