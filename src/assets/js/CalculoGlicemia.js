let resultado1800 = 0;
let resultado = 0;

function calculo1800() {
    let glilenta = parseFloat(document.getElementById('glilenta').value);
    let glirapida = parseFloat(document.getElementById('glirapida').value);

    let elemento = document.getElementById("correto1800");

    resultado1800 = (1800 / (glilenta + glirapida));

    elemento.textContent = (isNaN(resultado1800)) ? "Favor informar os dados corretamente." : "Sua glicemia abaixa " + resultado1800.toFixed(2) + " mg/dL pela ação de 1 UI aproximadamente";
}

function calculo() {
    let gliPre = parseFloat(document.getElementById('gliPre').value);
    let gliPos = parseFloat(document.getElementById('gliPos').value);

    calculo1800();

    // Obtém o valor de resultado1800 atualizado após chamar calculo1800()
    let sensi = parseFloat(resultado1800);

    let elemento = document.getElementById("correto");

    resultado = ((gliPre - gliPos) / sensi);

    elemento.textContent = (isNaN(resultado)) ? "Favor informar os dados corretamente." : resultado.toFixed(2) + " UI";
}

function calculo2() {
    calculo();
    let Carb = parseFloat(document.getElementById('Carb').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let Relacao = 0;

    if (peso >= 108) {
        Relacao = 6;
    } else if (peso >= 99) {
        Relacao = 7;
    } else if (peso >= 90) {
        Relacao = 8;
    } else if (peso >= 85.5) {
        Relacao = 9;
    } else if (peso >= 81) {
        Relacao = 10;
    } else if (peso >= 76.5) {
        Relacao = 11;
    } else if (peso >= 67.5) {
        Relacao = 12;
    } else if (peso >= 63) {
        Relacao = 13;
    } else if (peso >= 58.5) {
        Relacao = 14;
    } else if (peso >= 49.5) {
        Relacao = 15;
    } else if (peso >= 45) {
        Relacao = 16;
    }

    let elemento = document.getElementById("correto2");

    let resultado2 = ((Carb / Relacao) + resultado);

    elemento.textContent = (isNaN(resultado2)) ? "Favor informar os dados corretamente." : resultado2.toFixed(2) + " UI";
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