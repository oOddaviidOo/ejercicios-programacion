// Versión propia
// Código original:
// function calcularAreaPoligono(
//   tipo: "triangulo" | "cuadrado" | "rectangulo",
//   ancho: number,
//   alto: number
// ): number {
//   switch (tipo) {
//     case "triangulo":
//       return (ancho * alto) / 2;
//     case "cuadrado":
//       return ancho * ancho;
//     case "rectangulo":
//       return ancho * alto;
//   }
// }
// console.log(`Base del triangulo: ${calcularAreaPoligono("triangulo", 10, 10)}`);
// console.log(`Base del cuadrado: ${calcularAreaPoligono("cuadrado", 10, 10)}`);
// console.log(`Base del rectangulo: ${calcularAreaPoligono("rectangulo", 10, 12)}`);

// Solución optimizada:
// - Usa un solo parámetro polimórfico (objeto) para representar cada polígono, lo que facilita la extensión a más tipos y evita parámetros innecesarios.
// - Mejora la claridad y reduce errores por orden de argumentos.
// - Permite validaciones y escalabilidad más sencilla.

type Poligono =
  | { tipo: "triangulo"; base: number; altura: number }
  | { tipo: "cuadrado"; lado: number }
  | { tipo: "rectangulo"; ancho: number; alto: number };

function areaPoligono(poligono: Poligono): number {
  switch (poligono.tipo) {
    case "triangulo":
      // Área = (base * altura) / 2
      return (poligono.base * poligono.altura) / 2;
    case "cuadrado":
      // Área = lado * lado
      return poligono.lado * poligono.lado;
    case "rectangulo":
      // Área = ancho * alto
      return poligono.ancho * poligono.alto;
    default:
      throw new Error("Tipo de polígono no soportado");
  }
}

console.log("Área triángulo:", areaPoligono({ tipo: "triangulo", base: 10, altura: 10 }));
console.log("Área cuadrado:", areaPoligono({ tipo: "cuadrado", lado: 10 }));
console.log("Área rectángulo:", areaPoligono({ tipo: "rectangulo", ancho: 10, alto: 12 }));
