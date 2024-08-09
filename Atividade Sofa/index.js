
var i = true
function girar() {
    if(i == true){
        document.getElementById("sofá").src = "assets/Sofá.gif";
        i = false;
    }else {
        document.getElementById("sofá").src = "assets/sofaX";
        i = true;
    }
}
document.getElementById("BotaoImagem").addEventListener("click",girar);
