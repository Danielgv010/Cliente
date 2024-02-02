#!C:\Users\zx22student3206\AppData\Local\Programs\Python\Python311\python.exe

import cgi
import json

# Datos de los equipos
teams = {
    "Real Madrid": {"stadium": "Santiago Bernabéu", "city": "Madrid"},
    "FC Barcelona": {"stadium": "Camp Nou", "city": "Barcelona"},
    "Atletico Madrid": {"stadium": "Wanda Metropolitano", "city": "Madrid"},
    "Sevilla FC": {"stadium": "Ramón Sánchez-Pizjuán", "city": "Sevilla"},
    "Valencia CF": {"stadium": "Mestalla", "city": "Valencia"}
}

# Obtener el nombre del equipo de la solicitud GET
form = cgi.FieldStorage()
team_name = form.getvalue("team")

# Verificar si el nombre del equipo existe en los datos
if team_name in teams:
    team_info = teams[team_name]
    # Convertir la información del equipo a formato JSON
    team_json = json.dumps(team_info, indent=2)
else:
    team_json = json.dumps({"error": "Team not found"}, indent=2)

# Imprimir el encabezado HTTP y el JSON resultante
print("Content-type: application/json\n")
print(team_json)
