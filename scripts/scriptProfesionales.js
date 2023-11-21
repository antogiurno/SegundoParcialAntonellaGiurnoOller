const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const recipient = button.getAttribute('nombre')
    const modalTitle = exampleModal.querySelector('.modal-title')
    const nombre = button.getAttribute('nombre')
    const apellido = button.getAttribute('apellido')
    const correo = button.getAttribute('correo')
    const telefono = button.getAttribute('telefono')
    const especialidad = button.getAttribute('especialidad')
    const tarifa = button.getAttribute('tarifa')

    const modalBodyNombre = exampleModal.querySelector('#nombre')
    const modalBodyApellido = exampleModal.querySelector('#apellido')
    const modalBodyCorreo = exampleModal.querySelector('#correo')
    const modalBodyTelefono = exampleModal.querySelector('#telefono')
    const modalBodyEspecialidad = exampleModal.querySelector('#especialidad')
    const modalBodyTarifa = exampleModal.querySelector('#tarifa')

    modalTitle.textContent = `${recipient}, modifica tu perfil`
    modalBodyNombre.value = nombre
    modalBodyApellido.value = apellido
    modalBodyCorreo.value = correo
    modalBodyTelefono.value = telefono
    modalBodyEspecialidad.value = especialidad
    modalBodyTarifa.value = tarifa
  })
}


document.getElementById('enviarBtn').addEventListener('click', function() {
  $(".fade").hide()
  document.getElementById('message-text').value = '';
  $(".toast").show()
  setTimeout(function() {
    $(".toast").hide();
  }, 3000);

});

