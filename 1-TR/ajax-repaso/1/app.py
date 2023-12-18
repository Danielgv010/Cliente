#!C:\Users\deras\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\python.exe

import json

print("Content-type: text/html\n")

data = [["Pepe",22,"Madrid"],["Ana",12,"Barcelona"]]

print(json.dumps(data))