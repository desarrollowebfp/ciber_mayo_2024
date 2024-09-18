//Recuperar el botón mediante DOM
const themeBtn = document.querySelector("#themeBtn");
//Vamos a añadir un escuchador
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//Recuperamos el botón del idioma
const enBtn = document.querySelector("#enBtn");
enBtn.addEventListener("click", () => {
  const h1 = document.querySelector("h1");
  h1.textContent = "DOM Events";
});

const esBtn = document.querySelector("#esBtn");
esBtn.addEventListener("click", () => {
  const h1 = document.querySelector("h1");
  h1.textContent = "Eventos en DOM";
});

//NAVIGATOR
//DOCUMENT
//BODY - HEAD
//BODY -> QUERYSELECTOR
console.log(document)