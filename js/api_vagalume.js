let musicName = document.querySelector(".title");
let musicArtist = document.querySelector(".artist");
let mArtist = musicArtist.textContent;
console.log(mArtist)
let mName = musicName.textContent;
var artist = mArtist;
var song   = mName;
let apiDiv = document.getElementById("divApi")
const key =  '3797b52f5f67c0c6b93bcbd8cb4db9d4'

async function getResults(){

    const results = [];
    // for(let i=0; i < lista.length;i++){
        const data = await fetch("https://api.vagalume.com.br/search.php"+ "?art=" + artist + "&mus=" + song+ `&apikey=${key}`, {
            method: "GET"
        }).then(res => res.json());
        
        results.push(await data)   ; 
    // }
    // return results;
    results.map((result) => {
        
        const modalContent = document.createElement('div');
        modalContent.innerText = result.mus[0].text

        apiDiv.appendChild(modalContent)
        
    })
}

getResults();