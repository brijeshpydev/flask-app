import subprocess as sb
import time
import datetime

def TruecallerJs(phone):
	data = phone.split(' ')
	store = ''
	for x in data:
		try:
			with open('./instance/database.txt','a') as file:
				phone_time = f"{x} : {str(datetime.datetime.now())[:19]},\n"
				file.write(phone_time)
		except Exception as error:
			print(error)
		store += f"""<h2 class='phone_back'>{x}</h2>{str(sb.getoutput(f"truecallerjs --search {x} --html"))}<br><hr><br>"""
		time.sleep(1)
	return store

