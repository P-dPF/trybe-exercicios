# EXERCÍCIO 1
class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.ventilador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        if self.ventilador:
            return f"{self.nome} possui o ventilador {self.ventilador.nome}"
        return f"{self.nome} não possui o ventilador"


class Ventilador:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco


ventilador_de_teto = Ventilador("Arno", 50)

pessoa_exemplo = Pessoa("Pedro", 150)

pessoa_exemplo.comprar_ventilador(ventilador_de_teto)

print(pessoa_exemplo)
