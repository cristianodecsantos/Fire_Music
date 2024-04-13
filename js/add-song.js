const addSongToPlaylist = () => {
    // Obter a lista de músicas do site
    const musicList = document.getElementById('music-list');
    const songs = musicList.querySelectorAll('li');
  
    // Criar uma lista vazia para armazenar as músicas selecionadas
    const selectedSongs = [];
  
    // Adicionar um evento de clique a cada música na lista
    songs.forEach((song) => {
      song.addEventListener('click', () => {
        // Adicionar a música à lista de músicas selecionadas
        selectedSongs.push(song.textContent);
  
        // Remover a música da lista de músicas disponíveis
        song.remove();
      });
    });
  
    // Adicionar um evento de submit ao formulário de playlist
    const playlistForm = document.getElementById('playlist-form');
    playlistForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Verificar se há músicas selecionadas
      if (selectedSongs.length > 0) {
        // Criar uma nova playlist com as músicas selecionadas
        const playlistName = document.getElementById('playlist-name').value;
        const playlist = document.createElement('div');
        playlist.classList.add('playlist');
        playlist.innerHTML = `<h3>${playlistName}</h3><ul></ul>`;
  
        // Adicionar as músicas à playlist
        const playlistUl = playlist.querySelector('ul');
        selectedSongs.forEach((song) => {
          const li = document.createElement('li');
          li.textContent = song;
          playlistUl.appendChild(li);
        });
  
        // Adicionar a playlist à página
        document.body.appendChild(playlist);
  
        // Exibir uma mensagem de sucesso
        alert('Playlist criada com sucesso!');
  
        // Limpar a lista de músicas selecionadas
        selectedSongs.length = 0;
  
        // Limpar o nome da playlist
        document.getElementById('playlist-name').value = '';
  
        // Fechar o modal
        closeModal();
      } else {
        // Exibir uma mensagem de erro
        alert('Selecione pelo menos uma música para criar a playlist.');
      }
    });
  };