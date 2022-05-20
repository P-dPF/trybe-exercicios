const getCurrencies = async () => {
  const url = `https://api.coincap.io/v2/assets`;
  
  const coins = await fetch(url)
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => error.toString());

    return coins;
}

const convertCurrency = async () => {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

  const convertedCoins = await fetch(url)
  .then(response => response.json())
  .then(data => data.usd)
  .catch(error => error.toString());

  return convertedCoins;
}

const showCoins = async () => {
  const coins = await getCurrencies();
  const convertedCoins = await convertCurrency();
  
  const coinsList = document.getElementById('coins-list');

  const firstTenCoins = coins.filter((_, index) => index < 10);

  firstTenCoins.forEach(coin => {
    const listItem = document.createElement('li');
    const convertToBrl = (Number(coin.priceUsd) * Number(convertedCoins.brl)).toFixed(2);
    listItem.innerText = `${coin.name} (${coin.symbol}): ${convertToBrl}`;
    coinsList.appendChild(listItem);
  })
}

window.onload = () => showCoins();

