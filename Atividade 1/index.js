let n = 0;

function somar() {
    n++;
    document.getElementById('n').textContent = n;
}

function subtrair() {
    if (n <= 0) {
        n = 0
    } else {
        n--;
        document.getElementById('n').textContent = n;
    }
}