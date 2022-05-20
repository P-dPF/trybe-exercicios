const getCurrencies = async () => {
  const url = `https://api.coincap.io/v2/assets`;
  
  const coins = await fetch(url)
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => error.toString());

    return coins;
}

const showCoins = async () => {
  const coins = await getCurrencies();
  
  const coinsList = document.getElementById('coins-list');
  
  coins.forEach((coin) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`;
    coinsList.appendChild(listItem);
  })
}

window.onload = () => showCoins();