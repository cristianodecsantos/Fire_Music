import allMusic from "./all-music.js";
import { loadMusic } from "./player.js";
// import { playMusic } from './player.js';
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
let playLista = document.querySelector(".seta")
const mButton = document.querySelector(".mButton")
const mLetra = document.querySelector(".lButton")
const items = allMusic;
let i = 0

mButton.addEventListener("click", ()=>{
    searchResults.innerHTML = ''
    function filterItems(query) {
        return items.filter(items => items.name.toLowerCase().includes(query.toLowerCase()));
    }
    
    function displayResults(results) {
        searchResults.innerHTML = '';
        results.forEach(result => {
            i = 1
            const li = document.createElement('li');
            // li.textContent = `${result.name} - Artista: ${result.artist}`;
            li.innerHTML = `
                <span class="ajuste">
                <p id="ajuste${i}">${result.name} - Artista: ${result.artist}</p>
                <i class="fa-solid fa-play seta"></i>
                </span>`
            searchResults.appendChild(li);
            li.style.display = "block";
            i++;
        });
    }
    
    searchInput.addEventListener('input', () => {
        searchResults.innerHTML = '';
        const query = searchInput.value.trim();
        if (query !== '') {
            const results = filterItems(query);
            displayResults(results);
        } else {
            searchResults.innerHTML = '';
        }
    });

    // window.addEventListener("load", () =>{
    // playLista.addEventListener("click", () => {
        
    //     const songInput = document.getElementById("");
    //     const songName = songInput.innerText;
    //     for (var i = 0; i < allMusic.length; i++) {
    //         if (dados[i].name === songName) {
    //             musica = dados[i].id;
    //         }
    //     }
    //     ; // Retorna null se o nome não for encontrado
        
    //     return loadMusic(musica);
    // })
    // })
})

mLetra.addEventListener("click", () =>{
    
    // const form = document.getElementById('form')
    const search = document.getElementById('searchInput')
    const result = document.getElementById('resultSearch')
    
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
            .map(song=> `<li>
                        <div>
                            <strong>${song.artist.name}</strong> -${song.title} 
                        </div>
                        <span data-artist="${song.artist.name}" data-songtitle="${song.title}"> get lyrics</span>
                    </li>`
            )
            .join('')}
        </ul>
      `;    
    
    }
    

    //event listener in get lyrics button
    result.addEventListener('click', e=>{
        const clickedElement = e.target;
    
        //checking clicked elemet is button or not
        if (clickedElement.tagName === 'SPAN'){
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
        result.innerHTML = ` 
        <h4 style="margin-top:3000px; color: black;"><strong>${artist}</strong> - ${songTitle}</h4><ul>
        <div data-artist="${artist}" data-songtitle="${songTitle}"> get lyrics</div>
        <p style="margin-top:20px; color= #fff;">${lyrics}</p>
    `    
        
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