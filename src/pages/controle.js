function calculo() {
    
    let gliPre = parseFloat(document.getElementById('gliPre').value);
    let gliPos = parseFloat(document.getElementById('gliPos').value);
    let sensi = parseFloat(document.getElementById('sensi').value);

    let elemento = document.getElementById("correto");

    let resultado = ((gliPre - gliPos) / sensi);

    elemento.textContent = (isNaN(resultado)) ? "Favor informar os dados corretamente." : resultado + "u";
    
}
function calculo2() {
    
    let Carb = parseFloat(document.getElementById('Carb').value);
    let Res = parseFloat(document.getElementById('Res').value);
    let Relacao = parseFloat(document.getElementById('Relacao').value);

    let elemento = document.getElementById("correto2");

    let resultado2 = ((Carb/Relacao) + Res);

    elemento.textContent = (isNaN(resultado2)) ? "Favor informar os dados corretamente." : resultado2 + "u";
    
}

