/*Invertir un arreglo usando el bucle for:*/
// let arreglo = [1, 2, 3, 4, 5];
// let arregloInvertido = [];

// for (let i = arreglo.length - 1; i >= 0; i--) {
//   arregloInvertido.push(arreglo[i]);
// }

// console.log(arregloInvertido);

/*Calcula la suma de todos los elementos de un arreglo.*/
// let arregloSum = [1, 2, 3, 4, 5];
// let sumatoria = 0;

// for (let i = 0; i < arregloSum.length; i++) {
//   sumatoria += arregloSum[i];
// }
// console.log(sumatoria);

/* 
Encuentra el número mayor de un arreglo. 
*/
// let mayor = [1, 2, 3, 4, 5, 6];
// let numMayor = Math.max(...mayor);
// console.log(numMayor);

/* 
Encuentra todos los números pares de un arreglo y crear un arreglo nuevo con
ellos. 
*/
// let pares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newPares = [];

// for (let i = 1; i < pares.length; i++) {
//   if (i % 2 === 0) {
//     newPares.push(i);
//   }
// }
// console.log(newPares);

/*
Escriba un programa en JavaScript para mostrar el nombre del libro y el
nombre del autor de los libros que tengan el estado de lectura “true”.
*/

const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
for (let i = 0; i < library.length; i++) {
  if (library[i].readingStatus === true) {
    console.log(`Autor : ${library[i].author} - Title : ${library[i].title}`);
  }
}
