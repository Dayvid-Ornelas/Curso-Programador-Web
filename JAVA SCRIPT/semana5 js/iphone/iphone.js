function imgChange(evento){
    document.querySelector('#phone').src = evento;
}

function circleChange(color){
    const circle = document.querySelector('.circle')
    circle.style.background = color;
}