// provo a fare la chiamata api convertendola in json
fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));