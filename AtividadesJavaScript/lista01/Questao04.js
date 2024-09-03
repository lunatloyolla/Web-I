//Questao 4

const prompt = require('prompt-sync')()


let a = Number(prompt("digite o valor de a: "))
let b = Number(prompt("digite o valor de b: "))
let c = Number(prompt("digite o valor de c: "))

var delta = b**2 - 4*a*c

if( delta < 0) {
    console.log("delta não pode ser negativo. Tente outros valores para a, b e c")
} else{
    var x1 = Number((-1 * b + Math.sqrt(delta) / 2*a))

    var x2 = Number((-1 * b - Math.sqrt(delta) / 2*a))

    console.log("Os valores de X são: ", x1, "e", x2)
}

