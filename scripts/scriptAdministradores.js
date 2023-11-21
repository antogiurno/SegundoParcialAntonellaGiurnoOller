document.addEventListener('DOMContentLoaded', function () {
  var botonesModificar = document.querySelectorAll('.modificarBtn');
  botonesModificar.forEach(function (boton) {
    boton.addEventListener('click', function () {
      alert("El cambio se aplicó correctamente.");
    });
  });
});

btnAlta



document.addEventListener('DOMContentLoaded', function () {
  var botonesEliminar = document.querySelectorAll('.eliminar');
  botonesEliminar.forEach(function (boton) {
      boton.addEventListener('click', function () {
          var card = this.closest('.card');
          if (card) {
              card.style.display = 'none';
              alert('Se eliminó el usuario exitosamente');
          }
      });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  var btnAlta = document.getElementById('btnAlta');
  btnAlta.addEventListener('click', function () {
      $(".fade").hide()
      alert('Profesional creado exitosamente');
      window.location.href = 'administradores.html';
  });
});