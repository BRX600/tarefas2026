// Confirma exclusão
document.querySelectorAll('.btn-delete').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const confirmar = confirm("Deseja realmente excluir este veículo?");
    
    if (!confirmar) {
      e.preventDefault();
    }
  });
});


// Simular check-out
document.querySelectorAll('.btn-check').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Check-out realizado!");
  });
});