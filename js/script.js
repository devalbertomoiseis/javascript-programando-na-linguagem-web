var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista";
console.log(titulo.textContent);

var paciente = document.getElementById("#primeiro-paciente")

var tdPeso = document.querySelector(".info-peso")
var peso = tdPeso.textContent;
var tdAltura = document.querySelector(".info-altura")
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhVlida = true;
var tdImc = document.querySelector(".info-imc")

if(peso <= 0 || peso >= 1000){
  console.log("Peso Inválida")
  pesoEhValido = false;
  tdImc.textContent = "Peso Inválido !!";
}
if(altura <= 0 || altura >= 3.00){
  console.log("Alura Inválida")
  pesoEhValido = false;
  tdImc.textContent = "Alura Inválido !!";
}
if(alturaEhVlida && pesoEhValido){
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}
