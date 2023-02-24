import requests
from parsel import Selector

BASE_URL = (
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)

response = requests.get(BASE_URL)
selector = Selector(text=response.text)

title = selector.css("h1::text").get()
price = selector.css("h1 ~ p::text").re_first(r"\d+\.\d{2}")
description = selector.css("#product_description ~ p::text").get()

suffix = "...more"

if description.endswith(suffix):
    description = description[: -len(suffix)]

print(description)
