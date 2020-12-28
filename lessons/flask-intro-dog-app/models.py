import datetime
from peewee import *
from flask_login import UserMixin
# Connect to a Postgres database.
DATABASE = PostgresqlDatabase('flask_dog_app', host='localhost', port=5432)

class User(UserMixin, Model):
    username = CharField(unique=True)
    email = CharField(unique=True)
    password = CharField()
    class Meta:
        database = DATABASE

class Dog(Model):
    name = CharField()
    owner = CharField()
    breed = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)
    class Meta:
        database = DATABASE

def initialize():
    DATABASE.connect()
    DATABASE.create_tables([User, Dog], safe=True)
    print("TABLES Created")
    DATABASE.close()