#!C:\Users\deras\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\python.exe

import os, json
from urllib.parse import parse_qs
import sys
import mysql.connector

# Obtener los parametros que envía el formulario
parameter = parse_qs(os.environ.get('QUERY_STRING'))

    # -------- Recibe como parámetros el nombre de la taba sobre la que hacer la consulta, el filtro ya creado como string y los valores del filtro como un array --------
database_connection = mysql.connector.connect(host="localhost",user="student",password="student",database="student")
def custom_query_fetch(values): # Permite crear una consulta con un filtro más complejo a la bdd. Devuelve los registros que coincidan con el filtro
    db_cursor = database_connection.cursor() # Crea un cursor
    query = f"SELECT course,grade FROM courses WHERE student_id={values}"
    db_cursor.execute(query) # Ejecuta la consulta SQL rellenando los %s con las posiciones del array values
    result = db_cursor.fetchall() # Guarda todos los registros de la consulta en la variable
    query2 = f"SELECT name FROM students WHERE id={values}"
    db_cursor.execute(query2) # Ejecuta la consulta SQL rellenando los %s con las posiciones del array values
    result2 = db_cursor.fetchall() # Guarda todos los registros de la consulta en la variable

    result2.append(result)
    sys.stderr.write(str(query)+"\n") # Escribe la consulta completa en el log de errores de apache
    db_cursor.close() # Cierra el cursor
    return result2


print("Content-type: text/html\n")
print(json.dumps(custom_query_fetch(parameter["id"][0])))
database_connection.close()