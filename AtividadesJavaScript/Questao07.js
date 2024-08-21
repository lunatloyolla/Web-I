// Questão 7

const prompt = require('prompt-sync')()

let frase = prompt("Digite uma frase: ")

let arrayFrase = frase.trim().split(" ")

console.log(arrayFrase.length - 1 )

