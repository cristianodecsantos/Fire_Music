// const uri = 'spotify:track:6rqhFgbbKwnb9MLmUQDhG6'

// const newValor = uri.split(':')


// const info = document.createElement('div')



// const reproduzirPrevia = (id) => {

//     const data = document.createElement('div')


//     data.innerHTML = `
// <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${id}?utm_source=generator" background-color: rgb(172, 99, 32) width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
// `

//     document.body.append(data)
// }

// info.innerHTML = `


// <p>nome da musica</p>
// <img  onclick="${reproduzirPrevia(newValor[2])}"/>
// `

const accessToken = 'BQDufsXVlrpy8IMTzO3hzOxozRyq5PuuTJncj3YcfwhFRBy6e15uJigCwLGr2UXj2CftLFZzszinGqzbRJdRB3xlYcZZTu18ZIsuJHXOV2cZcp0FU4Pr8EyGZzm7-H_CWjzcmUte84zO2KW5dz2eK1TljOM8irpBiWzN3imHjSwwSXv8swiQHUUCH7wYup7TvGm6aAbZrYY-16g90evSXTqwl7JL'

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = accessToken;
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
    });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
        console.error(message);
    });

    document.getElementById('togglePlay').onclick = function() {
      player.togglePlay();
    };

    player.connect();
}