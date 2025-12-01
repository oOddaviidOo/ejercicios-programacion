// CÓDIGO ORIGINAL - COMENTADO
// function sonAnagramas(palabra1: string, palabra2: string): boolean {
//   if (palabra1.toLocaleLowerCase() === palabra2.toLocaleLowerCase()) {
//     return false;
//   }
//   return (
//     palabra1.toLowerCase().split("").sort().join("") ===
//     palabra2.toLowerCase().split("").sort().join("")
//   );
// }

// CÓDIGO OPTIMIZADO
function sonAnagramas(palabra1: string, palabra2: string): boolean {
  // Normalizar a minúsculas una sola vez (optimización #1)
  const p1 = palabra1.toLowerCase();
  const p2 = palabra2.toLowerCase();

  // Verificar si son exactamente iguales (optimización #2: early return)
  if (p1 === p2) {
    return false;
  }

  // Verificar longitud antes de ordenar (optimización #3: early return)
  if (p1.length !== p2.length) {
    return false;
  }

  // Ordenar y comparar (optimización #4: evitar join innecesario)
  return p1.split("").sort().join("") === p2.split("").sort().join("");
}

console.log(`Amor y Roma son Anagramas?: ${sonAnagramas("Amor", "Roma")}`);
console.log(`Casa y Saca son Anagramas?: ${sonAnagramas("Casa", "Saca")}`);
console.log(`Casa y Casa son Anagramas?: ${sonAnagramas("Casa", "Casa")}`);
console.log(`Perro y Pero son Anagramas?: ${sonAnagramas("Perro", "Pero")}`);
