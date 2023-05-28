 function login() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Verificar usuário e senha
      if (username === "MClove" && password === "0000") {
        window.location.href = "galeria.html"; // Redirecionar para a página galeria.html
      } else {
        alert("Usuário ou senha inválidos. Por favor, tente novamente.");
      }
    }

    function voltar() {
      window.location.href = "index.html"; // Redirecionar para a página index.html
    }