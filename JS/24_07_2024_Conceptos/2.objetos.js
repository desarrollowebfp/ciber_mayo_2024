const perro = {
  nombre: "Byron",
  peso: 26,
  altura: 70,
  color: "marron y blanco",
  trucos: ["tumbarse", "sentarse", "eructar"],
  vivo: true,
};

console.log(perro.nombre);
console.log(perro["nombre"]);
console.log(perro.trucos[0]);

perro.peso = 30;
console.log(perro);

perro.raza = "Galgo + Border Collie";
console.log(perro);

delete perro.altura;
console.log(perro);