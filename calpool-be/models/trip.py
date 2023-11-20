from models import db

class Trip(db.Document):
    start_location = db.StringField(required=True)
    end_location = db.StringField(required=True)
    start_time = db.DateTimeField(required=True)
    owner = db.ReferenceField('User', required=True)
    participants = db.ListField(db.ReferenceField('User'))