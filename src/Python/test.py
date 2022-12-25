import urllib.request, json 

with urllib.request.urlopen('https://api.dictionaryapi.dev/api/v2/entries/en/fucker') as url:
    data = json.loads(url.read().decode())
    
    with open('./JSON/w.json', 'w') as file:
        json.dump(data[0], file, indent = 4)