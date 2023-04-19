function mostrarSenha() {
  var check = document.getElementById("passwordCad");
  if (check.type == "password") {
      check.type = "text"
  } else {
      check.type = "password"
  }
}

/*
const btnFormCad = document.querySelector("#sendCad");

btnFormCad.addEventListener("click", function (e){
    e.preventDefault();
  
    const nameCad = document.querySelector("#nameCad");
    const valuenomeCad = nameCad.value;
  
    const sNameCad = document.querySelector("#sNameCad");
    const valuesNameCad = sNameCad.value;
  
    const emailCad = document.querySelector("#emailCad");
    const valueemailCad = emailCad.value;
  
    const passwordCad = document.querySelector("#passwordCad");
    const valuepasswordCad = passwordCad.value;
  
  
    console.log(valuenomeCad);
    console.log(valuesNameCad);  
    console.log(valueemailCad);
    console.log(valuepasswordCad);   
  
  });
*/
