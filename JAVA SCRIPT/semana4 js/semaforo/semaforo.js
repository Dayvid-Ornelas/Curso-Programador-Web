const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervaIld = null

const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]()
}

const nexIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[colorIndex]
    turnOn[color]()
    nexIndex()
}

const stopAutomatic = () => {
    clearInterval(intervaIld)
}

const turnOn = {
    'red':         () => img.src = './img/vermelho.png',
    'yellow':      () => img.src = './img/amarelo.png',
    'green':       () => img.src = './img/verde.png',
    'automatic':   () => intervaIld = setInterval(changeColor, 740)
}

buttons.addEventListener('click', trafficLight)

