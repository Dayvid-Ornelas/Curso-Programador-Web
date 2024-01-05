const images = document.getElementById('container')
const image = document.querySelectorAll('#container img')

let idx = 0;

function carrossel(){
    idx++

    if(idx > image.length -1){
        idx = 0
    }

    images.style.transform = `translateX(${-idx * 700}px)`
}

setInterval(carrossel, 1500)

