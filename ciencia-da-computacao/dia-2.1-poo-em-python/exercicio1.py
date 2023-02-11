class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        while self.__volume <= 99:
            self.__volume += 1

    def diminuir_volume(self):
        while self.__volume >= 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if 1 <= canal <= 99:
            self.__canal = canal
        raise ValueError("Canal inexistente")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
