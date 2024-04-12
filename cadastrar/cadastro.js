document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const productLote = document.getElementById("productLote").value;
    const productValidade = document.getElementById("productValidade").value;
    const productFabricacao =
      document.getElementById("productFabricacao").value;
    const productQuantidade = parseInt(
      document.getElementById("productQuantidade").value
    );
    const productLocal = document.getElementById("productLocal").value;
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
