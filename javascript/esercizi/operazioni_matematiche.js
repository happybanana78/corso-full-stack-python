// esercizio 1
// Creare due variabili. x = 9 e y = 4. Stampare con il console.log() la loro somma, la loro differenza e il resto della loro divisione.
const x = 9;
const y = 4;
console.log('somma', x + y);
console.log('differenza', x - y);
console.log('resto della divisione', x % y);

// esercizio 2
// dichiarate una variabile soldi (let soldi = 50;) fate poi il console.log() delle seguenti operazioni: aggiungere 50, sottrarre 10, moltiplicare per 2
let soldi = 50;
soldi += 50;
console.log('aggiunta di 50', soldi);

soldi -= 10;
console.log('sotratto 10', soldi);

soldi *= 2;
console.log('moltiplicato per 2', soldi);

// esercizio 3
// crea due variabili, la prima con valore di 10 e la seconda con valore di 100. Fai poi il console.log() della somma tra i due numeri e genera poi un numero casuale tra il primo e il secondo numero e fail il console.log() del risultato
const numeroA = 10;
const numeroB = 100;
console.log('somma', numeroA + numeroB);
console.log('numero a caso da 10 a 100', Math.floor(Math.random() * (numeroB - numeroA + 1)) + numeroA);
