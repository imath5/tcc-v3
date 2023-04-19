//SLIDER 

$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000
 
  });

  function irApp() {
    location.href = "app.html"
}

function irDuvidas() {
    location.href = "duvidas.html"
}


  const btnDoubts = document.querySelector("#btnDoubts");
  btnDoubts.addEventListener ("click", irDuvidas);

  const btnApp = document.querySelector("#btnApp");
  btnApp.addEventListener ("click", irApp);

  
  