function reciclagem() {
				document.getElementById("senhaDiv").style.display = "block";
			}

			function verificarSenha() {
				var senha = document.getElementById("senha").value;
				if (senha == "mclove") {
					window.location.href='agentes_reciclagem.html';
				} else {
					document.getElementById("alertaDiv").style.display = "block";
				}
			}

			function fecharDiv(divId) {
				document.getElementById(divId).style.display = "none";
			}