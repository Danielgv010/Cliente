#!C:\Users\deras\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\python.exe

import mysql.connector
import json,sys

    # -------- Recibe como parámetros el nombre de la taba sobre la que hacer la consulta, el filtro ya creado como string y los valores del filtro como un array --------
database_connection = mysql.connector.connect(host="localhost",user="student",password="student",database="student")
def custom_query_fetch(): # Permite crear una consulta con un filtro más complejo a la bdd. Devuelve los registros que coincidan con el filtro
    db_cursor = database_connection.cursor() # Crea un cursor
    query = f"SELECT * FROM students"
    db_cursor.execute(query) # Ejecuta la consulta SQL rellenando los %s con las posiciones del array values
    result = db_cursor.fetchall() # Guarda todos los registros de la consulta en la variable

    sys.stderr.write(str(query)+"\n") # Escribe la consulta completa en el log de errores de apache
    db_cursor.close() # Cierra el cursor
    return result


print("Content-type: text/html\n")
print(json.dumps(custom_query_fetch()))
database_connection.close()