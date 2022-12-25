# Imports
import sys
import re

# Selfmade Imports
sys.dont_write_bytecode = True  # Stops pycache from being generated

def indexing(word, file):
    '''Description:
    Indexes the given word based on letter and index location

    Args:
        word (str): word to be indexed
        file (_type_): file settings for writing index information
    '''
    
    i = 0
    for letter in word:
        file.write("\"" + str(i) + " " + letter + "\",\n")
        i += 1

# Collect all the words from file
# to insert into a list

lines = []

with open('../../resources/words.txt', 'r') as file:
    for line in file.readlines():
       lines.append(line)

with open('../../resources/new_words.txt', 'w') as file:
    for line in lines:
        line = line.strip()
        file.write("\"" + line + "\",\n")

index_file = open('../../resources/word_indices.txt', 'w')

# Send each word of lines to be indexed
for word in lines:
    indexing(word.strip(), index_file)