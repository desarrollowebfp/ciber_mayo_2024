for (let i = 0; i < 3; i++) {
  console.log("Hola " + i);
}

//EMPIEZA EL BUCLE
// i = 0; SE CUMPLE; EN LA SIGUIENTE AÑADO 1 -> Hola 0
// i = 1; SE CUMPLE; EN LA SIGUIENTE AÑADO 1 -> Hola 1
// i = 2; SE CUMPLE; EN LA SIGUIENTE AÑADO 1 -> Hola 2
// i = 3; NO SE CUMPLE -> SE ROMPE EL BUCLE

//
const libros = [
  "Dune",
  "El nombre de Viento",
  "El Marciano",
  "Berserk",
  "Dracula",
];

for (let i = 0; i < libros.length; i++) {
  const libro = libros[i];
  console.log(libro);
}

for (const libro of libros) {
  console.log(libro);
}

//

const numbers = [1, 2, 3, 4, 5, 50, 60, 74, 3, 24, 1, 2, 3, 4, 5, 50, 60, 74, 3, 24, 1, 2, 3, 4, 5, 50, 60, 74, 3, 24];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  total += number;
}

console.log(total);
