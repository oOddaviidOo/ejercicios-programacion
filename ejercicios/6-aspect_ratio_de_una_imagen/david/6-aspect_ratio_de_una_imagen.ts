import sharp from "sharp";

// Nota de David: he sabido llegar leyendo documentacion hasta la descarga de la imagen y obtener sus metadatos
// Sin embargo, no he sabido llegar a la conclusión de qué hacer con los datos para obtener el aspect ratio, 
// con lo que el resto ha sido completado con IA

async function obtenerAspectRatioDeImagen(urlImagen: string) {
  try {
    let response = await fetch(urlImagen);

    const buffer = Buffer.from(await response.arrayBuffer());
    const metadata = await sharp(buffer).metadata();
    let ancho = metadata.width;
    let alto = metadata.height;
    console.log(`La imagen tiene un ancho de ${ancho}px y un alto de ${alto}px`);
    const divisor = maximoComunDivisor(ancho, alto);
    const ratioAncho = ancho / divisor;
    const ratioAlto = alto / divisor;
    console.log(`El aspect ratio de la imagen obtenida es de ${ratioAncho}:${ratioAlto}`);
  } catch (error) {
    console.log(`Ha ocurrido un error: ${error}`);
  }
}

function maximoComunDivisor(a: number, b: number): number {
  // Mientras b no sea cero, seguimos buscando el MCD
  while (b !== 0) {
    const resto = a % b; // Calcula el resto de dividir a entre b
    a = b;               // El nuevo 'a' será el valor de 'b'
    b = resto;           // El nuevo 'b' será el resto calculado
  }
  // Cuando b es cero, 'a' es el MCD
  return a;
}

obtenerAspectRatioDeImagen(
  "https://patitasco.com/img/ybc_blog/post/guia-cuidados-gato-portada-patitasco.jpg"
);
