import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [result, setResult] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onClick = () => {
    if (selectedCoin && money) {
      setResult(money / selectedCoin.quotes.USD.price);
    }
  };

  const inputHandle = (event) => {
    setMoney(event.target.value);
  };

  const selectHandle = (event) => {
    const selectedIndex = event.target.value;
    setSelectedCoin(coins[selectedIndex]);
  };

  function CoinPage() {
    return (
      <select onChange={selectHandle} value={selectedCoin ? coins.indexOf(selectedCoin) : ""}>
        <option value="" disabled>Chose Coins</option>
        {coins.map((coin, index) => (
          <option key={coin.id} value={index}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option> //굳이 키 안들고 와도됨
        ))}
      </select>
    );
  }

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <hr />
      <input
        type="number"
        onChange={inputHandle}
        value={money}
        placeholder="니 돈 얼마 있는데"
      />
      <br />
      {loading ? <strong>Loading...</strong> : <CoinPage />}
      <br />
      <h2>
        넌 {selectedCoin ? selectedCoin.symbol : '이것'} (을/를) 이걸 {result} 이만큼 살수 있단다 ㅋㅋ
      </h2>
      <button onClick={onClick}>Calculate</button>
    </div>
  );
}

export default App;
