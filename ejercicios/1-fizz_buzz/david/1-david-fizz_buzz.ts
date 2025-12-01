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
for (let i = 1; i <= 100; i++) {
  const divisibleBy3 = i % 3 === 0;
  const divisibleBy5 = i % 5 === 0;
  
  let result = "";
  
  if (divisibleBy3) result += "fizz";
  if (divisibleBy5) result += "buzz";
  
  console.log(result || i);
}
