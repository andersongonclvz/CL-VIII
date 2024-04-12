document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obter valores de entrada
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar credenciais (simplificado para fins de exemplo)
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    if (username !== "Classe8" || password !== "Batata") {
      usernameError.textContent = "Login ou senha inválidos";
      passwordError.textContent = "Login ou senha inválidos";
      usernameError.style.display = "block";
      passwordError.style.display = "block";
    } else {
      // Redirecionar para a página "home/home.html"
      window.location.href = "../home/home.html";
    }
  });

document.getElementById("backButton").addEventListener("click", function () {
  window.history.back();
});
