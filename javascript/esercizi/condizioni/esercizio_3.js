// crea una variabile 'numeroCasuale' e metti come vslore un numero casuale tra 1 e 10 poi usando un fi controlla se il numero generato è uguale a 7. Se è uguale a 7 fai il console.log di 'hai vinto!' altrimenti 'hai perso!'
const numeroCasuale = Math.floor(Math.random() * 10) + 1;
console.log('numero uscito:', numeroCasuale);

if (numeroCasuale === 7) {
    console.log('hai vinto!');
} else {
    console.log('hai perso!');
}
