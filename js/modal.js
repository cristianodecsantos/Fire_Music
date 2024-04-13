const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const addSong = document.getElementById('add-song');
const deleteSong = document.getElementById('delete-song');
const playlistForm = document.getElementById('playlist-form');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

addSong.addEventListener('click', () => {
  // Adicionar a funcionalidade para adicionar músicas aqui
});

deleteSong.addEventListener('click', () => {
  // Adicionar a funcionalidade para excluir músicas aqui
});

playlistForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Confirmar as mudanças na play list aqui
});