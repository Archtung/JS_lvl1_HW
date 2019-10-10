// Задание 1. С помощью while вывести простые числа.
console.log('Первое задание')
function simpleNumber (i) {
  if( i < 2 ) return false;
  let j = 2;
  while(j < i) {
    if(i % j === 0) {
      return false;
    }
    j++;
  }
  return true;
}

function getSimple(max) {
  let i = 0;
  let list = [];

  while (i < max) {
    if(simpleNumber(i)) list.push(i);
    i++;
  }
  console.log(list);
}

getSimple(100)
