/*let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function (evento) {
//previnir o comportamento padrão -> evento.preventDefault()
evento.preventDefault()

let temErro = false
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

}
*/