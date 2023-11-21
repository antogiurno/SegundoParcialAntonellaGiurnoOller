const gridSystemModal = document.getElementById('gridSystemModal')
if (gridSystemModal) {
    gridSystemModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const recipient = button.getAttribute('data-bs-whatever')
    const modalTitle = gridSystemModal.querySelector('.modal-title')
    const modalBodyInput = gridSystemModal.querySelector('.modal-body input')

    modalTitle.textContent = `Nuevo mensaje para ${recipient}`
    modalBodyInput.value = recipient
  })
}


document.getElementById('enviarBtnUno').addEventListener('click', function() {
  // $(this).hide();
  alert('¡Su mensaje será revisado por un moderador!');
  document.getElementById('floatingTextarea').value = '';
});


document.getElementById('enviarBtnDos').addEventListener('click', function() {
  // $(this).hide();
  alert('¡Su mensaje será revisado por un moderador!');
  document.getElementById('floatingTextarea').value = '';
});


document.getElementById('enviarBtnTres').addEventListener('click', function() {
  // $(this).hide();
  alert('¡Su mensaje será revisado por un moderador!');
  document.getElementsById('floatingTextarea').value = '';
});