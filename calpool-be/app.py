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

@app.route('/get_all_calpools', methods=['GET'])
# get all available calpools that aren’t created by you
# or you aren’t in already (creator != current_user_id)
def get_all_calpools():
    notYourCarpools = Trip.query.filter(Trip._id != request.json["owner"]).all()
    carSpots = Trip.query.filter(Trip.max_people < len(request.json["particpants"])).all()
    if not (carSpots and notYourCarpools):
        return jsonify({"message": "No carpools available"})
    else:
        return jsonify(notYourCarpools)


if __name__ == "__main__":
    app.run(port=8000, debug=True)
