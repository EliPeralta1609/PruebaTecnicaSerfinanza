const API_URL = 'http://country.io/names.json';
fetch(API_URL)
.then(response => response.json())
.then(data => {
let element = document.querySelector('select')
for (const property in data) {
    let nuevaOpcion = document.createElement("option");
    nuevaOpcion.value = `${property}`;
    nuevaOpcion.text = `${data[property]}`;
    element.add(nuevaOpcion);
  }
})