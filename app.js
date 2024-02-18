let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo=10;

console.log(numeroSecreto);

function asignarElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);

  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarElemento(
      "p",
      `acertaste al numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarElemento("p", "el numero es menor");
    } else {
      asignarElemento("p", "el numero es mayor");
    }
    intentos++;
    limpiaCaja();
  }
  return;
}

function limpiaCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroAleatorio() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(numerosSorteados);

  if(numerosSorteados.length==numeroMaximo){
    asignarElemento('h1','ya haz realizado todos los intentos posibles');
  }else{

  if (numerosSorteados.includes(numeroGenerado)) {
    return generarNumeroAleatorio();
  } else {
    numerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }}
}

function condicionesIniiales() {
  asignarElemento("h1", "juego del numero secreto");
  asignarElemento("p", `escoge un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroAleatorio();
  intentos = 1;
}

function reiniciarJuego() {
  limpiaCaja();
  condicionesIniiales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniiales();
