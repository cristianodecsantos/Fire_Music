import allMusic from "./all-music.js";
import { playFromCategoryMusics } from "./play-music-category.js";


function cardsMusicType() {
    let musicType = document.querySelector(".cards");
    musicType.addEventListener("click", async (e) => {
        if (e.target.parentElement.classList.contains("ajustCard")) {
            let innerHTML = e.target.parentElement.innerHTML;
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = innerHTML;
            let imgElement = tempDiv.querySelector('img');
            let altText = imgElement.alt;
            const categorySongsList = document.querySelector('.main-wraper');
            categorySongsList.innerHTML = `<div id="turnPage" class="arrumarSeta"><a href="/Fizer_Music/index.html" class="mudarTela"><i class="fa-solid fa-arrow-left arrowLike"></i> </a></div> `;
            let divLista = document.createElement('div');
            divLista.classList.add('listMusic');
            categorySongsList.appendChild(divLista);

            allMusic.forEach(song => {
                if (song.img == altText) {
                    const listItem = document.createElement('li');
                    listItem.classList.add('musics');
                    listItem.id = "idCurtida";
                    listItem.innerHTML = `<p class="single-song paddingLeft testeCategory">${song.name}</p> <p class="paddingLeft">-</p> <p class="paddingLeft">${song.artist}</p>`;
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
    });
    
}
cardsMusicType();






