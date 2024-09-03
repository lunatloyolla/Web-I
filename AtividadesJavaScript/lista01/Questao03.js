// questao 3

const prompt = require('prompt-sync')()

let a = prompt("Valor do lado a: ")
let b = prompt("Valor do lado b: ")
let c = prompt("Valor do lado c: ")

var perimetro = a + b + c
var h  = b*c / a
var area = (b * h) / 2

console.log("Perimetro:", perimetro)
console.log("Area:", area)