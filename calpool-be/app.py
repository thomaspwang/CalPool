from flask import Flask, request, jsonify, session
from flask_cors import CORS
import datetime as datetime
import bcrypt
from mongoengine import NotUniqueError

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


# Signup
@app.route('/signup', methods=['POST'])
def signup():
    password = request.json['password'].encode()
    hashedPassword = bcrypt.hashpw(password, bcrypt.gensalt())
    try:
        user = User(email=request.json['email'], password=hashedPassword, first_name=request.json['first_name'], last_name=request.json['last_name'], gender=request.json['gender'], phone_number=request.json['phone_number'], graduation_year=request.json['graduation_year'], major=request.json['major']).save()
    except NotUniqueError:
        return jsonify({"error": "This email is already registered."}), 409
    except Exception as e:
        return jsonify({'error': str(e)})
    return jsonify({'user_id': str(user.id)})
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
    app.run(debug=True)
