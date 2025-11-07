// scrivere una variabile 'temperatura' e assegnare un numero tra 0 e 40 (a scelta) usare un if else per stampare con il conssole.log 'freddo' se la temeperatira è minore di 15, 'ambiente' se la temperatura è tra 15 e 25 e 'caldo' se la temperatura è superiore ai 25.
const temperatura = 22;
if (temperatura < 15) {
    console.log('freddo');
} else if (temperatura >= 15 && temperatura <= 25) {
    console.log('ambiente');
} else {
    console.log('caldo');
}
