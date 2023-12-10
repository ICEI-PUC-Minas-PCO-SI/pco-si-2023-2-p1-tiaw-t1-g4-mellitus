const url_articles = 'https://api-mellitus-server.vercel.app/article';
let articles = [];

function LoadArticlesJSONServer(func) {
    fetch(url_articles)
        .then(response => response.json())
        .then(dataArticles => {
            articles = dataArticles;
            func();
            console.log('Dados carregados!');
        });
}

function LoadArticleDefault() {
    let HTMLtext = document.getElementById('Content');

    strTextHTML = `
    <div class="container-fluid">
        <div class="row">
            <h1 class="col m-4 px-3">${articles[0].subject}</h1>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row row-cols-md-4 row-cols-sm-2 pb-4">
    `;

    for (let i = 0; i < articles[0].content.length; i++) {
        let article = articles[0].content[i];

        strTextHTML += `
        <div class="m-0 p-3">
            <div class="card rounded-4" id="efeito">
                <div class="card-body rounded-4">
                    <h5 class="card-title">${article.subtitle}</h5>
                    <p class="card-text mb-5">${article.preview}</p>
                    <a href="#collapseAll${i}" class="position-absolute bottom-0 start-50 translate-middle-x">
                        <p class="btn p-2 text-center text-light rounded-3"
                            style="width: 150px; background-color: #4c8bf5;" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseAll${i}" aria-expanded="false"
                            aria-controls="collapseAll${i}">
                            <strong>Saiba Mais</strong>
                        </p>
                    </a>
                </div>
            </div>
        </div>
        `;
    }

    strTextHTML += `</div>`;

    for (let i = 0; i < articles[0].content.length; i++) {
        let article = articles[0].content[i];

        strTextHTML += `
        <div class="collapse pb-4 px-3 m-2" id="collapseAll${i}">
        <h4>${article.subtitle}</h4>
        ${article.text}
        </div>
        `;
    }

    strTextHTML += `</div>`;

    HTMLtext.innerHTML = strTextHTML;
}

LoadArticlesJSONServer(LoadArticleDefault);