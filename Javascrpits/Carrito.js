document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".add-to-cart");
  const listaCarrito = document.getElementById("lista-carrito");
  const finalizarBtn = document.getElementById("finalizarCompra");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const nombreProducto = boton.getAttribute("data-nombre");

      const nuevoItem = document.createElement("li");
      nuevoItem.textContent = nombreProducto;

      listaCarrito.appendChild(nuevoItem);

      alert(`Agregaste "${nombreProducto}" al carrito.`);
    });
  });

  finalizarBtn.addEventListener("click", () => {
    if (listaCarrito.children.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
    } else {
      alert("¡Compra realizada con éxito!");
      listaCarrito.innerHTML = ""; // Vaciar el carrito
    }
  });
});
