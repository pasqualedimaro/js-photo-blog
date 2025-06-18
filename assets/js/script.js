//provo a creare un div per ogni foto
const container = document.getElementById('photo-container');

fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(pictures => {
        pictures.forEach(pic => {
            const card = document.createElement('div');
            card.innerHTML = `
                <img src="${pic.url}" alt="${pic.title}">
                <h2>${pic.title}</h2>
                <p>${pic.date}</p>
            `;
            container.appendChild(card);
        });
    });