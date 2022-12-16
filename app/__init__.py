from flask import Flask

from flask_sqlalchemy import SQLAlchemy

from flask_migrate import Migrate

db = SQLAlchemy()

app = Flask(__name__)

app.config['SECRET_KEY'] = " Yj@CaFWkX4t"

app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///localhost.db'

db.init_app(app)

migrate = Migrate(app, db)

with app.app_context():
	db.create_all()

from app import routes
