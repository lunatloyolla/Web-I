// Escreva um programa que solicite ao usuário um número N e exiba todos os números
//primos menores que N.

const prompt = require("prompt-sync")()

let n = prompt("digite um numero: ")

for (i=0; i<n; i++){
    if((i / 1 === i) && (i / i === 1)){
        console.log(i)
    }
}