let mainImg = document.querySelector('#main')
let roulette = document.querySelector('#roulette')
let gall = document.querySelector('#gallery')
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
// function gallery() {
//     let number = 8
//     let nodeStr = ''

//     for (let i = 1; i <= number; i++) {
//         nodeStr += `<img src="img/${i}.jpg">`
//     }
//     roulette.innerHTML = nodeStr
// }
// gallery()

for (var j = 1; j <= 8; j++) {
        var newImage = document.createElement('img');
        newImage.setAttribute('src', 'img/' + j + '.jpg');
        roulette.appendChild(newImage);
        newImage.onclick = function(e) {
            var imgSrc = e.target.getAttribute('src');
            displayImage(imgSrc);
        }
    }

    function displayImage(imgSrc) {
        mainImg.setAttribute('src', imgSrc);
    }
next.onclick = function () {
    
}
// gall.addEventListener('click', clicker)