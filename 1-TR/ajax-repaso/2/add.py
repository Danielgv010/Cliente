#!C:\Users\deras\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\python.exe

import os, json
from urllib.parse import parse_qs
import sys

# Obtener los parametros que envía el formulario
parameter = parse_qs(os.environ.get('QUERY_STRING'))

def parameter_validation(): # Comprueba que se hayan pasado los parámetros y los devuelve con la contraseña encriptada
    #Recupera los parámetros de la URL
    sys.stderr.write(str(os.environ.get('QUERY_STRING')))
    sys.stderr.write(str(parameter))
    name = parameter["name"][0]
    age = parameter["age"][0]
    city = parameter["city"][0]

    return name,age,city


def check_file(): # Comprueba que exista el fichero y que no esté vacío
    if not os.path.exists("data.json"): # Si el fichero no existe lo crea
        file = open("data.json","x") # Crea el fichero
        file.close()

    if os.path.getsize("data.json") == 0: # Si el fichero está vacío
        file = open("data.json",'wt') # Abre el fichero en modo sobreescritura
        file.write("[]") # Escribe [] en el fichero
        file.close()

account = parameter_validation() # Guarda los datos de la cuenta en una variable
check_file() # Comprueba la existencia del fichero y que no esté vacío

with open("data.json","r") as file: # Abre el fichero en modo lectura
    try: # Prueba a cargar el fichero json
        account_list = json.load(file)
    except: # Si está vacío crea una lista vacía
        account_list = []

account_list.append(account) # Añade la nueva cuenta a la lista de cuentas

with open("data.json","wt") as file: # Abre el fichero en modo sobreescritura
    json.dump(account_list,file) # Guarda la lista de cuentas en formato json en el fichero
