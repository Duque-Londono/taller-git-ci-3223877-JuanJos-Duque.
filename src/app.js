// Función que agrega un elemento a la lista
export function agregarItem(texto) {
  // Obtener el elemento <ul id="lista">
  const lista = document.getElementById("lista");

  // Si no existe, no romper la app
  if (!lista) return null;

  // Crear el elemento <li>
  const li = document.createElement("li");
  li.textContent = texto;

  // Agregar a la lista
  lista.appendChild(li);

  // Devolver el li para pruebas o usos posteriores
  return li;
}

// Función de ejemplo para test unitario
export function sumar(a, b) {
  return a + b;
}

// Registrar evento del botón para agregar items
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("agregarBtn");
  const input = document.getElementById("itemInput");

  if (boton && input) {
    boton.addEventListener("click", () => {
      if (input.value.trim() !== "") {
        agregarItem(input.value.trim());
        input.value = "";
      }
    });
  }
});
