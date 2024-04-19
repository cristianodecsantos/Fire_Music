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

// const likedSongs = [];




// console.log(allMusic.length)
// console.log(musicIndex)
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
    

    // if(song.classList.contains("classTest")){
    //     musicIndex = getIndexByNameAndArtist(allMusic, musicName.innerText, musicArtist.innerText)
    // }else{
    //     // 
        
    //     musicIndex = 1
        
    // }
    loadMusic(musicIndex);

    
    
    
    pHeart.addEventListener("click", () => {
        // setTimeout(1000)
        if(pHeart.classList.contains('fa-solid')){
            likeSong()
        } else if(pHeart.classList.contains('fa-regular')){
            const songName = musicName.innerText;
            const artistName = musicArtist.innerText;
            unlikeSong(songName, artistName);
        }
        
    })

    function likeSong() {
        const songName = musicName.innerText;
        const artistName = musicArtist.innerText;
    
        // if (!songName || !artistName) {
        //     alert('Please enter both song and artist names.');
        //     return;
        // }
    
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
        
        // Update the liked songs list on the page - quando clicar no botão de música curtida mostra esse código
        // displayLikedSongs();
    }

    function unlikeSong(songName, artistName) {
        // const songName = musicName.innerText;
        // const artistName = musicArtist.innerText;
        let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
        
        const index = getIndexByNameAndArtist(likedSongs, songName, artistName); // Get the index
        if (index !== -1) {
            likedSongs.splice(index, 1); // Remove the song at the specified index
            localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
        // displayLikedSongs(); // Update the liked songs list on the page
        
        }
        const seta = document.getElementById("turnPage")
        
        if(seta.classList.contains('arrumarSeta')){
            listLikedMusic();
        }
    }

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

    likeMusic.addEventListener("click", () => {
        listLikedMusic()
    })

    function listLikedMusic (){
        const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
        const likedSongsList = document.querySelector('.main-wraper');
        
        // Clear the previous list of liked songs
        likedSongsList.innerHTML = `<div id="turnPage" class="arrumarSeta"><a href="/Fizer_Music/index.html" class="mudarTela"><i class="fa-solid fa-arrow-left arrowLike"></i> </a></div> `;
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

            // // Add event listener to allow unlike on click
            // listItem.addEventListener('click', () => unlikeSong(song));
        });
        playFromLikedMusics();
    }

    // Function to get the index of a song by its name and artist name
    function getIndexByNameAndArtist(likedSongs, songName, artistName) {
        for (let i = 0; i < likedSongs.length; i++) {
            if (likedSongs[i].name === songName && likedSongs[i].artist === artistName) {
                return i; // Return the index if the song is found
            }
        }
        return -1; // Return -1 if the song is not found
    }

    // console.log(getIndexByNameAndArtist(allMusic, "Granada","Henrique e Juliano"))
    
    // let playLike = document.querySelector(".arrumarSeta");
    // let idCurtida = document.getElementById("idCurtida")

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
        // console.log("Song not found:", songToCheck);
            pHeart.classList.remove('fa-solid')
            pHeart.classList.add('fa-regular')
            pHeart.classList.remove('clickHeart')
        }
    }

    prevBtn.addEventListener("click", () => {
        prevMusic();
        // console.log(musicIndex)
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


