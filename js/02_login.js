document.getElementById("loginForm").addEventListener("submit", function(event){
  event.preventDefault()
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  localStorage.setItem("username", username);
  if(username === "mclove" && password === "4zero"){
    window.location.href = "./galeria.html";
  } else {
    alert("Usuário ou senha Inválido")
  }
});

window.onload = function() {
  const savedUsername = localStorage.getItem("username");
  if(savedUsername) {
    document.getElementById("username").value = savedUsername;
  }
}