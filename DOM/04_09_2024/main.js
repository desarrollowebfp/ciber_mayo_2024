//CRUD

//READ
const subtitulo = document.querySelector("#subtitulo");
console.log(subtitulo.textContent);

//UPDATE
subtitulo.textContent = "Adios";
subtitulo.className = "sub";

//DELETE
subtitulo.remove();

//CREAR
const newSubtitulo = document.createElement("h2");
newSubtitulo.textContent = "Hola, soy un h2 nuevo";
newSubtitulo.id = "newsubtitulo";
document.body.appendChild(newSubtitulo);

//

/* const animales = ["Perro", "Gato", "Loro", "Cocodrilo", "Mono"];

animales.sort();
animales.reverse()

//Creamos una lista vacia
const ul = document.createElement("ul");

//Recorremos los animales
for (const animal of animales) {
  //En cada vuelta creo un li vacio
  const li = document.createElement("li");
  //A los li vacios le damos el texto del animal
  li.textContent = animal;
  //Al final del todo añadimos estos li a la lista que tenemos fuera
  ul.appendChild(li);
}

document.body.appendChild(ul); */

const articulos = [
  {
    nombre: "Camiseta",
    imagen: "https://erea.es/wp-content/uploads/2019/01/vneck-tee-2.jpg",
    precio: "25€",
  },
  {
    nombre: "Pantalon",
    imagen:
      "https://images.napali.app/global/element-products/all/default/large/eljnp00100_element,f_crh0_frt1.jpg",
    precio: "20€",
  },
 
  {
    nombre: "Gafas",
    imagen:
      "https://media.istockphoto.com/id/867290292/es/vector/icono-de-gafas-de-sol-icono-negro-minimalista-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=jWQCflkbUQI80FQ5wYGVhwFB2iFDf9MgypZBNrwST0g=",
    precio: "10€",
  },
  {
    nombre: "Gafas",
    imagen:
      "https://media.istockphoto.com/id/867290292/es/vector/icono-de-gafas-de-sol-icono-negro-minimalista-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=jWQCflkbUQI80FQ5wYGVhwFB2iFDf9MgypZBNrwST0g=",
    precio: "10€",
  },
  {
    nombre: "Gafas",
    imagen:
      "https://media.istockphoto.com/id/867290292/es/vector/icono-de-gafas-de-sol-icono-negro-minimalista-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=jWQCflkbUQI80FQ5wYGVhwFB2iFDf9MgypZBNrwST0g=",
    precio: "10€",
  },
  {
    nombre: "Gafas",
    imagen:
      "https://media.istockphoto.com/id/867290292/es/vector/icono-de-gafas-de-sol-icono-negro-minimalista-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=jWQCflkbUQI80FQ5wYGVhwFB2iFDf9MgypZBNrwST0g=",
    precio: "10€",
  },
];

const ul = document.createElement("ul");

for (const articulo of articulos) {
  const li = document.createElement("li");

  const h2 = document.createElement("h2");
  h2.textContent = articulo.nombre;
  li.appendChild(h2);

  const img = document.createElement("img");
  img.src = articulo.imagen;
  img.alt = articulo.nombre;
  li.appendChild(img);
  
  const p = document.createElement("p");
  p.textContent = articulo.precio;
  li.appendChild(p);

  ul.appendChild(li);
}

document.body.appendChild(ul);