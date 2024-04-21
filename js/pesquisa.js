import allMusic from "./all-music.js";
import { loadMusic, playMusic } from "./player.js";
const items = allMusic;

let i = 0

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


export function mButton(searchResultsF, searchInputF ) {
    console.log("clicado")
    searchResultsF.innerHTML = ``
    const resultado = document.getElementById("resultSearch");
    function filterItems(query) {
        return items.filter(items => items.name.toLowerCase().includes(query.toLowerCase()));
    }
    
    function displayResults(results) {
        searchResultsF.innerHTML = '';
        results.forEach(result => {
            i = 1
            const li = document.createElement('li');
            li.classList.add("ajuste")
            li.classList.add("ajustaListaBusca")
            // li.textContent = `${result.name} - Artista: ${result.artist}`;
            li.innerHTML = `
                <p class="resultList ajustResultList">${result.name}</p> <p class="ajustResultList">-</p> <p class="ajustResultList"> Artista: ${result.artist}</p>
                `
            searchResultsF.appendChild(li);
            resultado.appendChild(searchResultsF);
            li.style.display = "flex";
            i++;
        });
    }
    const query = searchInputF.value.trim();
    const results = filterItems(query);
    displayResults(results);  
    playFromSearchMusics();

};

// searchInput.addEventListener('input', () => {
//     const query = searchInput.value.trim();
//     if (query !== '') { 
//         "ok"     
//     } else {
//         resultado.innerHTML = '';
//     }      
//     });


export function mLetra(search){
    
    const result = document.getElementById('resultSearch')
    
    
    /// api URL ///
    const apiURL = 'https://api.lyrics.ovh';
    
    
    const searchValue = search.value.trim();
    
        if(!searchValue){
            alert("There is nothing to search")
        }
        else{ 
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
        <ul id="searchResults" class="searchResultados">
          ${data.data
            .map(song=> `<li class="ajustaListaBusca">
                        <div id= "modalLetra">
                            <strong>${song.artist.name}</strong> -${song.title} 
                        </div>
                        <a id="openModal" class="abrirModal" data-artist="${song.artist.name}" data-songtitle="${song.title}" class="btn " data-bs-toggle="modal" href="#showModal" role="button">get Lyrics</a>
                        
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
        const modalLetra = document.getElementById('modalLetra')
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
    
};

