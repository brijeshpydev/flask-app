import random
import datetime
pass_key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

def key(lenght):
	store_key = ''
	for x in range(0,lenght):
		store_key += random.choice(pass_key)
	return store_key

		
def time_stamp():
	return str(datetime.datetime.now())[:19]