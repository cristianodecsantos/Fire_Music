import allMusic from "./all-music.js";
import { loadMusic, playMusic } from "./player.js";
// import { playMusic } from './player.js';
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const mButton = document.querySelector(".mButton")
const mLetra = document.querySelector(".lButton")
const resultado = document.getElementById("resultSearch");
const items = allMusic;
let i = 0

let song = document.getElementById('song')

// function handleClick() {
//     alert("Button clicked!");
// }

// song.addEventListener("loadeddata",()=>{
//     var myButton = mButton;
//     myButton.onclick = msButton();
// })

// song.addEventListener("loadeddata",()=>{
//     var myButton = mLetra;
//     myButton.onclick = msLetra();
// })

// document.addEventListener("DOMContentLoaded", function() {
    
// });

// document.addEventListener("DOMContentLoaded", function() {
    
// });

function playFromSearchMusics(){
    
    let playLiked = document.getElementById("searchResults");

    playLiked.addEventListener("click", (e) =>{
        if(e.target.classList.contains("resultList")){
            const indexNum = allMusic.findIndex((item, index) =>{
                if(item.name === e.target.innerText ){
                    return true;
                }
                
            })
            loadMusic(indexNum + 1);
            playMusic();

        }})
}


mButton.addEventListener("click", () => {
    resultado.innerHTML = ''
    function filterItems(query) {
        return items.filter(items => items.name.toLowerCase().includes(query.toLowerCase()));
    }
    
    function displayResults(results) {
        searchResults.innerHTML = '';
        results.forEach(result => {
            i = 1
            const li = document.createElement('li');
            li.classList.add("ajuste")
            // li.textContent = `${result.name} - Artista: ${result.artist}`;
            li.innerHTML = `
                <p class="resultList ajustResultList">${result.name}</p> <p class="ajustResultList">-</p> <p class="ajustResultList"> Artista: ${result.artist}</p>
                `
            searchResults.appendChild(li);
            resultado.appendChild(searchResults);
            li.style.display = "flex";
            i++;
        });
    }
    const query = searchInput.value.trim();
    const results = filterItems(query);
    displayResults(results);  
    playFromSearchMusics();

});

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query !== '') { 
        "ok"     
    } else {
        resultado.innerHTML = '';
    }      
    });


mLetra.addEventListener("click",() =>{
    searchResults.innerHTML = ''
    // const form = document.getElementById('form')
    const search = document.getElementById('searchInput')
    const result = document.getElementById('resultSearch')
    const modalLetra = document.getElementById('modalLetra')
    
    /// api URL ///
    const apiURL = 'https://api.lyrics.ovh';
    
    // form.addEventListener('submit', e=> {
    //     e.preventDefault();
    const searchValue = search.value.trim();
    
        if(!searchValue){
            alert("There is nothing to search")
        }
        else{ 
            searchSong(searchValue)
        }
    // })
    
    // Key up event listner
    const searchOnKeyUp =() =>{
        searchValue = search.value.trim();
        searchSong(searchValue)
    }
    //search song 
    async function searchSong(searchValue){
        const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`)
        const data = await searchResult.json();
    
        // console.log(finaldata)
        showData(data);
    }
    
    //display final result in DO
    function showData(data){
      
        result.innerHTML = `
       
        <ul class="searchResultados">
          ${data.data
            .map(song=> `<li class="ajustaListaBusca">
                        <div>
                            <strong>${song.artist.name}</strong> -${song.title} 
                        </div>
                        <a id="openModal" class="abrirModal" data-artist="${song.artist.name}" data-songtitle="${song.title}" class="btn " data-bs-toggle="modal" href="#showModal" role="button">get Lyrics</a>
                        
                    </li>`
            )
            .join('')}
        </ul>
      `;    
        // const openModal = document.getElementById('openModal');
        
        // const modal = document.getElementById('showModal');

        // openModal.addEventListener('click', () => {
        //     modal.style.display = 'block';
        // });
        
        
    
    }
    

    //event listener in get lyrics button
    result.addEventListener('click', e=>{
        const clickedElement = e.target;
    
        //checking clicked elemet is button or not
        if (clickedElement.tagName === 'A'){
            const artist = clickedElement.getAttribute('data-artist');
            const songTitle = clickedElement.getAttribute('data-songtitle');
            
            getLyrics(artist, songTitle)
        }
    })
    
    // Get lyrics for song
    async function getLyrics(artist, songTitle) {
      
        const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    
        const data = await res.json();
        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
        modalLetra.innerHTML = ` 
        <div class="modal openModal" tabindex="-1" id="showModal" >
        <div class="modal-dialog custom-modal-lg" >
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Letra da Música</h5>
                <button type="button" class=" btn-close closeModal" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                
                <h4 style="margin-top:10px; color: black;"><strong>${artist}</strong> - ${songTitle}</h4><ul>
                
                <p style="margin-top:20px; font-size: large; color= #fff;">${lyrics}</p>
            </div>
            
            </div>
        </div>
        </div>
    `    
        const modal = document.getElementById("showModal")
        const closeModal = document.querySelector('.closeModal');
        closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalLetra.innerHTML = ''
    });
    // <span id="closeModal">&times;</span>
    // <div data-artist="${artist}" data-songtitle="${songTitle}"> get lyrics</div>
    }
    
    //event listener in get song button
    result.addEventListener('click', e=>{
        const clickedElement = e.target;
    
        //checking clicked elemet is button or not
        if (clickedElement.tagName === 'DIV'){
            const artist = clickedElement.getAttribute('data-artist');
            const songTitle = clickedElement.getAttribute('data-songtitle');
            
            execute(artist, songTitle);
        }
        
    })
})

// let isButton1CallingFirstFunction = true;
// let isButton2CallingFirstFunction = true;

// // Function to toggle between the functions for button 1
// function toggleFunctionsForButton1() {
//     if (isButton1CallingFirstFunction) {
//         msButton();
//     } else {
//         msLetra();
//     }
    
//     // Toggle the flag for the next click
//     isButton1CallingFirstFunction = !isButton1CallingFirstFunction;
// }

// // Function to toggle between the functions for button 2
// function toggleFunctionsForButton2() {
//     if (isButton2CallingFirstFunction) {
//         msButton();
//     } else {
//         msLetra();
//     }
    
//     // Toggle the flag for the next click
//     isButton2CallingFirstFunction = !isButton2CallingFirstFunction;
// }

// // Add event listener to button 1
// mButton.addEventListener("click", toggleFunctionsForButton1);

// // Add event listener to button 2
// mLetra.addEventListener("click", toggleFunctionsForButton2);
