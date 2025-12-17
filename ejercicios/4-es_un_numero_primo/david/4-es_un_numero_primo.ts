// Versión propia
// Código original:
// let primerosPrimos: number[] = [1, 2, 3, 5, 7];
// for (let i = 1; i <= 100; i++) {
//   let result: boolean = false;
//   if (
//     primerosPrimos.includes(i) ||
//     (i % i == 0 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0)
//   ) {
//     result = true;
//   }
//   console.log(`${i} ${result}`);
// }

// Versión optimizada por IA
// Esta versión es más eficiente porque:
// 1. Solo verifica divisores hasta la raíz cuadrada de n, reduciendo el número de operaciones.
// 2. Omite comprobaciones innecesarias (como i % i == 0, que siempre es cierto).
// 3. Evita el uso de includes y listas fijas, generalizando para cualquier rango.

function esPrimo(n: number): boolean {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  // Solo comprobamos hasta la raíz cuadrada de n
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let i = 1; i <= 100; i++) {
  console.log(`${i} ${esPrimo(i)}`);
}