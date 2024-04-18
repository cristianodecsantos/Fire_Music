const mudarTela = document.querySelector(".mudarTela");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");

function letraMusica(){
    var artist = document.querySelector(".artist").innerText;
    // console.log(artist)
    let musica = document.querySelector(".title")
    let mainArea = document.querySelector(".main")
    var song   = musica.innerText;
    const musicaFormatado = song.replace(/ /g, "%20");
    console.log(musicaFormatado)
    // let container = document.querySelector(".infos")
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
    
    async function getResults(){
    
        const dataLetra = await fetch("https://api.vagalume.com.br/search.php"+ "?art=" + artista + "&mus=" + musicaFormatado+ `&extra=alb,artpic,rank` + `&apikey=${key}`, {
            method: "GET"
        }).then(res => res.json());
    
        const dataArtista = await fetch(`https://www.vagalume.com.br/${artista.toLocaleLowerCase()}/index.js`, {
            method: "GET"
        }).then(res => res.json());
        mainArea.innerHTML = `
        <div class="absolute">
            <a href="/Fizer_Music/index.html" class="mudarTela"><i class="fa-solid fa-arrow-left arrowAjuste"></i> </a> 
        </div>
        <div class="absoluteInfo">
            <p class="artist-name">Artista: Nome do Artista</p>
            <img src="" alt="" class="logoArtist imgArtista">        
        </div>
        
        <div class="container">
            <div class="infos">
    
            </div>
            <div class="info">
                <div class="containerLetra">
                    
                </div>
            </div>
            
        </div>
        
        `
        let nomeArtist = document.querySelector(".artist-name")
        let imagem = document.querySelector(".logoArtist")
        let letra = document.querySelector(".containerLetra")
        console.log(dataArtista.artist.desc)
        nomeArtist.innerText = dataArtista.artist.desc
        imagem.setAttribute('src', `https://www.vagalume.com.br` + dataArtista.artist.pic_medium)
        const infos = document.createElement('div');
        infos.innerHTML = `
        <aside class="lateral">
            <p>Genêro Musical: ${dataArtista.artist.genre[0].name}</p>
            <p>Álbum: ${dataLetra.mus[0].alb.name}</p>
            <p>Ano: ${dataLetra.mus[0].alb.year}</p>
            <p>Rank Vagalume: ${dataArtista.artist.rank.pos}</p>
            <p>Último albúm: ${dataArtista.artist.albums.item[0].desc}</p>
        </aside>
        `
        
        
        mainArea.appendChild(infos)
        letra.innerText = dataLetra.mus[0].text
    }
    getResults();
}

mudarTela.addEventListener("click", () =>{    
    letraMusica();
})

prevBtn.addEventListener("click", () => {
    let song = document.getElementById('song')
    song.addEventListener("loadeddata",()=>{
        letraMusica();
    })
    
    // console.log(musicIndex)
})
nextBtn.addEventListener("click", () =>{
    let song = document.getElementById('song')
    song.addEventListener("loadeddata",()=>{
        letraMusica();
    })
})



  
