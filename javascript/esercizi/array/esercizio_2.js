// data una lista come questa: const colori = ['rosso', 'verde', 'blu', 'giallo']; controllare se il blu esiste nella lista e in caso positivo fare il console.log di 'blu trovato!' poi sostituire il verde con il viola e infine fare il console.log della lista aggiornta
const colori = ['rosso', 'verde', 'blu', 'giallo'];

// Controllo se 'blu' esiste nella lista
if (colori.includes('blu')) {
    console.log('blu trovato!');
}

// Sostituisco 'verde' con 'viola'
const indiceVerde = colori.indexOf('verde');
if (indiceVerde !== -1) {
    colori[indiceVerde] = 'viola';
}

// Stampo la lista aggiornata
console.log(colori);
