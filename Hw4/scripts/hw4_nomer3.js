// 1 - камень
// 2 - ножницы
// 3 - бумага
// Задание 3. Камень,ножницы,бумага
console.log('----------Задание 3----------')
let choices = ['камень','ножницы','бумага']
let PC = choices[Math.floor(Math.random() * choices.length)]
let me = prompt('Выберите:камень,ножницы,бумага')



if ((me === 'камень' && PC === 'ножницы') || (me === 'ножницы' && PC === 'бумага') || (me === 'бумага' && PC === 'камень')) {
    console.log('Вы победили \n Вы ' + me + ' а компьютер ' + PC)
} else if (me === PC) {
    console.log('НИЧЬЯ')
} else {
    console.log('YOU LOOSE\n Вы ' + me + ' а компьютер ' + PC)
}
console.log('Компьютер выбрал',PC)
console.log('Вы выбрали',me)