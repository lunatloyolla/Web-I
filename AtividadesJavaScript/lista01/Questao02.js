
// Questão 2

const prompt = require('prompt-sync')()

let raio = prompt("Digite o valor do raio: ")

var volume = (4/3) * Math.PI * raio**3

console.log("O volume da esfera é = ", volume)