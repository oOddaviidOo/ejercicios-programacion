let palabra: string = "Bon pvto";
let caracteresSeparados: string[] = palabra.split("");
let palabraDelReves: string = "";

for (let i = caracteresSeparados.length; i > 0; i--) {
    palabraDelReves+=caracteresSeparados[i-1];
}

console.log(palabraDelReves);
