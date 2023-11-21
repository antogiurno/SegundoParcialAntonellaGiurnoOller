const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const recipient = button.getAttribute('data-bs-whatever')
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `Nuevo mensaje para ${recipient}`
    modalBodyInput.value = recipient
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