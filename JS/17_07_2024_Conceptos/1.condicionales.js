const deberes = true;
const limpiar = false;

if (deberes && limpiar) {
  console.log("Bajas al patio");
} else {
  console.log("A tu cuarto");
}

//

const age = 1220;

if (age > 0 && age < 18) {
  console.log("Eres joven");
} else if (age >= 18 && age < 60) {
  console.log("Eres adulto");
} else if (age >= 60 && age < 140) {
  console.log("Eres mayor");
} else {
  console.log("No entiendo la edad que tienes");
}

switch (age) {
  case age > 0 && age < 18:
    console.log("Eres joven");
    break;
  case age >= 18 && age < 60:
    console.log("Eres adulto");
    break;
  case age >= 60 && age < 140:
    console.log("Eres mayor");
    break;
  default:
    console.log("No entiendo la edad que tienes");
    break;
}

deberes && limpiar ? console.log("Bajas al patio") : console.log("A tu cuarto");
