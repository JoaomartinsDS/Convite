const seletor = document.getElementById('selector');
const frase = document.getElementById('frase');
const fraseOriginal = frase.innerText;

seletor.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('sim-ativo');
        frase.innerText = "AEEEEE gatos dançantes!";
    } else {
        document.body.classList.remove('sim-ativo');
        frase.innerText = fraseOriginal;
    }
});