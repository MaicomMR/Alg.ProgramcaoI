
// vetor global
var pacientes = [];


function adicionarPaciente() {
    var inPaciente = document.getElementById("inPaciente");


    var paciente = inPaciente;

    if (paciente == "") {
        alert("Informe um nome de paciente");
        inPaciente.focus();
        return;
    }

    // add paciente
    pacientes.push(paciente.value);

    mostrarLista();



    inPaciente.value = "";
    inPaciente.focus();
}
var btAdd = document.getElementById("btAdicionar");
btAdd.addEventListener("click", adicionarPaciente);

function atenderPaciente() {
    if (pacientes.length == 0) {
        alert("Não há pacientes para atendimento");
        return;
    }
    //retira o primeiro paciente do vetor e atribou...
    var paciente = pacientes.shift();

    var outAtende = document.getElementById("outAtende");
    outAtende.textContent = "Em atendimento: " + paciente;
    mostrarLista();

}

var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);

function mostrarLista() {

    var outLista = document.getElementById("outLista");
    var lista = "";

    //exibir a lista
    for (var i = 0; i < pacientes.length; i++) {
        lista = lista + (i + 1) + "." + pacientes[i] + "\n";
    }

    outList.textContent = lista;
}