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
