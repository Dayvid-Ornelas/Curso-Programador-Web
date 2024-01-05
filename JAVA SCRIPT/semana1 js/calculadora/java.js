const numb1 = prompt("Digite um número: ")
const numb2 = prompt("Digite outro número: ")

const x = parseFloat(numb1)
const y = parseFloat(numb2)

const soma = x + y
const subtração = x - y
const mutiplicação = x * y
const divisão = x / y

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtração +
    "\nMutiplicação: " + mutiplicação +
    "\nDivisão: " + divisão
)