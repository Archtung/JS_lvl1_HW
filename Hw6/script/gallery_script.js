let mainImg = document.querySelector ('#main')
        let roulette = document.querySelector ('#roulette')
        let gall = document.querySelector ('#gallery')

        function gallery () {
            let number = 8
            let nodeStr = ''

            for (let i = 1; i <= number; i++) {
                nodeStr += `<img src="img/${i}.jpg">`
            }
            roulette.innerHTML = nodeStr
        } 
        gallery ()
        
        function clicker (e) {
            if (e.target.parentElement.id === 'roulette') {
                mainImg.src = e.target.src
            } 
        }
        
        gall.addEventListener ('click', clicker)
