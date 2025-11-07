// crea un array contenente 3 oggetti dove ogni oggetto rappresenta un personaggio in un gioco fantasy, ogni personaggio ha 2 proprietà: nome e livello. Usando un loop a scelta aumenta il livello di ogni personaggio di uno e stampa il personaggio in console usando il console.log()
const personaggi = [
    {
        nome: 'gianni',
        livello: 123,
    },
    {
        nome: 'mario',
        livello: 21,
    },
    {
        nome: 'gianni',
        livello: 90,
    },
];

for (let i = 0; i < personaggi.length; i++) {
    personaggi[i].livello++;
    console.log(personaggi[i]);
}
