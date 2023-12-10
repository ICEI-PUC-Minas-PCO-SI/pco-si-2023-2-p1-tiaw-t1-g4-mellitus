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

    let resultado2 = ((Carb / Relacao) + Res);

    elemento.textContent = (isNaN(resultado2)) ? "Favor informar os dados corretamente." : resultado2 + "u";

}

const url_meal = 'https://api-mellitus-server.vercel.app/meals'
let alimentos = []
function LoadMealsJSONServer(func) {
    fetch(url_meal).then(response => response.json())
        .then(dadosAlimentos => {
            alimentos = dadosAlimentos;

            func();
            console.log(`Dados carregados!`);
        });
}

function LoadMeals() {
    let HTMLtable = document.getElementById('MealsTable');
    strTextHTML = '';

    for (let i = 0; i < alimentos.length; i++) {
        let secao = alimentos[i];

        strTextHTML += `
        <div class="row">
            <div class="col text-center Meal_col">
                <label class="Title">${secao.section}</label>
            </div>
        </div>
        <div class="row">
            <table class="table table-striped table-hover">
                <tr>
                    <th><b>Alimento</b></th>
                    <th><b>Medida Usual</b></th>
                    <th class="text-center"><b>g ou mL</b></th>
                    <th class="text-center"><b>CHO (g)</b></th>
                    <th class="text-center"><b>kcal</b></th>
                </tr>
        `

        for (let j = 0; j < secao.foods.length; j++) {
            let alimento = secao.foods[j];

            strTextHTML += `
            <tr>
                <td>${alimento.name}</td>
                <td>${alimento.measure}</td>
                <td class="text-center">${alimento.amount}</td>
                <td class="text-center">${alimento.carbs}</td>
                <td class="text-center">${alimento.calories}</td>
            </tr>
            `
        }

        strTextHTML += `</table></div>`
    }
    HTMLtable.innerHTML = strTextHTML;
}
LoadMealsJSONServer(LoadMeals)


function search() {
    let input = document.getElementById('searchbar').value.toLowerCase();

    let rows = document.querySelectorAll('#MealsTable table tr');

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].querySelectorAll('td, th');

        let rowMatchesSearch = false;

        for (let j = 0; j < cells.length; j++) {
            let cellText = cells[j].textContent.toLowerCase();

            if (cellText.includes(input)) {
                rowMatchesSearch = true;
                break;
            }
        }

        rows[i].style.display = rowMatchesSearch ? "table-row" : "none";
    }
}


