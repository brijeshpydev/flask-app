import subprocess as sb


def exiftool(file_path):
	exif = sb.getoutput(f"exiftool {file_path}")
	return str(exif)

def check_img(file):
	pass
