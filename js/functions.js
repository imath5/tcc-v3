function signIn() {
    var login = document.getElementById('email').value
    var senha = document.getElementById('password').value

    if (login == "admin@gmail.com" && senha == "admin") {
        alert('Login feito com sucesso');
        location.href = "homepage.html"
    } else {
        alert('Usuário ou senha incorreto')
    }
}


function showPw() {
    var check = document.getElementById("password");
    if (check.type == "password") {
        check.type = "text"
    } else {
        check.type = "password"
    }
}

function signUp() {
    location.href = "cadastro.html"
}

function signedUp() {
    location.href = "index.html"
}

function b2LogIn() {
    location.href = "index.html"
}

function b2HomePage() {
    location.href = "homepage.html"
}

// SLIDER
$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000
 
  });