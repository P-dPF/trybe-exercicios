def fizz_buzz(numbers_list):
    fizz_buzz_list = []

    for number in numbers_list:
        if number % 3 == 0:
            fizz_buzz_list.append("Fizz")
        else:
            fizz_buzz_list.append(number)

    return fizz_buzz_list


def test_fizz_buzz():
    assert fizz_buzz([1, 2, 3]) == [1, 2, "Fizz"]
