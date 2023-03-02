let contador = () => {
    let n = document.querySelectorAll('input[type=checkbox]:checked').length;

    if (n == document.querySelectorAll('input[type=checkbox]').length) {
        document.getElementById('text').innerHTML = 'TODOS';
    }
    else {
        document.getElementById('text').innerHTML = n;
    }
}
contador();
document.getElementById('acelera-cash').onclick = () => {
    contador();
}

document.getElementById('acelera-programas').onclick = () => {
    contador();
}

document.getElementById('sabia-capital').onclick = () => {
    contador();
}

document.getElementById('sabia-fidc').onclick = () => {
    contador();
}