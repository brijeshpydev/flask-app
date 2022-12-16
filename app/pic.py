import requests
import json

api = "25631434-859bf3166bb26e033af830823";

def Pic(query):
	URL = f"""https://pixabay.com/api/?key={api}&q={query}&per_page=5&pretty=true"""
	res = requests.get(URL).text
	return res

