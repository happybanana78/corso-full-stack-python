// crea due variabili, la prima con valore di 10 e la seconda con valore di 100. Fai poi il console.log() della somma tra i due numeri e genera poi un numero casuale tra il primo e il secondo numero e fail il console.log() del risultato
const numeroA = 10;
const numeroB = 100;
console.log('somma', numeroA + numeroB);
console.log('numero a caso da 10 a 100', Math.floor(Math.random() * (numeroB - numeroA + 1)) + numeroA);
