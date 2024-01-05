'use strict'

//2 - associar sons a Div
const sons = {
    'A':'boom.wav',
    'S':'clap.wav',
    'D':'hihat.wav',
    'G':'kick.wav',
    'H':'openhat.wav',
    'J':'snake.wav',
    'K':'tink.wav',
    'L':'tom.wav'
}

//1 - criar div
const criarDiv = (texto) => {
    const div = document.createElement('div')
    div.classList.add('key')
    div.textContent = texto 
    div.id = texto
    document.getElementById('container').appendChild(div)
}

//3 - exibir sons na tela
const exibir = (sons) => {
    //console.log(Object.keys(sons))
    Object.keys(sons).forEach(criarDiv)
}

//5 - tocar os sons
const tocarSom = (letra) =>{
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play()
}

//6 - ativar e desativar efeitos
const adicionarEfeito = (letra) => document.getElementById(letra).classList.add('active')

const removerEfeito = (letra) => {
    const div = document.getElementById(letra)
    const removerActive = () => div.classList.remove('active')
    div.addEventListener('transsitioend', removerActive)
}

//4 - criar eventos cliques
const ativarDiv = (evento) =>{
    console.log(evento.target.id)
    let letra = ''
    if(evento.type == 'click'){
        letra = evento.target.id
    } else {
        letra = evento.key.toUpperCase()
    }
    const letraPermitida = sons.hasOwnProperty(letra) //valida se a letra existe na lista
    if(letraPermitida){
        adicionarEfeito(letra)
        tocarSom(letra)
        removerEfeito(letra)
    }
}

//atribuir ações
exibir(sons)

document.getElementById('container').addEventListener('click', ativarDiv)
window.addEventListener('keydown', ativarDiv)