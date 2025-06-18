//provo a creare un div per ogni foto
const container = document.getElementById('photo-container');

fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => {
        if (!response.ok) throw new Error('Network error');
        return response.json();
    })
    .then(data => {
        console.log('Dati ricevuti:', data);
    })
    .catch(error => console.error('Errore:', error));