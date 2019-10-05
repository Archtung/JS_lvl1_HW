/*Задание 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).*/


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'plus':
            return plus(arg1, arg2);
        case 'minus':
            return minus(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
        case 'mult':
            return mult(arg1, arg2);
            default:
      return 'Вы можете использовать следующие операции:mult,plus,minus,div';
    }
}
console.log("---------------Задание 6----------------")
// console.log(mathOperation());
console.log("Умножение:",mathOperation(5, 2, 'mult'));
console.log("Сложение:",mathOperation(5, 2, 'plus'));
console.log("Вычитание:",mathOperation(5, 1, 'minus'));
console.log("Деление:",mathOperation(5, 1, 'div'));