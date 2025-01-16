let amigos = [];

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombre = inputAmigo.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya está en la lista");
    return;
  }

  amigos.push(nombre);

  inputAmigo.value = "";

  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.className = "name-item";
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un amigo para realizar el sorteo");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  const li = document.createElement("li");
  li.className = "result-item";
  li.textContent = `El amigo secreto sorteado es ${amigoSeleccionado}`;
  resultado.appendChild(li);
  amigos = [];
  actualizarListaAmigos();
}
