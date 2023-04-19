function verificarLogin() {
    var login = document.getElementById('emailIndex').value
    var senha = document.getElementById('passwordIndex').value

    if (login == "admin@gmail.com" && senha == "admin") {
        alert('Login feito com sucesso');
        location.href = "homepage.html"
    } else {
        alert('Usuário ou senha incorreto')
    }
}

const btnLIn = document.querySelector("#sendIndex");
btnLIn.addEventListener ("click", verificarLogin);


function irCadastro() {
    location.href = "cadastro.html"
}

const btnC = document.querySelector("#btnCad");
btnC.addEventListener ("click", irCadastro);