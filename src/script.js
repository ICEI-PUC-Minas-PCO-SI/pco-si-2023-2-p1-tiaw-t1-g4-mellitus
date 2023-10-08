window.onload = () => {
  carregarProdutos();
  carregarCategorias();
};

function carregarProdutos() {
  const productContainer = document.querySelector(".produtos-container");

  let produtos = "";

  fetch(`https://diwserver.vps.webdock.cloud/products`)
    .then((res) => res.json())
    .then((data) => {
      data.products.map((product) => {
        let produtoCard = `<div class="produto-card">
                                    <div class="image-container">
                                    <img src=${product.image} alt="" />
                                    </div>
                                    <div class="details">
                                    <h4>${product.title}</h4>
                                    <p>
                                       ${product.brandName} -  ${product.season} -  ${product.usage} -  ${product.gender} -  ${product.articleNumber} - ${product.baseColour} 
                                       - ${product.year} - ${product.articleType} - ${product.category}
                                    </p>
    
                                    <div>
                                        <span class="price">R$ ${product.price}</span>
                                        <span class="quantity"> (${product.rating.count}) </span>
                                        
                                        <button onclick="irParaDetalhes(${product.id})" class="details-button">ver</button>
                                    </div>
    
                                    
                                    </div>
                                </div>`;
        produtos += produtoCard;
      });

      productContainer.innerHTML = produtos;
    });
}

function carregarCategorias() {
  const caterioriasContainer = document.querySelector(
    ".main-header form select"
  );

  let categorias = "";

  fetch(`https://diwserver.vps.webdock.cloud/products/categories`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((categoria) => {
        let categoryOption = `<option value="${categoria}">${categoria}</option>`;
        categorias += categoryOption;
      });

      caterioriasContainer.innerHTML += categorias;
    });
}

function buscaProdutos(event) {
  event.preventDefault();

  const productContainer = document.querySelector(".produtos-container");
  const buscaInput = document.querySelector(".main-header form input");
  const categoriaSelect = document.querySelector(".main-header form select");

  if (categoriaSelect.value == "" && buscaInput.value == "") {
    alert("Busca invalida");
    carregarProdutos();
    return;
  }

  let produtos = "";

  if (categoriaSelect.value != "") {
    fetch(
      `https://diwserver.vps.webdock.cloud/products/category/${categoriaSelect.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        let buscaProdutos = data.products;

        if (buscaInput.value != "") {
          buscaProdutos = buscaProdutos.filter((produto) =>
            produto.title.toLowerCase().includes(buscaInput.value.toLowerCase())
          );
        }

        buscaProdutos.map((product) => {
          if (product) {
            let produtoCard = `<div class="produto-card">
            <div class="image-container">
            <img src=${product.image} alt="" />
            </div>
            <div class="details">
            <h4>${product.title}</h4>
            <p>
            ${product.brandName} -  ${product.season} -  ${product.usage} -  ${product.gender} -  ${product.articleNumber} - ${product.baseColour} 
            - ${product.year} - ${product.articleType} - ${product.category}
             </p>


            <div>
                <span class="price">R$ ${product.price}</span>
                <span class="quantity"> (${product.rating.count}) </span>
                <button onclick="irParaDetalhes(${product.id})" class="details-button">ver</button>
            </div>

            </div>
        </div>`;
            produtos += produtoCard;
          }
        });

        productContainer.innerHTML = produtos;
      });

    return;
  } else {
    fetch(
      `https://diwserver.vps.webdock.cloud/products/search?query=${buscaInput.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        data.map((product) => {
          if (product) {
            let produtoCard = `<div class="produto-card">
            <div class="image-container">
            <img src=${product.image} alt="" />
            </div>
            <div class="details">
            <h4>${product.title}</h4>
            <p>
            ${product.brandName} -  ${product.season} -  ${product.usage} -  ${product.gender} -  ${product.articleNumber} - ${product.baseColour} 
            - ${product.year} - ${product.articleType} - ${product.category}
             </p>

            <div>
                <span class="price">R$ ${product.price}</span>
                <span class="quantity"> (${product.rating.count}) </span>
                <button onclick="irParaDetalhes(${product.id})" class="details-button">ver</button>
            </div>

            </div>
        </div>`;
            produtos += produtoCard;
          }
        });

        productContainer.innerHTML = produtos;
      });
  }
}

function irParaDetalhes(id) {
  const productModal = document.getElementById("productModal");
  const body = document.querySelector(".modal-body");

  fetch(`https://diwserver.vps.webdock.cloud/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      let produtoCard = `<div class="produto-card">
                            <div class="image-container">
                            <img src=${product.image} alt="" />
                            </div>
                            <div class="details">
                            <h4>${product.title}</h4>
                            <p>
                            ${product.brandName} -  ${product.season} -  ${product.usage} -  ${product.gender} -  ${product.articleNumber} - ${product.baseColour} 
                            - ${product.year} - ${product.articleType} - ${product.category}
                             </p>
                            <p>
                                ${product.description}
                            </p>

                            <div>
                                <span class="price">R$ ${product.price}</span>
                                <span class="quantity"> (${product.rating.count}) </span>
                            </div>
                            </div>
                        </div>`;

      body.innerHTML = "";
      body.innerHTML = produtoCard;
    });

  var modal = new bootstrap.Modal(productModal);

  modal.show();
}

function removerItensDuplicados(array) {
  var uniqueIds = [];
  var uniqueArray = [];

  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    var itemId = item.id;

    if (!uniqueIds.includes(itemId)) {
      uniqueIds.push(itemId);
      uniqueArray.push(item);
    }
  }

  return uniqueArray;
}
