from flask import Flask, request, jsonify, session
from flask_cors import CORS
import datetime as datetime

from models import db
from models.user import User
from models.trip import Trip

# Setup

app = Flask(__name__)
app.secret_key = 'plextech'


CORS(app) # To prevent CORS errors during local development
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

app.config["MONGODB_HOST"] = "mongodb+srv://username:Password1234@calpool.rvzxgdh.mongodb.net/?retryWrites=true&w=majority"

db.init_app(app)

# Routes
@app.route('/')
def nothing():
    return "empty route"

@app.route('/ping')
def pingpong():
    return "pong"

# Carpool management
@app.route('/retrieve_upcoming', methods=['POST'])
def retrive_upcoming ():
    user = User.objects.get(id=request.json['id'])
    list = user.trips_owned + user.trips_participating

    
    if not user: 
        return jsonify({'error': 'User not found'})
    else: 
        return jsonify(list)
    
@app.route('/retrieve_past', methods=['POST'])
def retrive_past ():
    user = User.objects.get(id=request.json['id'])
    list = user.trips_owned + user.trips_participating
    
    if not user: 
        return jsonify({'error': 'User not found'})
    else: 
        return jsonify(list)

@app.route('/get_user_info', methods=['POST']) 
def get_user_info (): 
    print(request.json)
    user = User.objects.get(id=request.json['id'])
    print(jsonify(user))
    print(user.first_name)

    if not user: 
        return jsonify({'error': 'User not found'})
    else: 
        return jsonify(user)
    
# @app.route('/get_up_coming', methods=['GET']) 
# def get_
    
    



    


if __name__ == "__main__":
    app.run(port=8000, debug=True)


