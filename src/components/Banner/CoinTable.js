import React, { useEffect, useState } from "react";
import { CoinList } from "../../config/api";
import { HawkState } from "../../HawkContext";
import axios from "axios";
import Coin from "../Coin/Coin";
import "./CoinTable.css";
import { Link } from "react-router-dom";
const CoinTable = () => {
  const { currency } = HawkState();

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(CoinList(currency))
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data)
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search any Startup here..</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Link to={`/coin/${coin.id}`}>
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.total_volume}
              price={coin.current_price}
              marketcap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CoinTable;
