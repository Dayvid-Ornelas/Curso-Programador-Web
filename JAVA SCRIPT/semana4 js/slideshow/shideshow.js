'use strict'

const images = [
    {'id': '1', 'url': './img/chrono.jpg'},
    {'id': '2', 'url': './img/inuyasha.jpg'},
    {'id': '3', 'url': './img/ippo.png'},
    {'id': '4', 'url': './img/tenchi.jpg'},
    {'id': '5', 'url': './img/tenjhotenge.jpg'},
    {'id': '6', 'url': './img/yuyuhakusho.jpg'},
]

const containerItens = document.getElementById('container-itens')

const loadImages = (images, container) => {
    images.forEach(images => {
        container.innerHTML += `
            <div class = item>
                <img src = "${images.url}" 
            </div>
            `
    });
}

loadImages(images, containerItens)

let itens = document.querySelectorAll('.item')

const previous = () => {
    containerItens.appendChild(itens[0])
    itens = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = itens[itens.length -1]
    containerItens.insertBefore(lastItem, itens[0])
    itens = document.querySelectorAll('.item')
}

document.getElementById('previous').addEventListener('click', next)
document.getElementById('next').addEventListener('click', previous)