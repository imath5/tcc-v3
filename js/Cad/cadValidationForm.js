/*let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function (evento) {
//previnir o comportamento padrão -> evento.preventDefault()
evento.preventDefault()

let temErro = false
let inputNome = document.forms ['formCadastro']['nome']

if(!inputNome.value) {
    temErro = true;
    inputNome.classList.add ('inputError')

    let span = inputNome.nextSibling.nextSibling
    span.innerText = "Digite o nome corretamente"
} else {
    inputNome.classList.remove ('inputError')

    let span = inputNome.nextSibling.nextSibling
    span.innerText = ""
}

let inputSNome = document.forms ['formCadastro']['sNome']

if(!inputSNome.value) {
    temErro = true;
    inputSNome.classList.add ('inputError')

    let span = inputSNome.nextSibling.nextSibling
    span.innerText = "Digite o sobrenome corretamente"
} else {
    inputSNome.classList.remove ('inputError')

    let span = inputSNome.nextSibling.nextSibling
    span.innerText = ""
}
 
let inputEmail = document.forms ['formCadastro']['email']

if(!inputEmail.value) {
    temErro = true;
    inputEmail.classList.add ('inputError')

    let span = inputEmail.nextSibling.nextSibling
    span.innerText = "Digite o e-mail corretamente"
} else {
    inputEmail.classList.remove ('inputError')

    let span = inputEmail.nextSibling.nextSibling
    span.innerText = ""
}

let inputSenha = document.forms ['formCadastro']['senha']

if(!inputSenha.value) {
    temErro = true;
    inputSenha.classList.add ('inputError')

    let span = inputSenha.nextSibling.nextSibling
    span.innerText = "Digite a senha corretamente"
} else {
    inputSenha.classList.remove ('inputError')

    let span = inputSenha.nextSibling.nextSibling
    span.innerText = ""
}

if (!temErro){
    formulario.submit()
}

}*/