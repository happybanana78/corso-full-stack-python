"""
Data una variabile numero_segreto uguale a un numero a vostra scelta, scrivere un programma che:

chieda continuamente all’utente di inserire un numero;

sommi tutti i numeri inseriti;

si fermi quando la somma totale supera il numero segreto;

alla fine stampi il messaggio "Hai vinto!".
"""
numero_segreto = 346

somma_utente = 0

while True:
    numero_utente = input('insersci un numero a scelta: ')

    if not numero_utente.isdigit():
        print('numero non valido.')
        continue

    somma_utente += int(numero_utente)

    if somma_utente >= numero_segreto:
        print('Hai vinto!')
        break
    