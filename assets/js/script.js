//provo a creare un div per ogni foto
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('photo-container');

    fetch('https://lanciweb.github.io/demo/api/pictures/')
        .then(response => response.json())
        .then(pictures => {
            pictures.forEach(pic => {
                const card = document.createElement('div');
                card.className = 'photo-card';
                card.innerHTML = `
    <img src="${pic.url}" alt="${pic.title}">
    <div class="photo-info">
        <h2 class="photo-title">${pic.title}</h2>
        <p class="photo-date">${pic.date}</p>
    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Errore nel fetch:', error));
});