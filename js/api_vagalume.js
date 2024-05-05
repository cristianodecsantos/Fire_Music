import { cardsMusicType } from "./music-category.js";
const mudarTela = document.querySelector(".mudarTela");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let likeMusic = document.querySelector(".likeMusic");


export function mainScreen(){
    let mainArea = document.querySelector(".main")
    mainArea.innerHTML = ''
    mainArea.innerHTML=`
    <div class="main-wraper">
        <div class="cards">
            <div class="ajustCard">
                <img src="img/rock.jpg" alt="rock">
                <h3 class="typeMusic">Rock In Roll</h3>
            </div>
    
            <div class="ajustCard">
                <img class="imgCard" src="img/axe.jpg" alt="axe">
                <h3 id="typeMusic">Axé</h3>
            </div>
    
            <div class="ajustCard">
                <img src="img/classica.jpg" alt="classica">
                <h3 id="typeMusic">Classica</h3>
            </div>
    
            <div class="ajustCard">
                <img src="img/eletronico.jpg" alt="eletronico">
                <h3 id="typeMusic">Eletronico</h3>
            </div>
    
            <div class="ajustCard">
                <img src="img/hiphop.jpg" alt="hiphop">
                <h3 id="typeMusic">Hip Hop</h3>
            </div>        

            <div class="ajustCard">
                <img src="img/jazz.jpg" alt="jazz">
                <h3 id="typeMusic">Jazz</h3>
            </div>
    
            <div class="ajustCard">
                <img src="img/mpb.jpg" alt="mpb">
                <h3 id="typeMusic">MPB</h3>
            </div>
    
            <div class="ajustCard">
                <img src="img/pagode.jpg" alt="pagode">
                <h3 id="typeMusic">Pagode</h3>
            </div>
    
            <div class="ajustCard">
                <img src="img/pop.jpg" alt="pop">
                <h3 id="typeMusic">POP</h3>
            </div >
            
            <div class="ajustCard">
                <img src="img/sertanejo.jpg" alt="sertanejo">
                <h3 id="typeMusic">Sertanejo</h3>
            </div>
        </div>
    </div>
    `
    cardsMusicType();

}


function letraMusica(){
    // Variáveis e definições para fazer busca na API
    var artist = document.querySelector(".artist").innerText;
    let musica = document.querySelector(".title")
    let mainArea = document.querySelector(".main")
    var song   = musica.innerText;
    const musicaFormatado = song.replace(/ /g, "%20");
    const key =  '3797b52f5f67c0c6b93bcbd8cb4db9d4';
    
    function capitalizeEachWord(sentence) {
        // Split the sentence into words
        const words = sentence.split(' ');
    
        // Capitalize the first letter of each word
        const capitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        // Join the words back into a sentence
        const palavra = capitalizedWords.join(' ');
        const newSentence = palavra.replace(/ /g, "-")
        return newSentence
    }
    
    const artista = capitalizeEachWord(artist);   
    console.log(artista)
    
    // Buscando informações na API do Vagalume
    async function getResults(){
        
        const dataLetra = await fetch("https://api.vagalume.com.br/search.php"+ "?art=" + artista + "&mus=" + musicaFormatado+ `&extra=alb,artpic,rank` + `&apikey=${key}`, {
            method: "GET"
        }).then(res => res.json());
    
        const dataArtista = await fetch(`https://www.vagalume.com.br/${artista.toLocaleLowerCase()}/index.js`, {
            method: "GET"
        }).then(res => res.json());

        // Adicionando o conteúdo na tela conforme a resposta da API
        mainArea.innerHTML=''
        mainArea.innerHTML = `
        <div class="main-wraper">
        <div class="absolute">
            <a  class="mudarTelaMusica"><i class="fa-solid fa-arrow-left arrowAjuste"></i> </a> 
        </div>
        <div class="absoluteInfo">
            <p class="artist-name">Artista: Nome do Artista</p>
            <img src="" alt="" class="logoArtist imgArtista">        
        </div>
        
        <div class="container">
            
            <div class="info">
                <div class="containerLetra">
                    
                </div>
            </div>
            
        </div>
        </div>
        `
        let nomeArtist = document.querySelector(".artist-name")
        let mainWraper = document.querySelector(".main-wraper")
        let imagem = document.querySelector(".logoArtist")
        let letra = document.querySelector(".containerLetra")
        console.log(dataArtista.artist.desc)
        nomeArtist.innerText = dataArtista.artist.desc
        imagem.setAttribute('src', `https://www.vagalume.com.br` + dataArtista.artist.pic_medium)
        const infos = document.createElement('div');
        infos.classList.add("lateral")
        infos.innerHTML = `
        <aside >
            <p>Genêro Musical: ${dataArtista.artist.genre[0].name}</p>
            <p>Álbum: ${dataLetra.mus[0].alb.name}</p>
            <p>Ano: ${dataLetra.mus[0].alb.year}</p>
            <p>Rank Vagalume: ${dataArtista.artist.rank.pos}</p>
            <p>Último albúm: ${dataArtista.artist.albums.item[0].desc}</p>
        </aside>
        `
        
        
        mainWraper.appendChild(infos)
        mainArea.appendChild(mainWraper)
        letra.innerText = dataLetra.mus[0].text

        let beginButton = document.querySelector(".mudarTelaMusica");
        beginButton.addEventListener("click", () =>{
        mainScreen()})
    }
    getResults();
    
}

// Chama a função quando clica no ícone de informação
mudarTela.addEventListener("click", () =>{    
    letraMusica();
    
})

// Mudar a letra da música conforme passa música
prevBtn.addEventListener("click", () => {
    let song = document.getElementById('song')
    song.addEventListener("loadeddata",()=>{
        const telaAberta = document.querySelector(".artist-name")
        if(telaAberta){
            letraMusica();
        }
    })
    
    
})

// Mudar a letra da música conforme passa música
nextBtn.addEventListener("click", () =>{
    let song = document.getElementById('song')
    song.addEventListener("loadeddata",()=>{
        const telaAberta = document.querySelector(".artist-name")
        if(telaAberta){
            letraMusica();
        }
        
    })
})

