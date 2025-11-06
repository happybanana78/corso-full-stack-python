// esercizio 1
// crea un oggetto di nome 'persona' e assegnali le proprietà nome, età e colore preferito. Poi fa il console.log di questa frase 'Il mio nome è _______ e ho ______ anni' sostituendo i ____ con i valori contenuti nell'oggetto. Infine aggiungere all'oggetto la propietà 'hobby' e fare il console.log di tutto l'oggetto
const persona = {
    nome: 'leonardo',
    età: 26,
    colorePreferito: 'rosso',
}
console.log(`Il mio nome è ${persona.nome} e ho ${persona.età} anni`);
persona.hobby = 'programmazione';
console.log(persona);

// esercizio 2
// dichiara un oggetto come questo const macchina = { brand: "Tesla", modello: "Model 3", anno: 2022 } 
// fai il console.log del brand e del modello. Cambia l'anno da 2022 a 2023. Aggiungi  la proprietà 'colore'. 
// Elimina la proprietà 'modello' e infine fai il console.log di tutto l'oggetto macchina
const macchina = {
    brand: "Tesla", 
    modello: "Model 3", 
    anno: 2022,
}
console.log('brand', macchina.brand);
console.log('modello', macchina.modello);

macchina.anno = 2023;
macchina.colore = 'rosso';

delete macchina.modello;
console.log(macchina);
