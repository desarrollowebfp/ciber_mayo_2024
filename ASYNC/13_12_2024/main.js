const APIURL = "https://rickandmortyapi.com/api/character?page=1";

//Traemos la información cruda
fetch(APIURL)
  .then((respuesta) => respuesta.json())
  .then((respuestaTraducida) => {
    const characters = respuestaTraducida.results;
    for (const character of characters) {
      document.body.innerHTML += `
      <div>
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}"/>
        <h3>${character.status}</h3>
        <p>${character.origin.name}</p>
      </div>  
      `;
    }
  })
  .catch((error) => {
    document.body.innerHTML = `
    <h2>${error.message}</h2>
    `
  });

//1º TRAEME LOS DATOS CRUDOS Y ENTONCES....
//2º ME LOS CONVIERTES A JSON Y ENTONCES...
//3º ME LOS SACAS POR CONSOLA
