import requests
from parsel import Selector

BASE_URL = (
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)

response = requests.get(BASE_URL)
selector = Selector(text=response.text)

title = selector.css("h1::text").get()

print(title)
