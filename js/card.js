// Função para pausar todos os áudios, exceto o que está sendo reproduzido
function pauseAllExcept(currentAudio) {
  document.querySelectorAll('audio').forEach(audio => {
    if (audio !== currentAudio) {
      audio.pause();
    }
  });
}

// Adiciona um evento de clique para cada áudio
document.querySelectorAll('audio').forEach(audio => {
  audio.addEventListener('play', function() {
    pauseAllExcept(audio);
  });
});
  