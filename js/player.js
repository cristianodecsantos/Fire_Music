import allMusic from "./all-music.js";

let song = document.getElementById('song')
let ctrlIcon = document.getElementById('ctrlIcon')
let musicImg = document.getElementById("img-song");
let musicName = document.querySelector(".title");
let musicArtist = document.querySelector(".artist");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let progressArea = document.querySelector(".progress-bar");
let progressBar = document.querySelector(".progress");
let playPauseBtn =document.querySelector("#play-pause")
let repeatBtn = document.getElementById("repeat")
let Btnrepeat = document.querySelector(".btnRepeat")
let playerHeart = document.getElementById("playerHeart")
let pHeart = document.querySelector(".pHeart")
let isAleatorio = document.getElementById("shuffle")
let btnShuffle = document.querySelector(".cShuffle")
let likeMusic = document.querySelector(".likeMusic");
let musicIndex = Math.floor((Math.random()) * allMusic.length);
const volumeControl = document.getElementById('volumeControl');

const isMusicPaused = true;


// if(song.classList.contains("classTest")){
//         "ok"
// }else{
//     loadMusic(musicIndex);
// }
// document.addEventListener("DOMContentLoaded", ()=>{
//     loadMusic(musicIndex)
// })
window.addEventListener("load", () =>{
    
    loadMusic(musicIndex);

    pHeart.addEventListener("click", () => {
        if(pHeart.classList.contains('fa-solid')){
            likeSong()
        } else if(pHeart.classList.contains('fa-regular')){
            const songName = musicName.innerText;
            const artistName = musicArtist.innerText;
            unlikeSong(songName, artistName);
        }
        
    })

    // Função para curtir a música - adiciona no local storage e na tela de músicas curtidas
    function likeSong() {
        const songName = musicName.innerText;
        const artistName = musicArtist.innerText;
    
        // Retrieve liked songs from local storage or initialize an empty array
        let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
    
        // Check if the song is already liked
        const isLiked = likedSongs.some(song => song.name === songName && song.artist === artistName);
    
        if (!isLiked) {
            // Add the song to the liked songs array
            likedSongs.push({ name: songName, artist: artistName });
            localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
        } else {
            // Remove the song from the liked songs array if already liked (unlike)
            likedSongs = likedSongs.filter(song => !(song.name === songName && song.artist === artistName));
            localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
        }
        const seta = document.getElementById("turnPage")
        
        if(seta.classList.contains('arrumarSeta')){
            listLikedMusic();
        }
        
        
    }

    // Função para descurtir a música - remove do local storage e da tela de músicas curtidas
    function unlikeSong(songName, artistName) {
        let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
        
        const index = getIndexByNameAndArtist(likedSongs, songName, artistName); // Get the index
        if (index !== -1) {
            likedSongs.splice(index, 1); // Remove the song at the specified index
            localStorage.setItem('likedSongs', JSON.stringify(likedSongs));        
        }
        const seta = document.getElementById("turnPage")
        
        if(seta.classList.contains('arrumarSeta')){
            listLikedMusic();
        }
    }

    // Checa se a música já está curtida ou não
    function alreadyLiked() {
        const songName = musicName.innerText;
        const artistName = musicArtist.innerText;
        let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
        let index = getIndexByNameAndArtist(likedSongs, songName, artistName);
        console.log(index)
        if (likedSongs[index].name === songName && likedSongs[index].artist === artistName) {
            pHeart.classList.remove('fa-regular');
            pHeart.classList.add('fa-solid');
            pHeart.classList.add('pHeart')
            pHeart.classList.add('clickHeart')
            
        }
    }

    song.addEventListener("loadeddata",()=>{
        alreadyLiked();
    })

    //Mostra as músicas curtidas quando clica no botão
    likeMusic.addEventListener("click", () => {
        listLikedMusic()
    })

    // Mostrar a lista de músicas curtidas
    function listLikedMusic (){
        const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
        
        const likedSongsList = document.querySelector('.main-wraper');
        
        // Clear the previous list of liked songs
        likedSongsList.innerHTML = `<div id="turnPage" class="arrumarSeta"><a href="index.html" class="mudarTela"><i class="fa-solid fa-arrow-left arrowLike"></i> </a></div> `;
        let divLista = document.createElement('div')
        divLista.classList.add('musicaCurtidas')
        likedSongsList.appendChild(divLista)
        // Populate the list with the current liked songs
        likedSongs.forEach(song => {
            const listItem = document.createElement('li');
            listItem.classList.add('playCurtida')
            
            listItem.id = "idCurtida";
            listItem.innerHTML = `<p class="single-song paddingLeft">${song.name}</p> <p class="paddingLeft">-</p> <p class="paddingLeft">${song.artist}</p>`;
            divLista.appendChild(listItem);

        });
        playFromLikedMusics();
    }

    // Função para pegar o índice de uma música pelo nome da música e do artista
    function getIndexByNameAndArtist(likedSongs, songName, artistName) {
        for (let i = 0; i < likedSongs.length; i++) {
            if (likedSongs[i].name === songName && likedSongs[i].artist === artistName) {
                return i; // Return the index if the song is found
            }
        }
        return -1; // Return -1 if the song is not found
    }

    // Toca as músicas que estão na lista de curtidas quando clicado sobre o nome da música na tela
    function playFromLikedMusics(){
        let playLiked = document.querySelector(".musicaCurtidas");
        playLiked.addEventListener("click", (e) =>{
            if(e.target.classList.contains("single-song")){
                const indexNum = allMusic.findIndex((item, index) =>{
                    if(item.name === e.target.innerText ){
                        return true;
                    }
                    
                })
                loadMusic(indexNum + 1);
                playMusic();

            }})
    }

    // Passar para a música anterior
    function prevMusic(){
        if(btnShuffle.classList.contains("clickedShuffle")){
            musicIndex = Math.floor((Math.random()) * allMusic.length);
        }
        musicIndex--;
        musicIndex < 1 ? musicIndex = allMusic.length  : musicIndex = musicIndex;
        console.log(musicIndex)
        loadMusic(musicIndex);
        playMusic();
    
        const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
        if (likedSongs != []){
            const foundSong =  likedSongs.some((song) => { return song.name === musicName.innerText && song.artist === musicArtist.innerText })
            if (foundSong) {
            console.log("Song found:", foundSong);
            pHeart.classList.remove('fa-regular')
            pHeart.classList.add('fa-solid')
            } else {
            // console.log("Song not found:", songToCheck);
            pHeart.classList.remove('fa-solid')
            pHeart.classList.add('fa-regular')
            pHeart.classList.remove('clickHeart')
            }
        }
        
    }
    
    
    // Passar para a próxima música
    function nextMusic(){
        if(btnShuffle.classList.contains("clickedShuffle")){
            musicIndex = Math.floor((Math.random()) * allMusic.length);
        }
        musicIndex++;
        musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
        loadMusic(musicIndex);
        playMusic();

        
        const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
        const foundSong =  likedSongs.some((song) => { return song.name === musicName.innerText && song.artist === musicArtist.innerText })
        if (foundSong) {
            console.log("Song found:", foundSong);
            pHeart.classList.remove('fa-regular')
            pHeart.classList.add('fa-solid')
        } else {
            pHeart.classList.remove('fa-solid')
            pHeart.classList.add('fa-regular')
            pHeart.classList.remove('clickHeart')
        }
    }

    // Aciona a função prevMusic
    prevBtn.addEventListener("click", () => {
        prevMusic();
    })
    // Aciona a função nextMusic
    nextBtn.addEventListener("click", () =>{
        nextMusic();
    })

    
})


