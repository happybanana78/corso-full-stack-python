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
