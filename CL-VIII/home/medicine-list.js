// Array contendo informações sobre os medicamentos
var medicamentos = [
  {
    nome: "Amoxicilina",
    lotes: ["Lote A"],
    imagem: "/img/paracetamol.png",
    descricao: "Este é o medicamento Amoxicilina do Lote A.",
    categoria: "pharmaco",
  },
  {
    nome: "Amoxicilina",
    lotes: ["Lote B"],
    imagem: "/img/paracetamol.png",
    descricao: "Este é o medicamento Amoxicilina do Lote B.",
    categoria: "pharmaco",
  },
  {
    nome: "Amoxicilina",
    lotes: ["Lote C"],
    imagem: "/img/paracetamol.png",
    descricao: "Este é o medicamento Amoxicilina do Lote C.",
    categoria: "pharmaco",
  },
  // Adicione mais objetos conforme necessário
];

// Função para criar os elementos HTML dos medicamentos e adicioná-los ao documento
function criarCardsDeMedicamentos() {
  var listaDeMedicamentos = document.querySelector(".medicines-list");

  // Limpa a lista de medicamentos antes de adicionar os novos
  listaDeMedicamentos.innerHTML = "";

  // Percorre o array de medicamentos e cria os elementos HTML dinamicamente
  medicamentos.forEach(function (medicamento) {
    medicamento.lotes.forEach(function (lote) {
      // Cria os elementos HTML
      var li = document.createElement("li");
      li.className = "medicine-item";
      li.setAttribute("data-category", medicamento.categoria);

      var a = document.createElement("a");
      a.href = "#";
      a.className = "medicine-link";

      var img = document.createElement("img");
      img.src = medicamento.imagem;
      img.alt = medicamento.nome;
      img.className = "medicine-img";

      var h3 = document.createElement("h3");
      h3.className = "medicine-name";
      h3.textContent = `${medicamento.nome} - ${lote}`;

      var pDescricao = document.createElement("p");
      pDescricao.textContent = medicamento.descricao;

      // Adiciona os elementos criados à estrutura HTML
      a.appendChild(img);
      a.appendChild(h3);
      a.appendChild(pDescricao);
      li.appendChild(a);
      listaDeMedicamentos.appendChild(li);
    });
  });
}

// Função para filtrar os medicamentos com base na categoria selecionada
function filtrarMedicamentosPorCategoria(categoria) {
  var listaDeMedicamentos = document.querySelector(".medicines-list");
  var medicamentoItems = listaDeMedicamentos.querySelectorAll(".medicine-item");

  // Oculta todos os medicamentos
  medicamentoItems.forEach(function (item) {
    item.style.display = "none";
  });

  // Mostra apenas os medicamentos da categoria selecionada
  if (categoria === "all") {
    // Se a categoria selecionada for "Todos", mostra todos os medicamentos
    medicamentoItems.forEach(function (item) {
      item.style.display = "block";
    });
  } else {
    // Caso contrário, mostra apenas os medicamentos da categoria selecionada
    var medicamentosFiltrados = document.querySelectorAll(
      '.medicine-item[data-category="' + categoria + '"]'
    );
    medicamentosFiltrados.forEach(function (item) {
      item.style.display = "block";
    });
  }
}

// Chama a função para criar os cards de medicamentos quando a página é carregada
document.addEventListener("DOMContentLoaded", function () {
  criarCardsDeMedicamentos();

  // Adiciona um evento de clique aos itens do menu suspenso de seleção
  document
    .getElementById("selection")
    .addEventListener("change", function (event) {
      var categoriaSelecionada = event.target.value;
      filtrarMedicamentosPorCategoria(categoriaSelecionada);
    });
});
