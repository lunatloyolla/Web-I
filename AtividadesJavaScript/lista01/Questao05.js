// Questão 05

const prompt = require('prompt-sync')()

let palavra = prompt("Digite uma palavra: ")

let palavraInvertida = palavra.split('').reverse().join('')

if(palavraInvertida === palavra){
    console.log("A palavra é palíndromo")
}else{
    console.log("A palavra não é palindromo: ", palavraInvertida)
}