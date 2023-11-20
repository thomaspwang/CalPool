from models import db

class User(db.Document):
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True)
    first_name = db.StringField(required=True)
    last_name = db.StringField(required=True)
    gender = db.StringField(required=True)
    phone_number = db.StringField(required=True)
    graduation_year = db.IntField(required=True)
    major = db.StringField(required=True)
    trips_owned = db.ListField(db.ReferenceField('Trip'))
    trips_participating = db.ListField(db.ReferenceField('Trip'))