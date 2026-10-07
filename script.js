// let produtos = ["Caneca", "Agenda", "Garrafa", "Caderno"];

// let lista = document.querySelector("#lista");

// produtos.forEach(function(produto) {
//     lista.innerHTML += `<li>${produto}</li>`
// });

let produtos = [
    {
        nome: "Caneca",
        preco: 30,
        categoria: "Casa",
        imagem: "https://cdn.colab55.com/images/55001/studio/74183/art/140597/mugs.png"

    },
    {
        nome: "Agenda",
        preco: 45,
        categoria: "Papelaria",
        imagem: "https://kidverte.vteximg.com.br/arquivos/ids/211247-490-490/107867%204.png?v=638971810082800000"
    },
    {
        nome: "Garrafa",
        preco: 50,
        categoria: "Casa",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPy2bozjDmM3EzEnxAWAFaDKlwQajP4_5-_B2-AlY3ljXjROMhTm6nVU&s=10"
    },
    {
        nome: "Caderno",
        preco: 25,
        categoria: "Papelaria",
        imagem: "https://down-br.img.susercontent.com/file/br-11134201-7r98o-lzdzvxoi24yda1"
    },
];

let areaProdutos = document.querySelector("#produtos");

    produtos.forEach(function(produto) {

        areaProdutos.innerHTML += `
            <div class="card">
        
                <img src="${produto.imagem}" alt="${produto.nome}">

                <h2>${produto.nome}</h2>

                <p class="preco">
                    R$ ${produto.preco.toFixed(2)}
                </p>

                <button onclick="adicionarCarrinho('${produto.nome}')">
                    Adicionar ao carrinho
                </button>

            
            </div>
        `;
    });

function mostrarProdutos(lista) {
    //limpar os produtos que estavam aparecendo
    areaProdutos.innerHTML = "";

    // verifica se a lista está vazia
    if (lista.length === 0) {

        areaProdutos.innerHTML = `
        <p> Nenhum produto encontrado.</p>
        `;

        return;
    }
}
busca.addEventListener("input", function() {

    //pega o texto digitado
    let texto = busca.value.toLowerCase();

    //filtra os produtos
    let encontrados = produtos.filter(function(produto){

        return produto.nome
            .toLowerCase()
            .includes(texto);
    });

    //Mostrar apenas os produtos encontrados
    mostrarProdutos(encontrados);

});

// Recupera o carrinho salvo
let carrinho = 
    JSON.parse(localStorage.getItem("carrinho")) || [];

// Pegando os elementos do carrinho no HTML
let areaCarrinho = document.querySelector("#carrinho");
let totalCarrinho = document.querySelector("#total");


// Função para adicionar um produto ao carrinho
function adicionarCarrinho(nomeProduto) {

    // Procura o produto que foi clicado
    let produtoEscolhido = produtos.find(function(produto) {
        return produto.nome === nomeProduto;
    });

    // Adiciona o produto ao array carrinho
    carrinho.push(produtoEscolhido);

    // Atualiza o carrinho na tela
    mostrarCarrinho();
}

function mostrarCarrinho (){

    // Limpa o carrinho antes de mostrar novamente
    areaCarrinho.innerHTML = "";

    // Variável que vai guardar a soma dos produtos
    let total = 0;


    // Percorre todos os produtos adicionados  ao carrinho
    carrinho.forEach(function(item) {

        // Mostra cada produto no carrinho
        areaCarrinho.innerHTML +=`
            <div class="item-carrinho">

                <span>${item.nome}</span>

                <span>
                    R$ ${item.preco.toFixed(2)}
                </span>
            </div>
        `;

        // Soma o preço do produto total
        total = total + item.preco;

        
    });

    // Mostra o valor total do carrinho
    totalCarrinho.innerText =
        "Total: R$ " + total.toFixed(2);
}