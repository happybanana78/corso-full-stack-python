// esercizio 1
// fai il console.log dei numeri da 1 a 100 usando un for loop
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// esercizio 2
// fai il console.log di tutti i numeri PARI da 0 a 100 usando un while loop
let counterEsercizio = 0;

while (counterEsercizio <= 100) {
    if (counterEsercizio % 2 === 0) {
        console.log(counterEsercizio);
    }

    counterEsercizio++;
}
