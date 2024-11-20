const API_KEY = "TTkLYHQvpHHT9AB7zWl9eeLggxZRZGmiIH9yXYf52hY";

const getPhotos = (keyword) => {
  //Limpiamos el contenedor para que las fotos no se acumulen con cada nueva busqueda
  document.querySelector("main").innerHTML = "";
  //Aqui realizamos la busqueda
  fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${keyword}&client_id=${API_KEY}`
  )
    .then((res) => res.json())
    .then((res) => {
      //Comprobamos si el array results que contiene las fotos tiene longitud, es decir, más de 0 elementos
      if (res.results.length) {
        for (const photo of res.results) {
          document.querySelector("main").innerHTML += `
            <a href="${photo.urls.full}" target="_blank">
          <img src="${photo.urls.regular}" alt="${photo.alt_description}" />
            </a>
          `;
        }
      } else{
        document.querySelector("main").innerHTML = "<h2>Intenta otra busqueda</h2>"
      }
    });
};

//Vamos a añadir un evento al botón de busqueda
document.querySelector("#searchBtn").addEventListener("click", () => {
  const keyword = document.querySelector("#searchInput").value;
  getPhotos(keyword);
  //Borramos el contenido del input para "resetearlo"
  document.querySelector("#searchInput").value = "";
});

//Se dispara la función por defecto por primera vez
getPhotos("cats");
