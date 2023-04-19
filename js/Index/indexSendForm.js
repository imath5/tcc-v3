function mostrarSenha() {
  var check = document.getElementById("passwordIndex");
  if (check.type == "password") {
      check.type = "text"
  } else {
      check.type = "password"
  }
}

/*const btnFormIndex = document.querySelector("#sendIndex");

btnFormIndex.addEventListener("click", function (e){
    e.preventDefault();
  
    const emailIndex = document.querySelector("#emailIndex");
    const valueEmailIndex = emailIndex.value;
  
    const passwordIndex = document.querySelector("#passwordIndex");
    const valuePasswordIndex = passwordIndex.value;
  
  
    console.log(valueEmailIndex);
    console.log(valuePasswordIndex);    
  
  });*/