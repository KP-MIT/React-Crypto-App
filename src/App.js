import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {Coin, Pagination, Cryptodetails} from './components';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Typography } from 'antd';
import { Route } from 'react-router-dom';


const App = () => {
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  const test = {
    current_price: 0,
    id: "No id",
    image: "No img",
    market_cap: 1078940938152,
    name: "No Match Found",
    price_change_percentage_24h: 0,
    symbol: "NA",
    total_volume: 0
  }

  const [coins, setCoins] = useState([test]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searching, setSearching] = useState(false);

  useEffect(() => {

      const fetchCoins = async () => {
        setLoading(true);
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        setCoins(res?.data);
        console.log(res.data);
        await sleep(200);
        setLoading(false);
      };

      fetchCoins();


  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
    setSearching(true);
  };

  // Get current coins
  if (searching) {
    setCurrentPage(1);
    setSearching(false);
  }

  const indexOfLastCoin = currentPage * postsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - postsPerPage;
  const currentCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  ).slice(indexOfFirstCoin, indexOfLastCoin);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)
  if (loading) {
    const style = { position: "fixed", top: "50%", left: "50%",
     transform: "translate(-50%, -50%)" };

    return ( 
    <Loader type="Circles" 
    style={style} 
    color="#00BFFF" 
    height={"100%"} 
    width={"100%"}  /> 
    );
  }

  return (

    <div className='coin-app'>
      <Route exact path="/cryptodetails/:coinId" render={() => (
          <Cryptodetails/> )}
      />
      <div className='coin-search'>
        <h1 className='coin-text'> Crypto Scout </h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Enter Currency Name'
          />
        </form>
      </div>
      {currentCoins?.map(coin => {
        return (
          <div>
          <Coin
            key={coin.id}
            coinId={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            loading={loading}
          />
          </div>
        );
      })}
      <Pagination
            postsPerPage={postsPerPage}
            totalPosts={coins.length}
            paginate={paginate}
          />
      
      <div className="footer">
        <Typography.Title level={5}>
              All Rights Reserved @Cryptoscout Inc. 
        </Typography.Title>
      </div>
      
    </div>
    
  );
}

export default App;
