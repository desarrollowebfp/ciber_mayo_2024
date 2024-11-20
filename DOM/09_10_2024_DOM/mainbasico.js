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
document.querySelector("#homeLink").addEventListener("click", () => {
  Home();
});
document.querySelector("#galleryLink").addEventListener("click", () => {
  Gallery();
});
document.querySelector("#contactLink").addEventListener("click", () => {
  Contact();
});
