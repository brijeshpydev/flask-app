from app import app, db

# password save
class Password(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	key = db.Column(db.String)
	time_stamp = db.Column(db.String)
	password = db.Column(db.String, nullable=True)
	messege = db.Column(db.String)

	def __repr__(self):
		return "<Messege %r >" % self.messege
		