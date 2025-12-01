// Código original:
// let numeros: number[] = [0, 1];
// for (let i = 0; i < 50; i++) {
//   console.log(`Numero ${i+1}: ${numeros[i]}`);
//   numeros.push(numeros[numeros.length - 1] + numeros[numeros.length - 2]);
// }

// Optimización:
// - No es necesario almacenar toda la secuencia, solo los dos últimos valores.
// - Menor uso de memoria y más eficiente para secuencias largas.
// - La salida se mantiene igual.

let a = 0, b = 1;
for (let i = 0; i < 50; i++) {
  console.log(`Numero ${i+1}: ${a}`);
  const next = a + b;
  a = b;
  b = next;
}