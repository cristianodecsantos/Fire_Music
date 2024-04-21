import { loadMusic, playMusic } from "./player.js";
import allMusic from "./all-music.js";

// Função para tocar músicas dentro da categoria, olha o elemento pai e age nos elementos filhos
export function playFromCategoryMusics(parentClass, childClass){

    parentClass.addEventListener("click", (e) =>{
        if(e.target.classList.contains(childClass)){
            const indexNum = allMusic.findIndex((item, index) =>{
                if(item.name === e.target.innerText ){
                    return true;
                }
                
            })
            loadMusic(indexNum + 1);
            playMusic();

        }})
}

