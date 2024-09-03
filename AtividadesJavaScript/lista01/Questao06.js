// Questão 6

const prompt = require('prompt-sync')()

let palavra1 = prompt("Digite uma palavra: ")
let palavra2 = prompt("Digite outra palavra: ")

let anagrama1 = palavra1.split("").sort().join("")
let anagrama2 = palavra2.split("").sort().join("")

if(anagrama1 === anagrama2){
    console.log("as palavras ", palavra1, "e", palavra2, "são anagramas")
}else{
    console.log("as palavras ", palavra1, "e", palavra2, "não são anagramas")
}

