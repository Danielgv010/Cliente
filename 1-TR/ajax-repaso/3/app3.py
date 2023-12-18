#!C:\Users\deras\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\python.exe

import os, json
from urllib.parse import parse_qs
import sys
import mysql.connector

# Obtener los parametros que envía el formulario
parameter = parse_qs(os.environ.get('QUERY_STRING'))

    # -------- Recibe como parámetros el nombre de la taba sobre la que hacer la consulta, el filtro ya creado como string y los valores del filtro como un array --------
database_connection = mysql.connector.connect(host="localhost",user="student",password="student",database="student")
def custom_query_fetch(course, grade, student_id): # Permite crear una consulta con un filtro más complejo a la bdd. Devuelve los registros que coincidan con el filtro
    db_cursor = database_connection.cursor() # Crea un cursor
    query = "INSERT INTO courses(course,grade,student_id) values (%s,%s,%s)"
    values = [course,grade,student_id]
    sys.stderr.write(str(query)+"\n") # Escribe la consulta completa en el log de errores de apache
    db_cursor.execute(query,values) # Ejecuta la consulta SQL rellenando los %s con las posiciones del array values
    database_connection.commit()

    db_cursor.close() # Cierra el cursor

custom_query_fetch(parameter["course"][0], parameter["grade"][0], parameter["id"][0])
print("Content-type: text/html\n")
print(json.dumps(True))
database_connection.close()