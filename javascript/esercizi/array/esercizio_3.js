/*
data la seguente matrice const matrice = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]; fare il console.log del numero centrale (5)
*/

const matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [7, 8, 9],
];

if (matrice.length % 2 !== 0) {
    const rigaCentrale = Math.ceil(matrice.length / 2) - 1; // questo è uguale a 1        

    if (matrice[rigaCentrale].length % 2 !== 0) {
        const numeroCentrale = Math.ceil(matrice[rigaCentrale].length / 2) - 1;
    
        console.log(matrice[rigaCentrale][numeroCentrale]);
    }
}
