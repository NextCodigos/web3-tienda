// Defining a function called operation that takes two numbers and a callback function as parameters
// Definiendo una función llamada operation que toma dos números y una función de devolución de llamada como parámetros

const operation = (numero1, numero2, callback) => {
      // Invocando la función de devolución de llamada con los números proporcionados y devolviendo el resultado

  // Invoking the callback function with the provided numbers and returning the result
  return callback(numero1, numero2);
}
// Llamando a la función operation con diferentes funciones de devolución de llamada para realizar suma, multiplicación y resta

// Calling the operation function with different callback functions to perform addition, multiplication, and subtraction
operation(1,3, (a,b) => a+b );
operation(1,3, (a,b) => a*b );
operation(1,3, (a,b) => a-b );
console.log(operation(1,3, (a,b) => a+b ));
console.log(operation(1,3, (a,b) => a*b ));
console.log(operation(1,3, (a,b) => a-b ));