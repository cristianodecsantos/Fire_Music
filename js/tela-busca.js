import { mButton,mLetra } from "./pesquisa.js"
const searchButton = document.querySelector(".searchClass")


searchButton.addEventListener("click", ()=>{
    // Adicionando caixa de pesquisa e botões de busca na tela
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

    // Chamando a função mButton
    mButtonS.addEventListener("click",()=>{
        const searchResults = document.getElementById('searchResults');
        const searchInput = document.getElementById('searchInput');
        mButton(searchResults, searchInput)
    })

    // Chamando a função mLetra
    mLetraS.addEventListener("click",()=>{
        const searchInput = document.getElementById('searchInput');
        mLetra(searchInput)
    })

    // Limpando a tela quando não houver nada na caixa de pesquisa
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

