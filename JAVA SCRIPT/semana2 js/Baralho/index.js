let baralho = []
let opcao = ""

do{
    opcao = prompt(
        "Numero de cartas:\n" + baralho.length + 
        "\nEscolha uma opção:\n1 - Nova carta\n2 - Retirar carta\n3 - Sair"
    )

    switch (opcao) {
        case "1":
            const novaCarta = prompt("Qual o é a carta:")
            baralho.push(novaCarta)
            break
        case "2":
            const cartaRetirada = baralho.pop()
            if (!cartaRetirada) {
                alert("Não há cartas no baralho!")
            } else {
                alert("Você puxou um(a) " + cartaRetirada)
            }
            break
        case "3": 
        alert("Encerrando...")
            break
        default:
            alert("Opção inválida")
    }
}while (opcao !== "3") 