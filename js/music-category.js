import allMusic from "./all-music.js";
import { playFromCategoryMusics } from "./play-music-category.js";
import { mainScreen } from "./api_vagalume.js";
export function cardsMusicType() {
    let musicType = document.querySelector(".cards");
    musicType.addEventListener("click", async (e) => {
        if (e.target.parentElement.classList.contains("ajustCard")) {

            // Pegando texto do parâmetro alt para definir qual categoria foi selecionada
            let innerHTML = e.target.parentElement.innerHTML;
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = innerHTML;
            let imgElement = tempDiv.querySelector('img');
            let altText = imgElement.alt;

            // Criando tela para adicionar as músicas que atendem ao critério da categoria
            const categorySongsList = document.querySelector('.main-wraper');
            categorySongsList.innerHTML = `<div id="turnPage" class="arrumarSeta2"><a  class="mudarTela"><i class="fa-solid fa-arrow-left arrowLike"></i> </a></div> `;
            let divLista = document.createElement('div');
            divLista.classList.add('listMusic');
            categorySongsList.appendChild(divLista);
            divLista.innerText = altText.toLocaleUpperCase()
            
            // Adicionando na tela todas as músicas que correspondem a categoria do card clicado
            allMusic.forEach(song => {
                if (song.img == altText) {
                    const listItem = document.createElement('li');
                    listItem.classList.add('musics');
                    listItem.id = "idLista";
                    listItem.innerHTML = `<p class="single-song2 paddingLeft2 testeCategory">${song.name}</p> <p class="paddingLeft">-</p> <p class="paddingLeft musicArtist">${song.artist}</p>`;
                    divLista.appendChild(listItem);

                    // Add event listener to the dynamically created element
                    listItem.querySelector('.testeCategory').addEventListener("click", () => {
                        let playList = document.querySelector(".listMusic");
                        let classChild = "testeCategory"
                        
                        playFromCategoryMusics(playList, classChild);
                            
                    });
                }
            });

        }
        let beginButton = document.querySelector(".mudarTela");
            beginButton.addEventListener("click", () =>{
            mainScreen()})
        
        
        
    });
    
    

}
cardsMusicType();

