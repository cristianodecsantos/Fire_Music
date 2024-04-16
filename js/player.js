import allMusic from "./all-music.js";

let progress = document.getElementById('progress')
let song = document.getElementById('song')
let ctrlIcon = document.getElementById('ctrlIcon')
const durationDisplay = document.getElementById('max-duration');
const wrapper = document.querySelector(".music-player");
let musicImg = document.getElementById("img-song");
let musicName = document.querySelector(".title");
let musicArtist = document.querySelector(".artist");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let progressArea = document.querySelector(".progress-bar");
let progressBar = document.querySelector(".progress");
let progressAreaVolume = document.querySelector(".progress-barVolume");
let progressBarVolume = document.querySelector(".progressVolume");
let playPauseBtn =document.querySelector("#play-pause")
let repeatBtn = document.getElementById("repeat")
let Btnrepeat = document.querySelector(".btnRepeat")
let playerHeart = document.getElementById("playerHeart")
let pHeart = document.querySelector(".pHeart")
let isAleatorio = document.getElementById("shuffle")
let btnShuffle = document.querySelector(".cShuffle")
const volumeControl = document.getElementById('volumeControl');
let playLista = document.querySelector(".seta")
const likedSongs = [];
let musicIndex = Math.floor((Math.random()) * allMusic.length);



// console.log(allMusic.length)
// console.log(musicIndex)
const isMusicPaused = true;

window.addEventListener("load", () =>{
    loadMusic(musicIndex);
    
    pHeart.addEventListener("click", () => {
        // setTimeout(1000)
        if(pHeart.classList.contains('fa-solid')){
            const artistInput = document.querySelector(".artist");
            const songInput = document.querySelector(".title");
            const artistName = artistInput.innerText;
            const songName = songInput.innerText;
    
            if (artistName !== '' && songName !== '') {
                likedSongs.push({ artist: artistName, song: songName });
                // displayLikedSongs();
                artistInput.value = '';
                songInput.value = '';
            }
            console.log(likedSongs)
        } else if(pHeart.classList.contains('fa-regular')){
            const songRemove = document.querySelector(".title").innerText;
            const removeIndex = likedSongs.findIndex(
                (song1) => song1.name === songRemove // Find index based on song name
              );
              console.log(removeIndex)
              if (removeIndex === -1) {
                likedSongs.splice(removeIndex, 1); // Remove element at the index
              }
            console.log(likedSongs)
        }
        
    })

    function prevMusic(){
        if(btnShuffle.classList.contains("clickedShuffle")){
            musicIndex = Math.floor((Math.random()) * allMusic.length);
        }
        musicIndex--;
        musicIndex < 1 ? musicIndex = allMusic.length  : musicIndex = musicIndex;
        console.log(musicIndex)
        loadMusic(musicIndex);
        playMusic();
    
        const songToCheck = {name: musicName.innerText, artist: musicArtist.innerText}; // Replace with the song object to check
        console.log(songToCheck)
        const foundSong = likedSongs.find((song) => {
        // Check if the song matches the criteria
        return song.name === songToCheck.name && song.artist === songToCheck.artist;
        });
    
        if (foundSong) {
        console.log("Song found:", foundSong);
        } else {
        console.log("Song not found:", songToCheck);
        }
    }
    
    function nextMusic(){
        if(btnShuffle.classList.contains("clickedShuffle")){
            musicIndex = Math.floor((Math.random()) * allMusic.length);
        }
        musicIndex++;
        musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
        loadMusic(musicIndex);
        playMusic();
    }

    prevBtn.addEventListener("click", () => {
        prevMusic();
        console.log(musicIndex)
    })
    nextBtn.addEventListener("click", () =>{
        nextMusic();
    })

    
})



export function loadMusic(indexNumb){
    // let idMusic = allMusic[indexNumb - 1].id;
    // console.log(idMusic)
    musicName.innerText = allMusic[indexNumb -1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `img/${allMusic[indexNumb - 1].img}.jpeg`
    song.innerHTML=  `<source src="musicas/${allMusic[indexNumb - 1].src}.mp3" type="audio/mpeg">`
    song.load()
    // 
    // console.log(musicIndex)
    // console.log(indexNumb)
    
}


export function playMusic(){
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

function pauseMusic(){
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
}




playPauseBtn.addEventListener("click", () =>{
    const isMusicPlay = ctrlIcon.classList.contains("fa-pause");
    isMusicPlay ? pauseMusic() : playMusic();
})



song.loop = false;
repeatBtn.addEventListener("click", () =>{
    if(song.loop){
        song.loop = false;
    }else{
        song.loop = true
    }

    Btnrepeat.classList.toggle("clicked"); // Toggle the 'clicked' class
})

isAleatorio.addEventListener("click",() =>{
    btnShuffle.classList.toggle("clickedShuffle")
})



playerHeart.addEventListener("click", () =>{
    if (pHeart.classList.contains("fa-regular")) {
        pHeart.classList.remove("fa-regular");
        pHeart.classList.add("fa-solid");
        pHeart.classList.add("clickHeart");
        // adicionar no local storage
    } else {
        pHeart.classList.remove("fa-solid");
        pHeart.classList.remove("clickHeart");
        pHeart.classList.add("fa-regular");
        // remover do local storage
    }
})



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

song.addEventListener('ended', () =>{
    musicIndex++;
    loadMusic(musicIndex);
    song.play();
})


progressArea.addEventListener("click", (e)=>{
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = song.duration;
    song.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
})

// progressAreaVolume.addEventListener("click", (e)=>{
//     let progressWidth = progressAreaVolume.clientWidth;
//     let clickedOffsetX = e.offsetX;
//     let songVolume = 1;
//     song.volume = (clickedOffsetX / progressWidth) * songVolume;
    
// })

function setVolume() {
    song.volume = volumeControl.value;
    // progressBarVolume.style.width = volumeControl.value
  }

// Event listener for volume control
volumeControl.addEventListener('input', setVolume);

// const musicFavorite = allMusic.filter((x) => x.id === 5)
// localStorage.setItem('favorits', musicFavorite)
