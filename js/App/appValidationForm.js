/*let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function (evento) {
//previnir o comportamento padrão -> evento.preventDefault()
evento.preventDefault()

let temErro = false
let inputNome = document.forms ['formCadastro']['nome']

if(!inputNome.value) {
    temErro = true;
    inputNome.classList.add ('inputError')

    let small = inputNome.nextSibling.nextSibling
    small.innerText = "Digite seu nome corretamente"
} else {
    inputNome.classList.remove ('inputError')

    let small = inputNome.nextSibling.nextSibling
    small.innerText = ""
}

let inputRga = document.forms ['formCadastro']['rga']

if(!inputRga.value) {
    temErro = true;
    inputRga.classList.add ('inputError')

    let small = inputRga.nextSibling.nextSibling
    small.innerText = "Digite o rga corretamente"
} else {
    inputRga.classList.remove ('inputError')

    let small = inputRga.nextSibling.nextSibling
    small.innerText = ""
}
 
let inputEmail = document.forms ['formCadastro']['email']

if(!inputEmail.value) {
    temErro = true;
    inputEmail.classList.add ('inputError')

    let small = inputEmail.nextSibling.nextSibling
    small.innerText = "Digite o e-mail corretamente"
} else {
    inputEmail.classList.remove ('inputError')

    let small = inputEmail.nextSibling.nextSibling
    small.innerText = ""
}

let inputCur = document.forms ['formCadastro']['curso']

if(!inputCur.value) {
    temErro = true;
    inputCur.classList.add ('inputError')

    let small = inputCur.nextSibling.nextSibling
    small.innerText = "Selecione o curso corretamente"
} else {
    inputCur.classList.remove ('inputError')

    let small = inputCur.nextSibling.nextSibling
    small.innerText = ""
}


let inputTele = document.forms ['formCadastro']['tele']

if(!inputTele.value) {
    temErro = true;
    inputTele.classList.add ('inputError')

    let small = inputTele.nextSibling.nextSibling
    small.innerText = "Digite o telefone corretamente"
} else {
    inputTele.classList.remove ('inputError')

    let small = inputTele.nextSibling.nextSibling
    small.innerText = ""
}

let inputTipo = document.forms ['formCadastro']['tipo']

if(!inputTipo.value) {
    temErro = true;
    inputTipo.classList.add ('inputError')

    let small = inputTipo.nextSibling.nextSibling
    small.innerText = "Selecione o tipo da atividade corretamente"
} else {
    inputTipo.classList.remove ('inputError')

    let small = inputTipo.nextSibling.nextSibling
    small.innerText = ""
}

let inputArq = document.forms ['formCadastro']['arq']

if(!inputArq.value) {
    temErro = true;
    inputArq.classList.add ('inputError')

    let small = inputArq.nextSibling.nextSibling
    small.innerText = "Anexe o seu certificado corretamente"
} else {
    inputArq.classList.remove ('inputError')

    let small = inputArq.nextSibling.nextSibling
    small.innerText = ""
}

let inputHras = document.forms ['formCadastro']['hrasD']

if(!inputHras.value) {
    temErro = true;
    inputHras.classList.add ('inputError')

    let small = inputHras.nextSibling.nextSibling
    small.innerText = "Digite a quantidade de horas que consta no documento anexado"
} else {
    inputHras.classList.remove ('inputError')

    let small = inputHras.nextSibling.nextSibling
    small.innerText = ""
}


if (!temErro){
    formulario.submit()
}

}*/