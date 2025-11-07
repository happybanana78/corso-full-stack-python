while True:
    numero1 = input('Inserisci il primo numero: ')

    if numero1 == 'exit':
        print('esco dal programma')
        break

    numero2 = input('Inserisci il primo numero: ')
    operatore = input(f'Scegli un operatore tra i seguenti (*, /, +, -): ')

    # isdigit controlla che la stringa in questione sia un numero ("10" -> True |. "ciao" -> False)
    if numero1.isdigit() and numero2.isdigit():
        numero1 = float(numero1)
        numero2 = float(numero2)
    else:
        print('numero non valido')
        continue

    if numero2 == 0 and operatore == '/':
        print('0 non valido per una divisione')
        continue

    if operatore == '+':
        print('somma', numero1 + numero2)
    elif operatore == '-':
        print('sottrazione', numero1 - numero2)
    elif operatore == '*':
        print('moltiplicazione', numero1 * numero2)
    elif operatore == '/':
        print('sottrazione', numero1 / numero2)
    else:
        print('operatore non valido')
