const valorTicket = 200;
const estudiante = valorTicket - valorTicket * 0.8;
const trainee = valorTicket - valorTicket * 0.5;
const junior = valorTicket - valorTicket * 0.15;
const categoria = document.getElementById("categoria");
const cantidad = document.getElementById("cantidad");
const btnEnviar = document.getElementById("boton_enviar");
const btnBorrar = document.getElementById("boton_borrar");
const resumnenTotal = document.getElementById("resumenTotal");

btnEnviar.addEventListener("click", calcularTotal);
btnBorrar.addEventListener("click", borrarDatos);

// Función para calcular el total
function calcularTotal() {
  const categoriaSeleccionada = obtenerCategoriaSeleccionada();

  const cantidadTickets = obtenerCantidadTickets();

  // Calcula el total dependiendo de la categoría
  let montoTotal = 0;
  if (
    nombre.value != "" &&
    apellido.value != "" &&
    email.value != "" &&
    cantidad.value != ""
  ) {
    if (categoriaSeleccionada === "Estudiante") {
      montoTotal = estudiante * cantidadTickets; // Precio para estudiantes
    } else if (categoriaSeleccionada === "Trainee") {
      montoTotal = trainee * cantidadTickets; // Precio para trainees
    } else if (categoriaSeleccionada === "Junior") {
      montoTotal = junior * cantidadTickets; // Precio para juniors
    }

    //Se actualiza el elemento "totalAPagar" con el monto total
    resumnenTotal.textContent = `$${montoTotal}`;
  } else {
    alert("Ingrese los campos requeridos");
  }
}

// Función para obtener la categoría seleccionada
function obtenerCategoriaSeleccionada() {
  // Obtiene el valor seleccionado en el elemento select
  const categoriaSeleccionada = categoria.value;

  return categoriaSeleccionada;
}

// Función para obtener la cantidad de tickets a comprar
function obtenerCantidadTickets() {
  const cantidadTotal = parseInt(cantidad.value);

  return cantidadTotal;
}

function borrarDatos() {
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let email = document.getElementById("email");

  cantidad.value = "";
  resumnenTotal.innerText = "0";
  nombre.value = "";
  apellido.value = "";
  email.value = "";
}
