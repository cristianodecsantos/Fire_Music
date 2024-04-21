import { mButton,mLetra } from "./pesquisa.js"
const searchButton = document.querySelector(".searchClass")


searchButton.addEventListener("click", ()=>{
    const mainArea = document.querySelector(".main")
    mainArea.innerHTML = ''
    mainArea.innerHTML = `
    <div class="main-wraper">
        <div class="main_title" id="idTeste">
            <input type="text" id="searchInput" placeholder="Digite para pesquisar...">
            <button class="mButton">Buscar Música</button>
            <button class="lButton">Buscar Letra</button>
        </div>
        <div id="resultSearch">
            <ul id="searchResults" class="searchResultados"></ul>
        </div>
    
        <div >                
            <!-- <div class="main_col">
                <img src="img/top50.png" alt="Paradas">
                <h3>As 50 mais tocadas</h3>
            </div> -->    
        </div>
    </div>
    
    `
    
    const mButtonS = document.querySelector(".mButton")
    const mLetraS = document.querySelector(".lButton")

    mButtonS.addEventListener("click",()=>{
        const searchResults = document.getElementById('searchResults');
        const searchInput = document.getElementById('searchInput');
        mButton(searchResults, searchInput)
    })

    mLetraS.addEventListener("click",()=>{
        const searchInput = document.getElementById('searchInput');
        mLetra(searchInput)
    })
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query !== '') { 
        "ok"     
    } else {
        const resultado = document.getElementById("resultSearch")
        resultado.innerHTML = '';
    }      
    });
})

