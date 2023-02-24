import requests

BASE_URL = "https://httpbin.org/encoding/utf8"

response = requests.get(BASE_URL)

print(response.text)
