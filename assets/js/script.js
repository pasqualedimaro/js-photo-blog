
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('photo-container');
    
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay-img');
    const closeBtn = document.getElementById('close-btn');

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
                
                // click sulla foto per aprire overlay
                card.addEventListener('click', () => {
                    overlayImg.src = pic.url;
                    overlay.classList.remove('hidden');
                });
                
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Errore nel fetch:', error));

        // chiudi overlay click bottttone
        closeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });
});