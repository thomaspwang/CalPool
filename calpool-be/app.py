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
@app.route("/update_profile", methods=["POST"])
def update_profile():
    user = User.objects().get(id=request.json['id'])
    if not user:
        return jsonify({"error: User not found"})
    
    else:
        user.update(gender=request.json['gender'], major=request.json['major'], graduation_year=request.json['graduation_year'] ) 
    user = User.objects().get(id=request.json['id'])
    return jsonify(user)


if __name__ == "__main__":
    app.run(debug=True)
