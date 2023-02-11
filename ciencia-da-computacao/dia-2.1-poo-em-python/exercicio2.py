import statistics


class Estatistica:
    @classmethod
    def media(cls, numbers_list):
        return sum(numbers_list) / len(numbers_list)

    @classmethod
    def mediana(cls, numbers_list):
        return statistics.median(numbers_list)

    @classmethod
    def moda(cls, numbers_list):
        return statistics.mode(numbers_list)
