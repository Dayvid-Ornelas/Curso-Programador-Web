let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial: "))
let opcao = ""

do{
    opcao = prompt(
        "Saldo disponivel :" + saldo +
        "\n1. Adicionar dinheiro" + 
        "\n2. Remover dinheuro" + 
        "\n3. Sair"
    )  
    
    switch(opcao){
        case "1":
            saldo += parseFloat(prompt("Informe o valor a ser adicionado: "))
            break
        case "2":
            saldo -= parseFloat(prompt("Informe o valor a ser removido:"))
            break
        case "3":
            alert("Saindo... ")
            break
        default:
            alert("Opção inválida")
    }

}while(opcao !== "3")