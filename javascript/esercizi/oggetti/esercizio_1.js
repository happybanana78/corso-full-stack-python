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
