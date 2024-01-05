let arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//Adicionar elementos
//Push
arr.push("Boromir")
console.log(arr)

//Unshift
arr.unshift("Galadriel")
console.log(arr)

//Remover elementos
//Pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//Shitf
let primeiroElemento = arr.shift()
console.log(arr)
console.log(primeiroElemento)

//Pesquisar por um elemento
//Includes
let inclui = arr.includes("Gandalf")
console.log(inclui)

//Indexof
let indice = arr.indexOf("Frodo")
console.log(indice)

//Cortar e concatenar
//Slice
let hobbits = arr.slice(0, 4)
let outros = arr.slice(-4)
console.log(hobbits)
console.log(hobbits)

//Concat
let sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//Substituição de elementos
//Splice
let elementoRemovido = sociedade.splice(indice, 1, "Gandalf o Cinzento")
console.log(sociedade)
console.log(elementoRemovido)

//Interar sobre os Elementos
for(let indice = 0; indice < sociedade.length; indice++){
    let elemento = sociedade[indice]
    console.log(elemento + "se encontra na posição " + indice)
}