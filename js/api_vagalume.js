window.onload = function(){
    var artist = document.querySelector(".artist").innerText;
    
    let musica = document.getElementById("nomeMusica")
    
    var song   = musica.innerText;
    const musicaFormatado = song.replace(/ /g, "%20");
    
    let container = document.querySelector(".infos")
    let imagem = document.querySelector(".logoArtist")
    let nomeArtist = document.querySelector(".artist-name")
    let letra = document.querySelector(".containerLetra")
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
    var artistLower = artista.toLocaleLowerCase()
    // console.log(artista)
    
    async function getResults(){
    
        const dataLetra = await fetch("https://api.vagalume.com.br/search.php"+ "?art=" + artista + "&mus=" + musicaFormatado+ `&extra=alb,artpic,rank` + `&apikey=${key}`, {
            method: "GET"
        }).then(res => res.json());
    
        const dataArtista = await fetch(`https://www.vagalume.com.br/${artistLower}/index.js`, {
            method: "GET"
        }).then(res => res.json());
    
        imagem.setAttribute('src', `https://www.vagalume.com.br` + dataArtista.artist.pic_medium)
        nomeArtist.innerText = dataArtista.artist.desc
    
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
        container.appendChild(infos)
        letra.innerText = dataLetra.mus[0].text
    }   
    getResults();       
}

// // file1.js
// export default function resultados() {
//     // Function implementation
//     getResults()
//   };
  
