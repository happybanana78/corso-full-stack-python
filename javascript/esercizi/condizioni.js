// esercizio 1
// data una variabile 'numeroDaVerificare' attraverso l'uso di un if controllare se il numero sia pari o dispari e fare un console.log solo nel caso in cui il numero è pari
const numeroDaVerificare = 10;
if (numeroDaVerificare % 2 === 0) {
    console.log('numero pari');
} else {
    console.log('numero dispari');
}

// if - else in stile ternario (condizione ? secuzione positiva : esecuzione negativa)
numeroDaVerificare % 2 === 0 ? console.log('numero pari') : console.log('numero dispari');

// esercizio 2
// scrivere una variabile 'temperatura' e assegnare un numero tra 0 e 40 (a scelta) usare un if else per stampare con il conssole.log 'freddo' se la temeperatira è minore di 15, 'ambiente' se la temperatura è tra 15 e 25 e 'caldo' se la temperatura è superiore ai 25.
const temperatura = 22;
if (temperatura < 15) {
    console.log('freddo');
} else if (temperatura >= 15 && temperatura <= 25) {
    console.log('ambiente');
} else {
    console.log('caldo');
}

// esercizio 3
// crea una variabile 'numeroCasuale' e metti come vslore un numero casuale tra 1 e 10 poi usando un fi controlla se il numero generato è uguale a 7. Se è uguale a 7 fai il console.log di 'hai vinto!' altrimenti 'hai perso!'
const numeroCasuale = Math.floor(Math.random() * 10) + 1;
console.log('numero uscito:', numeroCasuale);

if (numeroCasuale === 7) {
    console.log('hai vinto!');
} else {
    console.log('hai perso!');
}
