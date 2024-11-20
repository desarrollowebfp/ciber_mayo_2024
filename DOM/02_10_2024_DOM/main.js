const Header = () => `
  <header>
    <h1>Componentes</h1>
  </header>
`;

const Hero = (img, alt) => `
<section class="hero">
  <img src="${img}" alt="${alt}"/>
</section>
`;

/* const Avatar = (alt, img = "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg" ) => {
  return `
  <div class="avatar">
    <img src="${img}" alt="${alt}" />
  </div>
  `;
}; */

const colors = ["crimson", "blue", "cyan", "grey", "black"];

const Avatar = (alt, img) => {
  if (img != undefined) {
    return `
  <div class="avatar">
    <img src="${img}" alt="${alt}" />
  </div>
  `;
  } else {
    return `
  <div class="avatar" style="background-color: ${
    colors[Math.round(Math.random(colors.length))]
  }">
    <h2>${alt[0]}</h2>
  </div>
  `;
  }
};

const Button = (text, size = "medium") => {
  if (size === "small") {
    return `
    <button class="small">${text}</button>
    `;
  } else if (size === "medium") {
    return `
    <button class="medium">${text}</button>
    `;
  } else if (size === "large") {
    return `
    <button class="large">${text}</button>
    `;
  } else {
    return `
    <button class="medium">${text}</button>
    `;
  }
};

const init = () => {
  document.body.innerHTML = `
  ${Header()}
  ${Hero(
    "https://www.spain.info/.content/imagenes/cabeceras-grandes/castilla-leon/acueducto-segovia-s226137160.jpg",
    "El acueducto de Segovia"
  )}
    ${Avatar("Spiderman", "https://avatarfiles.alphacoders.com/375/375271.png")}
    ${Avatar("Spiderman")}
    ${Button("Register")}
    ${Button("Login", "large")}
    ${Button("Logout", "small")}
    ${Button("Contact", "medium")}
  `;
};

init();
