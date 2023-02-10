def fizz_buzz(numbers_list):
    fizz_buzz_list = []

    for number in numbers_list:
        if number % 3 == 0 and number % 5 == 0:
            fizz_buzz_list.append("FizzBuzz")
        elif number % 3 == 0:
            fizz_buzz_list.append("Fizz")
        elif number % 5 == 0:
            fizz_buzz_list.append("Buzz")
        else:
            fizz_buzz_list.append(number)

    return fizz_buzz_list


def test_fizz_buzz():
    assert fizz_buzz([1, 2, 3]) == [1, 2, "Fizz"]
    assert fizz_buzz([1, 5, 2]) == [1, "Buzz", 2]
    assert fizz_buzz([15, 7, 2]) == ["FizzBuzz", 7, 2]
