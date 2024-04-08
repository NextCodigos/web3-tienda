// // Define a function named operation which takes three parameters:
// // - numero1: the first number
// // - numero2: the second number
// // - callback: a function to be executed after a delay
// const operation = (numero1, numero2, callback) => {
//   // Use setTimeout to delay the execution of the callback function
//   // by 1000 milliseconds (1 second). The callback function will receive
//   // the two numbers as arguments when it's executed.
//   return setTimeout(() => callback(numero1, numero2), 1000);
// }

// // Call the operation function with two numbers (1 and 3) and a callback function.
// // The callback function takes two parameters (a and b), adds them together, and
// // then logs the result to the console.
// operation(1, 3, (a, b) => {
//   console.log(a + b);
// });


// Define una función llamada operation que toma tres parámetros:
// - numero1: el primer número
// - numero2: el segundo número
// - callback: una función que se ejecutará después de un retraso
const operation = (numero1, numero2, callback) => {
  // Usa setTimeout para retrasar la ejecución de la función de callback
  // por 1000 milisegundos (1 segundo). La función de callback recibirá
  // los dos números como argumentos cuando se ejecute.
  return setTimeout(() => callback(numero1, numero2), 1000);
}

// Llama a la función operation con dos números (1 y 3) y una función de callback.
// La función de callback toma dos parámetros (a y b), los suma, y luego
// registra el resultado en la consola.
operation(1, 3, (a, b) => {
  console.log(a + b);
});
