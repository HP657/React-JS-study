import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
  }, []);
  function CoinPage() {
    return (
      <select>
        {coins.map((coin, index) => (
          <option key={index}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option> //굳이 키 안들고 와도됨
        ))}
      </select>
    )
  }
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <CoinPage />}
    </div>
  );
}

export default App;
