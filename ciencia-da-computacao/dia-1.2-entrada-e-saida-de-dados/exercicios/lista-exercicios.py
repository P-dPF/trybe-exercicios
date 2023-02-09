import random
import json
import csv

# EXERCÍCIO 1


def print_name_ladder():
    name = input("Digite seu nome: ")
    name_length = len(name)
    for counter in range(name_length):
        if counter == 0:
            print(name)
        else:
            print(name[: - counter])


# -------------- // --------------

# EXERCÍCIO 2


def word_guess_game():
    word1 = 'navios'
    word2 = 'piscina'
    word3 = 'habitar'

    random_word = random.choice([word1, word2, word3])
    MAX_CHANCES = 3
    player_guesses = []

    while len(player_guesses) < MAX_CHANCES:
        print(
            "Adivinhe a palavra embaralhada abaixo",
            "".join(random.sample(random_word, len(random_word)))
        )
        player_guesses.append(input("Adivinhe a palavra embaralhada acima: "))

    if random_word in player_guesses:
        print(f"Parabéns, você acertou! A palavra era {random_word}")
    else:
        print(f"Errou! A palavra era {random_word}")


# -------------- // --------------

# EXERCÍCIO 3


def word_guess_game_from_file():
    with open('./exercicios/word_list.txt', mode='w') as file:
        file.writelines(['navios\n', 'piscina\n', 'habitar'])

    word_list = []

    with open('./exercicios/word_list.txt', mode='r') as file:
        content = file.read().split('\n')
        for line in content:
            word_list.append(line)

    random_word = random.choice(word_list)
    MAX_CHANCES = 3
    player_guesses = []

    while len(player_guesses) < MAX_CHANCES:
        print(
            "Adivinhe a palavra embaralhada abaixo",
            "".join(random.sample(random_word, len(random_word)))
        )
        player_guesses.append(input("Adivinhe a palavra embaralhada acima: "))

    if random_word in player_guesses:
        print(f"Parabéns, você acertou! A palavra era {random_word}")
    else:
        print(f"Errou! A palavra era {random_word}")


# -------------- // --------------

# EXERCÍCIO 3


def get_books_percentages():
    books_by_categories = {}
    total_books = 0

    with open('./exercicios/books_list.json') as file:
        file_content = json.load(file)
        total_books = len(file_content)

        for book in file_content:
            for category in book['categories']:
                if category not in books_by_categories:
                    books_by_categories[category] = 0
                books_by_categories[category] += 1

    for cat, quantity in books_by_categories.items():
        books_by_categories[cat] = (quantity / total_books) * 100

    with open(
        './exercicios/books_by_categories.csv', 'w', encoding='utf-8'
    ) as csv_file:
        writer = csv.writer(csv_file)

        headers = ['categoria', 'porcentagem']

        writer.writerow(headers)

        for categ, percentage in books_by_categories.items():
            row = [categ, percentage]
            writer.writerow(row)


get_books_percentages()
