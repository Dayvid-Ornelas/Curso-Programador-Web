const imoveis = {}
let opcao = ""

do{
    opcao = prompt(
        "Bem vindo(a) ao cadastro de imóveis \nTotal de imóveis: " + imoveis.length +
        "\nEscolha uma opção: \n1.Novo Imóvel \n2.Listar imóveis \n3.Sair"
    )
    switch(opcao){
        case "1":
            const imovel =
            imovel.proprietario = prompt("Informe o nome do proprietario do imóvel: ")
            imovel.quarto = parseFloat(prompt("Quantos quartos possuí o imóvel: "))
            imovel.banheiro = parseFloat(prompt("QUantos banheiros possuí o imóvel: "))
            imovel.garagem = prompt("O imóvel possuí garagem? (Sim/Não)")
    }
}while (opcao !== "3")