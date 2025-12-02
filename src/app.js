export function suma(a, b) {
  return a + b;
}

export function agregarItem(texto) {
  const lista = document.getElementById("lista");
  if (!lista) return null; // (se corregirá en commit siguiente)

  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);

  return li; // útil para pruebas o mejoras
}

// inicialización mínima
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnAgregar');
  const input = document.getElementById('inputItem');
  if (btn && input) {
    btn.addEventListener('click', () => {
      if (input.value.trim()) {
        agregarItem(input.value.trim());
        input.value = '';
      }
    });
  }
  console.log('App lista');
});

// Evento del botón "Agregar"
const btn = document.getElementById("agregarBtn");
const input = document.getElementById("texto");

if (btn && input) {
  btn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
      agregarItem(input.value.trim());
      input.value = ""; // limpiar después de agregar
    }
  });
}


