import sys

# EXERCÍCIO 1
user_name = input("Digite seu nome: ")

for letter in user_name:
    print(letter)

# -------------- // --------------

# EXERCÍCIO 2

usr_input = input("Digite uma sequência de números separados por espaço: ")
numbers = usr_input.split()
formatted_numbers = []

for number in numbers:
    if number.isdigit() is False:
        print(
            f"Erro ao somar valores, {number} é um valor inválido",
            file=sys.stderr
        )
    else:
        formatted_numbers.append(int(number))

print(sum(formatted_numbers))
