document.addEventListener("DOMContentLoaded", function () {
  // Array contendo informações sobre os produtos farmacológicos
  var produtosFarmacologicos = [
    {
      nome: "Amoxicilina",
      imagem: "/img/amoxicilina.png",
      descricao: "Antibiótico para tratar de infecções bacterianas.",
      categoria: "pharmaco",
      paginaHTML: "/pharmaco/medicine-tab/amoxicilina/amoxicilina.html", // URL da página específica
    },
    {
      nome: "Adenosina",
      imagem: "/img/adenosina.png",
      descricao: "Remédio antiarrítmico cardíaco.",
      categoria: "pharmaco",
      paginaHTML: "/pharmaco/medicine-tab/adenosina/adenosina.html", // URL da página específica
    },
    {
      nome: "Seringas descartáveis",
      imagem: "/img/paracetamol.png",
      descricao: "Descrição das seringas descartáveis.",
      categoria: "pharmaco",
      paginaHTML: "/caminho/para/pagina/seringas_descartaveis.html", // URL da página específica
    },
    // Adicione mais objetos conforme necessário
  ];

  // Função para lidar com o clique nos links dos cards e redirecionar para outra página
  function redirecionarParaPagina(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Obtém a URL da página específica a partir do atributo data-href
    var paginaDestino = event.currentTarget.dataset.href;

    // Redireciona o navegador para a página de destino
    window.location.href = paginaDestino;
  }

  // Obtém todos os links dos cards
  var linksCards = document.querySelectorAll(".medicine-link");

  // Adiciona um evento de clique a cada link dos cards
  linksCards.forEach(function (link) {
    link.addEventListener("click", redirecionarParaPagina);
  });

  // Função para criar os elementos HTML dos produtos farmacológicos e adicioná-los ao documento
  function criarCardsDeProdutosFarmacologicos() {
    var listaDeProdutos = document.querySelector(".medicines-list");

    // Limpa a lista de produtos antes de adicionar os novos
    listaDeProdutos.innerHTML = "";

    // Percorre o array de produtos e cria os elementos HTML dinamicamente
    produtosFarmacologicos.forEach(function (produto) {
      // Cria os elementos HTML
      var li = document.createElement("li");
      li.className = "medicine-item";
      li.setAttribute("data-category", produto.categoria);

      var a = document.createElement("a");
      a.href = produto.paginaHTML; // Define a URL da página específica
      a.className = "medicine-link";
      a.setAttribute("data-href", produto.paginaHTML); // Adiciona o atributo data-href com a URL da página específica

      var img = document.createElement("img");
      img.src = produto.imagem;
      img.alt = produto.nome;
      img.className = "medicine-img";

      var h3 = document.createElement("h3");
      h3.className = "medicine-name";
      h3.textContent = produto.nome;

      var pDescricao = document.createElement("p");
      pDescricao.textContent = produto.descricao;

      // Adiciona os elementos criados à estrutura HTML
      a.appendChild(img);
      a.appendChild(h3);
      a.appendChild(pDescricao);
      li.appendChild(a);
      listaDeProdutos.appendChild(li);
    });
  }

  // Chama a função para criar os cards de produtos farmacológicos quando a página é carregada
  criarCardsDeProdutosFarmacologicos();
});
