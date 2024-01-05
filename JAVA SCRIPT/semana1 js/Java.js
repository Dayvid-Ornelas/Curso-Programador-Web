const nome = prompt('Insira seu nome recruta: ')
const sobrenome = prompt('Insira seu sobrenome: ')
const trabalho = prompt('Insira sua área de atuação: ')
const anoNascimento = prompt('Insira seu ano de nascimento: ')
idade = (2022 - anoNascimento)

alert(
    'Recruta cadastrado com sucesso!\n' +

    '\n Nome Completo: ' + nome + ' ' + sobrenome +
    '\n Área de atuação: ' + trabalho +
    '\n Sua idade é: ' + idade
)