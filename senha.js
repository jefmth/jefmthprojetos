function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar usuário e senha
    if (username === "mclove" && password === "4zero") {
        // Salvar o nome de usuário no armazenamento local
        localStorage.setItem("username", username);
        
        window.location.href = "galeria.html"; // Redirecionar para a página galeria.html
    } else {
        alert("Usuário ou senha inválidos. Por favor, tente novamente.");
    }
}

function voltar() {
    window.location.href = "index.html"; // Redirecionar para a página index.html
}

// Carregar o nome de usuário salvo anteriormente, se existir
window.onload = function() {
    var savedUsername = localStorage.getItem("username");
    if (savedUsername !== null) {
        document.getElementById("username").value = savedUsername;
    }
}
