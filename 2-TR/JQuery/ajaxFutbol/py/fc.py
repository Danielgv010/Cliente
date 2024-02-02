#!C:\Users\zx22student3206\AppData\Local\Programs\Python\Python311\python.exe

import json

# Crear un diccionario con los nombres de los equipos
teams_dictionary = {"teams": ["Real Madrid", "FC Barcelona", "Atletico Madrid", "Sevilla FC", "Valencia CF"]}

# Convertir el diccionario a formato JSON
teams_json = json.dumps(teams_dictionary, indent=2)

# Imprimir el JSON resultante
print("Content-type: application/json\n")
print(teams_json)