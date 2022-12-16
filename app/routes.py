from app import app, db 
from app import truecallerjs
from flask import request, render_template, session, make_response, redirect, jsonify
from app import auth
from app import models
from app import ip
from app import pic
from app import exiftool
import json
from app import info
import os

with app.app_context():
	db.create_all()

recv_files = "app/static/recv_files"
send_files = "app/static/send_files"
# home page
@app.route("/")
def home():
	title = info.title['main']
	anchor_list = info.anchor
	return render_template("index.html", title=title, anchor_list = anchor_list)

@app.route("/corvus")
def password():
	title = info.title['password']
	password = models.Password.query.all()
	return render_template("password.html", title=title, password = password)


@app.route("/corvus/save")
def password_save():
	password = request.args['pass']
	msg = request.args['msg']
	key = auth.key(10)
	time_stamp = auth.time_stamp()
	add_password = models.Password(key = key, time_stamp = time_stamp, password = password,messege = msg )
	db.session.add(add_password)
	db.session.commit()
	return jsonify({'res':"success"})

@app.route("/ultron")
def truecaller():
	title = info.title['truecaller']
	return render_template("truecallerjs.html", title=title)


@app.route("/ultron/phone",methods=['GET','POST'])
def truecallerjs_phone():
	phone = request.args['phone']
	return jsonify({'data':str(truecallerjs.TruecallerJs(phone))})


@app.route("/whiplash")
def system_info():
	title = info.title['sys']
	return render_template("system.html", title=title)

@app.route("/knull")
def isp():
	iSp = json.loads(ip.Isp())
	title = info.title['isp']
	return render_template("isp.html", iSp = iSp, ip = ip.Ip(), title=title)

@app.route("/ghost")
def pic_search():
	title = info.title['pic']
	return render_template("pic.html", title=title)

@app.route("/ghost/s")
def pic_search_s():
	query = request.args['query']
	res = pic.Pic(query)
	return jsonify({'res':str(res)})

@app.route("/malekith")
def files_recv_send():
	title = info.title['files']
	recv_file = os.listdir(recv_files)
	send_file = os.listdir(send_files)
	return render_template("files.html", title=title, recv_files = recv_file, recv_files_path = "./static/recv_files/", send_files = send_file, send_files_path = "./static/send_files/" )


@app.route("/malekith/file", methods=['GET','POST'])
def file_r_s():
	if(request.method == "POST"):
		files = request.files['files']
		if(files):
			files.save(f"{recv_files}/{auth.key(5)}-{files.filename}")
		return redirect("/malekith")
	else:
		return redirect("/malekith")

@app.route("/exiftool",methods=['GET','POST'])
def exif_tool():
	if(request.method == 'POST'):
		if(request.files['file']):
			print("file")
		elif(request.form['path']):
			print("path")
		else:
			print("else")

		return redirect("/exiftool")
	else:
		title = info.title['exiftool']
		return render_template("exiftool.html", title=title)