# FOR LOOP

frutta = ['mela', 'pera', 'banana', 'kiwi']

# dopo 'in' sceiviamo il nostro oggetto iterabile (da ciclare) 
for frutto in frutta:
    print(frutto)

# range crea una lista di numeri che vanno da 0 fino al numero indicato escludendo il numero stesso. (crea questa roba qui: [0,1,2,3,4,5,6,7,8,9])
for numero in range(10):
    print(numero)

# WHILE LOOP

counter = 0

# il while loop usa una condizione (counter < 10) per ripetere il contenuto all'interno del while loop per un tot di volte.
# quando la condizione diventa False il while loop si ferma (in questo caso quando counter sarà uguale a 10)
while counter < 10:
    print(counter)
    counter += 1 # senza questo il ciclo continuerà all'infinito

counter2 = 0

while counter2 < 10:
    counter2 += 1

    if counter2 == 3:
        print('salto il numero 3')
        continue

    if counter2 == 8:
        print('numero 8 raggiunto, fermo il ciclo')
        break

    print('il counter al momento ha un valore di: ', counter2)

#esercizio 4

