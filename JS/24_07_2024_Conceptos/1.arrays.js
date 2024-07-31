const movies = ["Matrix", "Terminator", "Dune", "Batman"];
console.log(movies[0]);
console.log(movies.length);

// Metodos que modifican el array
movies.pop();
console.log(movies);

movies.push("Deadpool", "Longlegs");
console.log(movies);

movies.shift();
console.log(movies);

movies.unshift("Star Wars");
console.log(movies);

movies.reverse();
console.log(movies);

movies.sort();
console.log(movies);

movies.splice(2, 2, "Dracula");
console.log(movies);

// No modifican el array

console.log(movies.indexOf("Dracul"));
console.log(movies.includes("Apocalypto"));
const newMovies = movies.slice(1, 3);
console.log(newMovies)