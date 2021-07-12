import json
import mysql.connector
from typing import Optional
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.params import Body
from mysql.connector.utils import NUMERIC_TYPES
from pydantic import BaseModel

app = FastAPI()
origins = [
    "http://localhost:3000",
    "http://localhost",
    "http://localhost:8000",
    "http://127.0.0.1",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Bus(BaseModel):
    num_bus: int
    immatriculation: str
    marque: str
    genre: str
    model: str
    places_assises: int
    placesdebouts: int


@app.post("/createacc")
async def account(request: Request):
    mydb = mysql.connector.connect(
        host="localhost", user="root", password="", database="parc")
    cursor = mydb.cursor()
    body = json.loads(await request.body())
    cursor.execute(f"SELECT * FROM utilisateur WHERE email='{body['email']}'")
    res = cursor.fetchall()
    if (len(res) == 0):
        cursor.execute(
            f"INSERT INTO utilisateur (matriculeUtilisateur,Nom,motDePasse,Prenom,Email) VALUES('','{body['Nom']}','{body['Psw']}','{body['Prenom']}','{body['email']}');")
        mydb.commit()
        data = "Success"
    else:
        data = "Fail"
    return data


@app.post("/Bus/add")
def add_bus(new_bus: Bus):
    mydb = mysql.connector.connect(
        host="localhost", user="root", password="", database="parc")
    mycursor = mydb.cursor()
    mycursor.execute(
        f"INSERT INTO bus ( immatriculation, marque,genre,model,places_assises,placesdebouts) VALUES ('{new_bus.immatriculation}','{new_bus.marque}','{new_bus.genre}','{new_bus.model}','{new_bus.places_assises}','{new_bus.placesdebouts}')")
    mydb.commit()
    return "bus Added"


@app.delete("/Bus/delete/{num}")
def delete_bus(num: int):
    mydb = mysql.connector.connect(
        host="localhost", user="root", password="", database="parc")
    mycursor = mydb.cursor()
    mycursor.execute(f"delete from bus where num_bus = {num}")
    mydb.commit()
    return "bus deleted"


@app.post("/signin")
async def sign(request: Request):
    mydb = mysql.connector.connect(
        host="localhost", user="root", password="", database="parc")
    cursor = mydb.cursor()
    body = json.loads(await request.body())
    cursor.execute(
        f"SELECT * FROM utilisateur WHERE Email='{body['mail']}' AND motDePasse ='{body['pass']}'")
    result = cursor.fetchall()
    row_headers = [x[0] for x in cursor.description]
    data = []
    for res in result:
        data.append(dict(zip(row_headers, res)))
    if len(result) == 0:
        return "Failed"
    else:
        print(data)
        return data


@app.get("/Bus/{num}")
def bus_by_num(num: int):
    mydb = mysql.connector.connect(
        host="localhost", user="root", password="", database="parc")
    cursor = mydb.cursor()
    cursor.execute(
        f"SELECT num_bus,immatriculation,marque,genre,model,places_assises,placesdebouts FROM bus Where num_bus={num}")
    result = cursor.fetchall()
    return result


@app.get("/Bus/")
def fetchbus():
    mydb = mysql.connector.connect(
        host="localhost", user="root", password="", database="parc")
    cursor = mydb.cursor()
    cursor.execute(
        f"SELECT num_bus,immatriculation,marque,genre,model,places_assises,placesdebouts FROM bus;")
    result = cursor.fetchall()
    return result


@app.put("/Bus/update/")
def update_bus(new_bus: Bus):
    mydb = mysql.connector.connect(
        host="localhost", user="root", password="", database="parc")
    mycursor = mydb.cursor()
    mycursor.execute(
        f"update bus set immatriculation='{new_bus.immatriculation}', marque='{new_bus.marque}', genre='{new_bus.genre}',model='{new_bus.model}', places_assises='{new_bus.places_assises}', placesdebouts='{new_bus.placesdebouts}'  where num_bus = '{new_bus.num_bus}'")
    mydb.commit()
    return "User updated"
