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
let playPauseBtn =document.querySelector("#play-pause")
let repeatBtn = document.getElementById("repeat")
let Btnrepeat = document.querySelector(".btnRepeat")
let playerHeart = document.getElementById("playerHeart")
let pHeart = document.querySelector(".pHeart")
let musicIndex = Math.floor((Math.random()* allMusic.lenght) + 1);
isMusicPaused = true;

window.addEventListener("load", () =>{
    loadMusic(musicIndex);
})

function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `Fizer Music/Fizer_Music/img/${allMusic[indexNumb - 1].src}.jpg`
    song.src = `Fizer Music/Fizer_Music/musicas/${allMusic[indexNumb - 1].src}.mp3`
}


function playMusic(){
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

function pauseMusic(){
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
}


function prevMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.lenght : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function nextMusic(){
    musicIndex++;
    musicIndex > allMusic.lenght ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

playPauseBtn.addEventListener("click", () =>{
    const isMusicPlay = ctrlIcon.classList.contains("fa-pause");
    isMusicPlay ? pauseMusic() : playMusic();
})

prevBtn.addEventListener("click", () => {
    prevMusic();
})
nextBtn.addEventListener("click", () =>{
    nextMusic();
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
    console.log(songDuration);
    let totalMin = Math.floor(songDuration/60);
    let totalSec = Math.floor(songDuration % 60);
    if(totalSec < 10){
        totalSec = `0${totalSec}`;
    }
    musicDuration.innerText = `${totalMin}:${totalSec}`
});


progressArea.addEventListener("click", (e)=>{
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = song.duration;
    song.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
})

