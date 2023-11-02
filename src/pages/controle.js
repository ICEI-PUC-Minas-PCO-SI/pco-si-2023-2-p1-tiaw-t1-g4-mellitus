function calculo() {
    
    let gliPre = parseFloat(document.getElementById('gliPre').value);
    let gliPos = parseFloat(document.getElementById('gliPos').value);
    let sensi = parseFloat(document.getElementById('sensi').value);

    let elemento = document.getElementById("correto");

    let resultado = ((gliPre - gliPos) / sensi);

    elemento.textContent = resultado + "u";
    
}