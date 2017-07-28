var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValido = true;


    if(peso <= 0 || peso > 100) {
        console.log("Peso Inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00) {
        console.log("Altura Inválida!");
        alturaEhValido = false;
        tdImc.textContent = "Altura Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValido) {
        var imc = peso / (altura  * altura);
        tdImc.textContent = imc.toFixed(2);
    }


}

var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome    = form.nome.value;
    var peso    = form.peso.value;
    var altura  = form.altura.value;
    var gordura = form.gordura.value;
    
});


