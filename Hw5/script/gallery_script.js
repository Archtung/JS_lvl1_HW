let mainImg = document.querySelector('#main')
    let roulette = document.querySelector('#gallery')

    function gallery() {
        let number = 16
        let nodeStr = ''

        for (let i = 1; i <= number; i++) {
            nodeStr += `<img src="img/${i}.jpg">`
        }
        roulette.innerHTML = nodeStr
    }

    gallery()