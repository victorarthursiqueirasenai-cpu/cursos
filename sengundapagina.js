document.addEventListener("DOMContentLoaded", () => {
    
    // Captura os elementos da tela
    const botoesFiltro = document.querySelectorAll("#menu-filtros button");
    const filtroCondicao = document.getElementById("filtro-condicao");
    const campoBusca = document.getElementById("campo-busca");
    const produtos = document.querySelectorAll(".card");

    // Função central que aplica os três filtros ao mesmo tempo
    function aplicarFiltros() {
        
        // 1. Pega os valores selecionados nos menus e na busca
        const botaoAtivo = document.querySelector("#menu-filtros button.ativo");
        const categoriaEscolhida = botaoAtivo ? botaoAtivo.getAttribute("data-filtro") : "todos";
        const condicaoEscolhida = filtroCondicao.value;
        const textoBusca = campoBusca.value.toLowerCase(); // Tudo minúsculo para facilitar a busca

        // 2. Passa por cada produto na tela verificando se ele passa no teste
        produtos.forEach(produto => {
            const categoriaProduto = produto.getAttribute("data-categoria");
            const condicaoProduto = produto.getAttribute("data-condicao");
            
            // Pega o título e a descrição para a barra de pesquisa
            const titulo = produto.querySelector("h3").innerText.toLowerCase();
            const descricao = produto.querySelector(".descricao").innerText.toLowerCase();

            // 3. Checa as três regras (Retorna verdadeiro ou falso)
            const passaCategoria = (categoriaEscolhida === "todos" || categoriaEscolhida === categoriaProduto);
            const passaCondicao = (condicaoEscolhida === "todos" || condicaoEscolhida === condicaoProduto);
            const passaBusca = (textoBusca === "" || titulo.includes(textoBusca) || descricao.includes(textoBusca));

            // 4. Se o produto passou em TODAS as regras, ele aparece. Se falhou em uma, esconde.
            if (passaCategoria && passaCondicao && passaBusca) {
                produto.classList.remove("escondido");
            } else {
                produto.classList.add("escondido");
            }
        });
    }

    // EVENTOS: Falam para o navegador quando ele deve rodar a função "aplicarFiltros"
    
    // Quando clicar em uma categoria...
    botoesFiltro.forEach(botao => {
        botao.addEventListener("click", () => {
            botoesFiltro.forEach(b => b.classList.remove("ativo"));
            botao.classList.add("ativo");
            aplicarFiltros();
        });
    });

    // Quando mudar o filtro de Novo/Usado/Defeito...
    filtroCondicao.addEventListener("change", aplicarFiltros);

    // Quando digitar qualquer letra na barra de busca...
    campoBusca.addEventListener("input", aplicarFiltros);
});