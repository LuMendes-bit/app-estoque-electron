var botaoEntrar = document.getElementById("submit")
function login(){
    var campoEmail = document.getElementById("email").value
    var campoSenha = document.getElementById("password").value
    if( campoEmail == "lucas@admin.com" && campoSenha == "admin123" ) {
        window.location.replace("dashboard.html")
    } else{
        alert("Email ou senha incorretos")
    }
}
botaoEntrar.addEventListener("click",login)