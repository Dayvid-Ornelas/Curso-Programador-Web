let car1 = prompt("Insira o nome do veículo: ")
let vel1 = prompt("Insira a velocidade do veículo: ")
let car2 = prompt("Insira o nome do segundo do veículo: ")
let vel2 = prompt("Insira a velocidade do segundo veículo: ")
 if(vel1 > vel2){
    alert(
        "\n A velocidade de " + car1 + " é maior" +
        "\n Velocidade: " + vel1
        )
 } else if(vel1 < vel2){
    alert(
        "\n A velocidade de " + car2 + " é maior" +
        "\n Velocidade: " + vel2
        )
 } else if( vel1 === vel2){
    alert(
        "\n A velocidade de " + car1+ " e " + car2 + " são iguais" +
        "\n Velocidade: " + vel1
        )
 }