// esercizio 1
// creare una lista come questa: const punteggi = [80, 95, 70, 100]; poi aggiungere un punteggio di 85 alla lista, poi fare il console.log del primo e dell'ultimo elemento e infine fare il console.log della media dei punteggi
const punteggi = [80, 95, 70, 100];
punteggi.push(85);
console.log('primo elemento', punteggi[0]);
console.log('ultimo elemento', punteggi[punteggi.length - 1]);
const somma = punteggi[0] + punteggi[1] + punteggi[2] + punteggi[3] + punteggi[4];
//const somma = punteggi.reduce((acc, curr) => acc + curr, 0);
const media = somma / punteggi.length;
console.log('media', media);
