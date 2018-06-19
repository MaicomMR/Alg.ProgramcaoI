function sugerirEmail() {
    var aluno = document.getElementById("inAluno").value;
    var outResposta = document.getElementById("outResposta");


    if (aluno == "" || aluno.indexOf("") == -1) {
        alert("Informe o nome completo do aluno")
        aluno.focus();
        return;
    }

    var partes = aluno.split(" ");
    var email = "";
    
    for (i = 0; i < partes.length - 1; i++) {
        email = email + partes[i].charAt(0);
        
    }
    email = email + partes[partes.length-1];


    outResposta.textContent = "Sugestão de E-mail: " + email.toLowerCase() + "@terra.com.br";




}

var btnSugerir = document.getElementById("btSugerir");
btnSugerir.addEventListener("click", sugerirEmail);