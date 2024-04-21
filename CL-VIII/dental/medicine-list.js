document.addEventListener("DOMContentLoaded", function () {
  // Array contendo informações sobre os produtos odontológicos
  var produtosOdontologicos = [
    {
      nome: "Amoxicilina",
      lotes: ["Lote A"],
      imagem: "/img/paracetamol.png",
      descricao: "Este é o medicamento Amoxicilina do Lote A.",
      categoria: "dental",
    },
    {
      nome: "Amoxicilina",
      lotes: ["Lote B"],
      imagem: "/img/paracetamol.png",
      descricao: "Este é o medicamento Amoxicilina do Lote B.",
      categoria: "dental",
    },
    {
      nome: "Amoxicilina",
      lotes: ["Lote C"],
      imagem: "/img/paracetamol.png",
      descricao: "Este é o medicamento Amoxicilina do Lote C.",
      categoria: "dental",
    },
    // Adicione mais produtos conforme necessário
  ];

  // Função para criar os elementos HTML dos produtos odontológicos e adicioná-los ao documento
  function criarCardsDeProdutosOdontologicos() {
    var listaDeProdutos = document.querySelector(".medicines-list");

    // Limpa a lista de produtos antes de adicionar os novos
    listaDeProdutos.innerHTML = "";

    // Percorre o array de produtos odontológicos e cria os elementos HTML dinamicamente
    produtosOdontologicos.forEach(function (produto) {
      produto.lotes.forEach(function (lote) {
        // Cria os elementos HTML
        var li = document.createElement("li");
        li.className = "medicine-item";

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

  // Chama a função para criar os cards de produtos odontológicos quando a página é carregada
  criarCardsDeProdutosOdontologicos();
});
