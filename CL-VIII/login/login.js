document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obter valores de entrada
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Limpar mensagens de erro anteriores
    clearErrors();

    // Verificar credenciais
    if (!validateCredentials(username, password)) {
      displayErrorMessage("Login ou senha inválidos");
    } else {
      // Redirecionar para a página "home/home.html"
      window.location.href = "../home/home.html";
    }
  });

document.getElementById("backButton").addEventListener("click", function () {
  window.history.back();
});

function clearErrors() {
  // Limpar mensagens de erro
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  usernameError.textContent = "";
  passwordError.textContent = "";
}

function displayErrorMessage(message) {
  // Exibir mensagem de erro
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  usernameError.textContent = message;
  passwordError.textContent = message;
  usernameError.style.display = "block";
  passwordError.style.display = "block";
}

function validateCredentials(username, password) {
  // Validar credenciais (simplificado para fins de exemplo)
  return username === "Classe8" && password === "Batata";
}
