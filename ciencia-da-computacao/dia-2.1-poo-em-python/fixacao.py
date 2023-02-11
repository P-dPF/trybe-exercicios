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

# print(pessoa_exemplo)


# EXERCÍCIO 2
class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class MaquinaDeLavar(Eletrodomestico):
    pass


secador_a = Secador("Azul", 50, 20, 100)
batedeira_a = Batedeira("verde", 50, 10, 200)
maquina_de_lavar_a = MaquinaDeLavar("Azul", 70, 20, 300)

print(f"O secador {secador_a.cor} custa {secador_a.preco}")
print(f"A batedeira {batedeira_a.cor} custa {batedeira_a.preco}")
print(f"A batedeira {maquina_de_lavar_a.cor} custa {maquina_de_lavar_a.preco}")
