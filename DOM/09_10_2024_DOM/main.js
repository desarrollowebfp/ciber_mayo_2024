const Home = () => {
  document.querySelector("main").innerHTML = `
  <section class="home">
    <h2>Home</h2>
  </section>
  `;
};

const Gallery = () => {
  document.querySelector("main").innerHTML = `
  <section class="gallery">
    <h2>Gallery</h2>
  </section>
  `;
};

const Contact = () => {
  document.querySelector("main").innerHTML = `
  <section class="contact">
    <h2>Contact</h2>
    <p>Email me: spa@gmail.com</p>
  </section>
  `;
};

//Pintamos por defecto Home
Home();

//Vamos a añadirle listeners a los links
document.querySelector("#homeLink").addEventListener("click", (ev) => {
  ev.preventDefault();
  //Como no queremos que recargue estamos empujando a la fuerza en el historial como ultimo argumento el path de las rutas de nuestros href para que se reflejen en el navegador pero que no recarguen ni naveguen
  window.history.pushState({}, "", ev.target.href);
  Home();
});
document.querySelector("#galleryLink").addEventListener("click", (ev) => {
  ev.preventDefault();
  window.history.pushState({}, "", ev.target.href);
  Gallery();
});
document.querySelector("#contactLink").addEventListener("click", (ev) => {
  ev.preventDefault();
  window.history.pushState({}, "", ev.target.href);
  Contact();
});

//Tenemos una funcion que pinta las diferentes paginas dependiendo de la ruta
const loadPage = (path) => {
  if (path === "/") {
    Home();
  } else if (path === "/gallery") {
    Gallery();
  } else if (path === "/contact") {
    Contact();
  } else {
    document.querySelector("main").innerHTML = "<h2>Not Found</h2>";
  }
};

window.addEventListener("popstate", () => {
  loadPage(window.location.pathname)
})

document.addEventListener("DOMContentLoaded", (ev) => {
  ev.preventDefault()
  loadPage(window.location.pathname)
})