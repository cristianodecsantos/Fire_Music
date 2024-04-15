import allMusic from "./all-music.js";

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const items = allMusic;

function filterItems(query) {
    return items.filter(items => items.name.toLowerCase().includes(query.toLowerCase()));
}

function displayResults(results) {
    searchResults.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = `${result.name} - Artista: ${result.artist}`;
        searchResults.appendChild(li);
        li.style.display = "block";
    });
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query !== '') {
        const results = filterItems(query);
        displayResults(results);
    } else {
        searchResults.innerHTML = '';
    }
});