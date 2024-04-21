document.addEventListener("DOMContentLoaded", function () {
  // Array contendo informações sobre os produtos farmacológicos
  var produtosFarmacologicos = [
    {
      nome: "Luvas de procedimento",
      lotes: ["Lote A"],
      imagem: "/img/paracetamol.png",
      descricao: "Descrição das luvas de procedimento.",
      categoria: "pharmaco",
    },
    {
      nome: "Máscaras cirúrgicas",
      lotes: ["Lote B"],
      imagem: "/img/paracetamol.png",
      descricao: "Descrição das máscaras cirúrgicas.",
      categoria: "pharmaco",
    },
    {
      nome: "Seringas descartáveis",
      lotes: ["Lote C"],
      imagem: "/img/paracetamol.png",
      descricao: "Descrição das seringas descartáveis.",
      categoria: "pharmaco",
    },
    // Adicione mais objetos conforme necessário
  ];

  // Função para criar os elementos HTML dos produtos farmacológicos e adicioná-los ao documento
  function criarCardsDeProdutosFarmacologicos() {
    var listaDeProdutos = document.querySelector(".medicines-list");

    // Limpa a lista de produtos antes de adicionar os novos
    listaDeProdutos.innerHTML = "";

    // Percorre o array de produtos e cria os elementos HTML dinamicamente
    produtosFarmacologicos.forEach(function (produto) {
      produto.lotes.forEach(function (lote) {
        // Cria os elementos HTML
        var li = document.createElement("li");
        li.className = "medicine-item";
        li.setAttribute("data-category", produto.categoria);

        var a = document.createElement("a");
        a.href = "#";
        a.className = "medicine-link";

        var img = document.createElement("img");
        img.src = produto.imagem;
        img.alt = produto.nome;
        img.className = "medicine-img";

        var h3 = document.createElement("h3");
        h3.className = "medicine-name";
        h3.textContent = `${produto.nome} - ${lote}`;

        var pDescricao = document.createElement("p");
        pDescricao.textContent = produto.descricao;

        // Adiciona os elementos criados à estrutura HTML
        a.appendChild(img);
        a.appendChild(h3);
        a.appendChild(pDescricao);
        li.appendChild(a);
        listaDeProdutos.appendChild(li);
      });
    });
  }

  // Chama a função para criar os cards de produtos farmacológicos quando a página é carregada
  criarCardsDeProdutosFarmacologicos();
});
