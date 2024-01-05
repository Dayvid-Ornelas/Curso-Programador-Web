function addPersonag(){
    const orige = document.getElementById('orige').value
    const name = document.getElementById('name').value
    const head = document.getElementById('head').value

    const adicionar = confirm("Adicionar " + name + " mesmo sendo um(a) " + orige + "?")

    if(adicionar){
        const equipList = document.getElementById('equipList')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + head
        playerItem.innerText = name + " (" + head + ") " + orige
        equipList.appendChild(playerItem)

        document.getElementById('orige').value = ''
        document.getElementById('name').value = ''
        document.getElementById('head').value = ''
    }

}

function removePersonag(){
    const head = document.getElementById('headToRemove').value
    const playerToRemove = document.getElementById('player-' + head)

    const confirmation = confirm('Remover o jogador' + playerToRemove + ' ?')

    if(confirmation){
        document.getElementById('equipList').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }
}