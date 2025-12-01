// Versión propia:

// let result: string;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     result = "fizz";
//     if (i % 5 === 0) {
//         result = "fizzbuzz";
//     }
//   } else if(i % 5 === 0){
//       result = "buzz";
//   } else {
//     result="";
//   }
//   console.log(`${i}: ${result}`);
// }


// Solución optimizada por IA
// Motivos de la optimización:
// - Se evita la duplicación de lógica: en vez de usar varios if-else anidados, se construye el resultado sumando cadenas.
// - El código es más legible y fácil de mantener, ya que cada condición es independiente y clara.
// - Es más sencillo agregar nuevas reglas si fuera necesario (por ejemplo, para otros múltiplos).
// - Se reduce la cantidad de líneas y la complejidad del flujo de control.
//
// Recorre los números del 1 al 100
for (let i = 1; i <= 100; i++) {
  // Verifica si el número es divisible por 3
  const divisibleBy3 = i % 3 === 0;
  // Verifica si el número es divisible por 5
  const divisibleBy5 = i % 5 === 0;
  
  let result = "";
  // Si es divisible por 3, agrega 'fizz' al resultado
  if (divisibleBy3) result += "fizz";
  // Si es divisible por 5, agrega 'buzz' al resultado
  if (divisibleBy5) result += "buzz";
  
  // Si result no está vacío, imprime 'fizz', 'buzz' o 'fizzbuzz'.
  // Si está vacío, imprime el número original.
  console.log(result || i);
}
