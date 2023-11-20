from flask import Flask, request, jsonify, session
from flask_cors import CORS
import datetime as datetime

from models import db
from models.user import User
from models.trip import Trip
from datetime import datetime

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

@app.route('/create_trip', methods=['POST'])
def create_carpool():
    data = request.json
    start_location = data['pickup']
    end_location = data['destination']
    start_time = data['depart']
    end_time = data['arrive']
    lower_bound = data['lowerBound']
    upper_bound = data['upperBound']
    max_people = data['people']
    comments = data['comments']

    print(start_time)
    print(end_time)

    # Hardcoded
    current_user = User.objects(email="fake@gmail.com").first()

    new_trip = Trip(
        start_location=start_location,
        end_location=end_location,
        start_time = datetime.strptime(start_time, '%m/%d/%y %H:%M'),
        end_time= datetime.strptime(end_time, '%m/%d/%y %H:%M'),
        lower_bound=lower_bound,
        upper_bound=upper_bound,
        max_people=max_people,
        comments=comments,
        owner=current_user)

    new_trip.save()

    return "done"

if __name__ == "__main__":
    app.run(debug=True)
