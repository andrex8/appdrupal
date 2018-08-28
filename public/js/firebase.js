//funcion para registrar un nuevo usuario
function registrar(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
}

//Acceso a usuarios que ya existen
function ingresar() {
  var email2 = document.getElementById('email').value;
  var password2 = document.getElementById('password').value;
}
