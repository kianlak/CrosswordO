# Imports
import sys
import json
import re

# Selfmade Imports
sys.dont_write_bytecode = True  # Stops pycache from being generated

lines = []

# Gets the list of words and definitions
with open('./../../resources/crud-dictionary.json', 'r') as f:
	data = json.load(f)

# Gets the list of words and format them
with open('./../../resources/words.txt', 'r') as file:
	for line in file:
		lines.append(str(line.strip()))

# Gets words that have no special characters and are at least a length of 2, then sends the data into a JSON format
with open('./../project/Data/dictionary.json', 'w') as file:
	for line in lines:
		if re.search(r'^[a-zA-Z]{2,}$', line):
			string = data[line + " "].replace('"', '\\"')
			file.write("\t\""+ line + ":" + string + "\",\n")

# Make sure to remove final comma at the end of the dictionary.json file to stop error