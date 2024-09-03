const prompt = require("prompt-sync")()

var n = prompt("digite um numero: ")
var n1 = 0
var n2 = 1
var n3 = 0

while(true){
    if(n3 >= n){
        break
    } else{
        n3 = n2 + n1
        n1 = n2
        n2 = n3
        console.log(n3 + " - ")

    }
}


   