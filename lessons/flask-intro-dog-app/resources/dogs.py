import models
from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict
from flask_login import login_user, current_user, login_required

# first argument is blueprints name
# second argument is it's import_name
dog = Blueprint('dogs', 'dog')

## INDEX ROUTE
@dog.route('/', methods=["GET"])
def get_all_dogs():
    ## find the dogs and change each one to a dictionary into a new array
    try:
        dogs = [model_to_dict(dog) for dog in models.Dog.select()]
        print(dogs)
        return jsonify(data=dogs, status={"code": 200, "message": "Success"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 401, "message": "Error getting the resources"})

## SHOW ROUTE
@dog.route('/<id>', methods=["GET"])
@login_required
def get_one_dog(id):
    print(current_user, "<-----This is the current user")
    print(id, 'reserved word?')
    dog = models.Dog.get_by_id(id)
    print(dog.__dict__)
    return jsonify(data=model_to_dict(dog), status={"code": 200, "message": "Success"})

## POST ROUTE
@dog.route('/', methods=["POST"])
def create_dogs():
    ## see request payload anagolous to req.body in express
    payload = request.get_json()
    print(type(payload), 'payload')
    dog = models.Dog.create(**payload)
    ## see the object
    print(dog.__dict__)
    ## Look at all the methods
    print(dir(dog))
    # Change the model to a dict
    print(model_to_dict(dog), 'model to dict')
    dog_dict = model_to_dict(dog)
    return jsonify(data=dog_dict, status={"code": 201, "message": "Success"})

## UPDATE ROUTE 
@dog.route('/<id>', methods=["PUT"])
def update_dog(id):
    payload = request.get_json()
    query = models.Dog.update(**payload).where(models.Dog.id==id)
    query.execute()
    return jsonify(data=model_to_dict(models.Dog.get_by_id(id)), status={"code": 200, "message": "resource updated successfully"})

## DELETE ROUTE
@dog.route('/<id>', methods=["DELETE"])
def delete_dog(id):
    query = models.Dog.delete().where(models.Dog.id==id)
    query.execute()
    return jsonify(data='resource successfully deleted', status={"code": 200, "message": "resource deleted successfully"})