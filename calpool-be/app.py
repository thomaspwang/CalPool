from flask import Flask, request, jsonify, session
from flask_cors import CORS
import datetime as datetime
import bcrypt
from mongoengine import NotUniqueError

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
@app.route("/update_profile", methods=["POST"])
def update_profile():
    user = User.objects().get(id=request.json['id'])
    if not user:
        return jsonify({"error: User not found"})
    
    else:
        user.update(first_name=request.json["first name"], last_name=request.json["last name"], gender=request.json['gender'], graduation_year=request.json['graduation_year'] ) 
    user = User.objects().get(id=request.json['id'])
    return jsonify(user)


@app.route('/create_trip', methods=['POST'])
def create_trip():
    try:
        data = request.json
        start_location = data['pickup']
        end_location = data['destination']
        start_time = data['depart']
        end_time = data['arrive']
        lower_bound = data['lowerBound']
        upper_bound = data['upperBound']
        max_people = data['people']
        comments = data['comments']

        # Hardcoded
        current_user = User.objects(email="fake@gmail.com").first()
        # current_user = User.objects(id=get_id()).first()

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
        
        # add_user_to_carpool(new_trip) 

        new_trip.save()
        return jsonify({'trip_id': str(new_trip.id)})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Add user to carpool object
def add_carpool_to_user(trip):
    current_user = User.objects(id=get_id()).first()
    current_user.trips_participating.append(trip)
    current_user.save()

# Signup
@app.route('/signup', methods=['POST'])
def signup():
    password = request.json['password'].encode()
    hashedPassword = bcrypt.hashpw(password, bcrypt.gensalt())
    try:
        user = User(email=request.json['email'], password=hashedPassword, first_name=request.json['first_name'], last_name=request.json['last_name'], gender=request.json['gender'], phone_number=request.json['phone_number'], graduation_year=request.json['graduation_year'], major=request.json['major']).save()
        session['user_id'] = str(user.id)
    except NotUniqueError:
        return jsonify({"error": "This email is already registered."}), 409
    except Exception as e:
        return jsonify({'error': str(e)})
    return jsonify({'user_id': str(user.id)})

# Login
@app.route('/login', methods=['POST'])
def login():
    try:
        user = User.objects.get(email=request.json['email'])
        if bcrypt.checkpw(request.json['password'].encode(), user.password.encode()):
            session['user_id'] = str(user.id)
            return jsonify({'user_id': str(user.id)})
        else:
            return jsonify({'error': 'Incorrect password'}), 401
    except User.DoesNotExist:
        return jsonify({'error': 'User not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

#Get UserID
def get_id():
    try:
        user_id = session.get('user_id', 'Not set')
        return str(user_id)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
# Get User
@app.route('/get_user', methods=['GET'])
def get_user():
    try:
        user = User.objects.get(id=request.json['user_id'])
        user_data = {
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "gender": user.gender,
            "phone_number": user.phone_number,
            "graduation_year": user.graduation_year,
            "major": user.major,
            "trips_owned": [str(trip.id) for trip in user.trips_owned],
            "trips_participating": [str(trip.id) for trip in user.trips_participating]
        }
        return jsonify(user_data)
    except User.DoesNotExist:
        return jsonify({"error": "User not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5001)
