let alternativa = ""

do{
    alternativa = prompt(
        "Escolha uma opção: " +
        "\n1. Nada" +
        "\n2. Nada" +
        "\n3. Nada" +
        "\n4. Nada" +
        "\n5. Sair"

    )

    switch(alternativa){
        case "1":
            alert("Você escolheu a opção 1.")
            break
        case "2":
            alert("Você escolheu a opção 2.")
            break
        case "3":
            alert("Você escolheu a opção 3.")
            break
        case "4":
            alert("Você escolheu a opção 4.")
            break
        case "5":
            alert("Saindo... ")
            break
        default:
            alert("Opção inválida")
    }

}while(alternativa !== "5")
