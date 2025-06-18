// provo a fare la chiamata api

fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => console.log(response))
    .catch(error => console.error(error));