// Carrega informações da música para o player
export function loadMusic(indexNumb){
    
    musicName.innerText = allMusic[indexNumb -1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `img/${allMusic[indexNumb - 1].img}.jpg`
    song.innerHTML=  `<source src="musicas/${allMusic[indexNumb - 1].src}.mp3" type="audio/mpeg">`
    song.load()
    
}

// Toca a música
export function playMusic(){
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

// Pausa a música
function pauseMusic(){
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
}

// Aciona a função play ou pause music
playPauseBtn.addEventListener("click", () =>{
    const isMusicPlay = ctrlIcon.classList.contains("fa-pause");
    isMusicPlay ? pauseMusic() : playMusic();
})


// Acionar funcionalidade de repetir a música que está tocando
song.loop = false;
repeatBtn.addEventListener("click", () =>{
    if(song.loop){
        song.loop = false;
    }else{
        song.loop = true
    }

    Btnrepeat.classList.toggle("clicked"); // Toggle the 'clicked' class
})

// Acionar a funcionalidade de reprodução aleatória das músicas
isAleatorio.addEventListener("click",() =>{
    btnShuffle.classList.toggle("clickedShuffle")
})


// Mudar ícone para indicar que é uma música curtida
playerHeart.addEventListener("click", () =>{
    if (pHeart.classList.contains("fa-regular")) {
        pHeart.classList.remove("fa-regular");
        pHeart.classList.add("fa-solid");
        pHeart.classList.add("clickHeart");
    } else {
        pHeart.classList.remove("fa-solid");
        pHeart.classList.remove("clickHeart");
        pHeart.classList.add("fa-regular");
    }
})


// Atualizar valor de tempo reproduzido da música
song.ontimeupdate = (e) =>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
    let musicCurrentTime = document.getElementById("current-time");  
    let currentMin = Math.floor(currentTime/60);
    let currentSec = Math.floor(currentTime%60);
    if(currentSec < 10){
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
}

// Definir duração da música
song.addEventListener("loadeddata",()=>{
    let musicDuration = document.getElementById("max-duration");
    let songDuration = song.duration;
    // console.log(songDuration);
    let totalMin = Math.floor(songDuration/60);
    let totalSec = Math.floor(songDuration % 60);
    if(totalSec < 10){
        totalSec = `0${totalSec}`;
    }
    musicDuration.innerText = `${totalMin}:${totalSec}`
});

// Tocar a próxima música quando a que está tocando acaba
song.addEventListener('ended', () =>{
    musicIndex++;
    loadMusic(musicIndex);
    song.play();
})

// Ajusta barra de progresso caso clique para avançar
progressArea.addEventListener("click", (e)=>{
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = song.duration;
    song.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
})


// Event listener para controle do volume
function setVolume() {
    song.volume = volumeControl.value;
  }
volumeControl.addEventListener('input', setVolume);

// const musicFavorite = allMusic.filter((x) => x.id === 5)
// localStorage.setItem('favorits', musicFavorite)


