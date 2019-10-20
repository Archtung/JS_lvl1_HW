let mainImg = document.querySelector('#main')
let roulette = document.querySelector('#roulette')
let gall = document.querySelector('#gallery')
let cur = 1

function gallery() {
    let number = 8
    let nodeStr = ''

    for (let i = 1; i <= number; i++) {
        nodeStr += `<img src="img/${i}.jpg">`
    }
    roulette.innerHTML = nodeStr
}
gallery()

function clicker(evt) {
    if (evt.target.parentElement.id === 'roulette') {
        mainImg.src = evt.target.src
    } else if (evt.target.dataset.dir) {
        if (cur === 1 && evt.target.dataset.dir === '-1') cur = 9
        if (cur === 8 && evt.target.dataset.dir === '1') cur = 0

        mainImg.src = `img/${cur += +evt.target.dataset.dir}.jpg`
    }
}

gall.addEventListener('click', clicker)