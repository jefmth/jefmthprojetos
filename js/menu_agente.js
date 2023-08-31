function showPasswordPrompt() {
    var passwordPrompt = document.getElementById('password-prompt');
    passwordPrompt.style.display = 'block';
}

function hidePasswordPrompt() {
    var passwordPrompt = document.getElementById('password-prompt');
    passwordPrompt.style.display = 'none';
}

async function checkPassword() {
    var passwordInput = document.getElementById('password-input');
    const response = await fetch('https://sheetdb.io/api/v1/njvbx89551yf3');
    const data = await response.json();
    let found = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i].password === passwordInput.value) {
            found = true;
            break;
        }
    }
    if (found) {
        hidePasswordPrompt();
        window.location.href = "agentes_reciclagem.html";
    } else {
        showIncorrectPasswordAlert();
    }
}

function showIncorrectPasswordAlert() {
    var incorrectPasswordAlert = document.getElementById('incorrect-password-alert');
    incorrectPasswordAlert.style.display = 'block';
}

function hideIncorrectPasswordAlert() {
    var incorrectPasswordAlert = document.getElementById('incorrect-password-alert');
    incorrectPasswordAlert.style.display = 'none';
}
