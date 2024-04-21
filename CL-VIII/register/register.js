document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const productName = getValue("productName");
    const productLote = getValue("productLote");
    const productValidade = getValue("productValidade");
    const productFabricacao = getValue("productFabricacao");
    const productQuantidade = parseInt(getValue("productQuantidade"));
    const productLocal = getValue("productLocal");
    const productImage = document.getElementById("productImage").files[0];

    if (
      !productName ||
      !productLote ||
      !productValidade ||
      !productFabricacao ||
      isNaN(productQuantidade) ||
      !productLocal ||
      !productImage
    ) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      const imageData = event.target.result;
      const product = {
        name: productName,
        lote: productLote,
        validade: productValidade,
        fabricacao: productFabricacao,
        quantidade: productQuantidade,
        local: productLocal,
        image: imageData,
      };

      const products = JSON.parse(localStorage.getItem("products")) || [];
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));

      alert("Produto cadastrado com sucesso!");
      document.getElementById("productForm").reset();
    };
    reader.readAsDataURL(productImage);
  });

function getValue(elementId) {
  return document.getElementById(elementId).value.trim();
}
