function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email && password){
    document.getElementById("msg").innerText =
      "Login Success 🚀 Welcome to Primento";
  } else {
    document.getElementById("msg").innerText =
      "Please enter details";
  }
}
