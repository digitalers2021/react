

def hola_mundo(props):
    print(props["msg"])


def llamar_funcion(func):
    data = {"msg": "hola mundo"}
    func(data)

llamar_funcion(hola_mundo)