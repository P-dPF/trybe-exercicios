from abc import ABC, abstractmethod
from math import pi as PI


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        ...

    def perimetro(self):
        ...


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (2 * self.base) + (2 * self.altura)


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return PI * self.raio**2

    def perimetro(self):
        return 2 * PI * self.raio
