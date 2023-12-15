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

let CurrentPage = 0;

function LoadMeals() {
    let HTMLtable = document.getElementById('MealsTable');
    strTextHTML = '';
    let secao = [];

    if (CurrentPage < alimentos.length) {
        secao = alimentos[CurrentPage];
    }
    strTextHTML += `
        <div class="row rowsec">
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

    if (CurrentPage < alimentos.length) {
        for (let j = 0; j < secao.foods.length; j++) {
            let alimento = secao.foods[j];

            strTextHTML += `
            <tr class="list-item">
                <td>${alimento.name}</td>
                <td>${alimento.measure}</td>
                <td class="text-center">${alimento.amount}</td>
                <td class="text-center">${alimento.carbs}</td>
                <td class="text-center">${alimento.calories}</td>
            </tr>
            `
        }
    }
    strTextHTML += `</table></div>`

    HTMLtable.innerHTML = strTextHTML;
}

function createSearchTable(filteredRows) {
    let HTMLtable = document.getElementById('MealsTable');
    let strTextHTML = `
    <style>
        #Pages{
            display: none;
        }
    </style>
    `

    strTextHTML += `
    <div class="row">
            <table class="table table-striped table-hover">
                <tr>
                    <th><b>Alimento</b></th>
                    <th><b>Medida Usual</b></th>
                    <th class="text-center"><b>g ou mL</b></th>
                    <th class="text-center"><b>CHO (g)</b></th>
                    <th class="text-center"><b>kcal</b></th>
                </tr>
    `;

    for (let i = 0; i < filteredRows.length; i++) {
        let alimento = filteredRows[i];

        strTextHTML += `
        <tr class="list-item">
            <td>${alimento.name}</td>
            <td>${alimento.measure}</td>
            <td class="text-center">${alimento.amount}</td>
            <td class="text-center">${alimento.carbs}</td>
            <td class="text-center">${alimento.calories}</td>
        </tr>
        `;
    }

    HTMLtable.innerHTML = strTextHTML;
}

function search() {
    let input = document.getElementById('searchbar').value.toLowerCase();

    if (input.trim() === '') {
        LoadMealsJSONServer(LoadMeals);
        return;
    }

    let filteredRows = [];

    for (let i = 0; i < alimentos.length; i++) {
        let secao = alimentos[i];

        for (let j = 0; j < secao.foods.length; j++) {
            let alimento = secao.foods[j];
            let cellText = alimento.name.toLowerCase();

            if (cellText.includes(input)) {
                filteredRows.push(alimento);
            }
        }
    }

    createSearchTable(filteredRows);
}

function LoadPagination() {
    let HTMLtable = document.getElementById('Pages');
    let strTextHTML = '';

    strTextHTML += `
        <div>
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#Pages" aria-label="Previous" onclick="ChangePage(-1)">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
    `;

    let startPage = Math.max(0, CurrentPage - 2);
    let endPage = Math.min(alimentos.length - 1, startPage + 4);

    for (let i = startPage; i <= endPage; i++) {
        strTextHTML += `
            <li class="page-item ${i === CurrentPage ? 'active' : ''}" aria-current="page">
                <a class="page-link" href="#Pages" onclick="ChangePage(${i})">${i + 1}</a>
            </li>
        `;
    }

    strTextHTML += `
                <li class="page-item">
                    <a class="page-link" href="#Pages" aria-label="Next" onclick="ChangePage(-2)">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </div>
    `;

    HTMLtable.innerHTML = strTextHTML;

    let pageLinks = HTMLtable.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento padrão de navegação do link
            let pageIndex = parseInt(this.getAttribute('data-page-index'));
            ChangePage(pageIndex);
        });
    });
}

function ChangePage(change) {

    if (CurrentPage >= 0 && CurrentPage < alimentos.length && change == -1) {
        CurrentPage -= 1;
        if (CurrentPage === -1) {
            CurrentPage = alimentos.length - 1;
        }
    } else if (CurrentPage < alimentos.length && change == -2) {
        CurrentPage += 1;
        if(CurrentPage === alimentos.length){
            CurrentPage = 0;
        }
    } else if (change >= 0 && change < alimentos.length) {
        CurrentPage = change;
    } else {
        console.log("ERRO");
    }

    LoadMeals(); // Adicionado para atualizar a tabela quando a página é alterada
    LoadPagination(); // Adicionado para atualizar a paginação
}

LoadMealsJSONServer(() => {
    LoadMeals();
    LoadPagination();
});