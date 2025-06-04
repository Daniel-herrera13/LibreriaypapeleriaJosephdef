document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("actualizarPerfil");

    boton.addEventListener("click", function () {
      alert("Perfil actualizado");
      location.reload(); 
    });
  });