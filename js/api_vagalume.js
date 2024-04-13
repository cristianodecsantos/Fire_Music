// import allMusic from "./all-music.js";
// let musicName = document.querySelector(".title");
// let musicArtist = document.querySelector(".artist");
// let mArtist = musicArtist.textContent;
// console.log(mArtist)
// let mName = musicName.textContent;
var artist = "U2";
var artistLower = artist.toLocaleLowerCase()
var song   = "One";
let apiDiv = document.getElementById("divApi")
let aDiv = document.getElementById("divA")
let container = document.querySelector(".infos")
// let letra = document.querySelector(".letraMusica")
let letra = document.querySelector(".containerLetra")
const key =  '3797b52f5f67c0c6b93bcbd8cb4db9d4'

async function getResults(){
    
        const dataLetra = await fetch("https://api.vagalume.com.br/search.php"+ "?art=" + artist + "&mus=" + song+ `&extra=alb,artpic,rank` + `&apikey=${key}`, {
            method: "GET"
        }).then(res => res.json());

        const dataArtista = await fetch(`https://www.vagalume.com.br/${artistLower}/index.js`, {
            method: "GET"
        }).then(res => res.json());

        const infos = document.createElement('div');
        infos.innerHTML = `
        <aside class="lateral">
            <p>Genêro Musical:${dataArtista.artist.genre[0].name}</p>
            <p>Álbum: ${dataLetra.mus[0].alb.name}</p>
            <p>Ano: ${dataLetra.mus[0].alb.year}</p>
            <p>Rank Vagalume: ${dataArtista.artist.rank.pos}</p>
            <p>Último albúm: ${dataArtista.artist.albums.item[0].desc}</p>
        </aside>
        ` 
        container.appendChild(infos)

        // const letraMusica = document.createElement('div');
        letra.innerText = dataLetra.mus[0].text
        // letra.appendChild(letraMusica)
        
        
        
        

    // })
}



getResults();