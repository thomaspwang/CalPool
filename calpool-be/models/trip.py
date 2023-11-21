from models import db

class Trip(db.Document):
    start_location = db.StringField(required=True)
    end_location = db.StringField(required=True)
    start_time = db.DateTimeField(required=True)
    end_time = db.DateTimeField(required=True)
    lower_bound = db.IntField(required=True)
    upper_bound = db.IntField(required=True)
    max_people = db.IntField(required=True)
    comments = db.StringField()
    owner = db.ReferenceField('User', required=True)
    participants = db.ListField(db.ReferenceField('User'))