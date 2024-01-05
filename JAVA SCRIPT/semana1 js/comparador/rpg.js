const player1 = prompt("Insira o nome do jogador 1:")
const dano = prompt("Qual é seu nível de poder de ataque? ")

const player2 = prompt("Insira o nome do personagem 2: ")
let hp = prompt("Insira o hp desse personagem: ")
const defesa = prompt("Insira o nível de defesa do personagem: ")
const escudo = prompt("O personagem possuí escudo? (Sim/Não)")

let danoSofrido = 0

if(dano > defesa && escudo === "não"){
    danoSofrido = dano - defesa
} else if(dano > defesa && escudo === "sim"){
    danoSofrido = (dano - dano) /2
}

hp = (hp - danoSofrido)

alert(player1 + " causou " + danoSofrido + " pontos de dano em " + player2)
alert(
    player1 + "\nPoder de ataque: " + dano + "\n\n"+
    player2 + "\nPoder de vida: " + hp + 
    "\nPoder de defesa: " + defesa + "\nPossuí escudo: " + escudo
)