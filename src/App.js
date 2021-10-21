import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {Coin, Cryptodetails} from './components';  // import Pagination for manually implemented Pagination js file
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Typography } from 'antd';
import { Route } from 'react-router-dom';
import ReactPaginate from 'react-paginate'; // using react-pagination package


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
  //const [searching, setSearching] = useState(false);

  // const [currentPage, setCurrentPage] = useState(1);  // manualPagination
  const [postsPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);
  const pagesVisited = pageNumber * postsPerPage;
  

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

  { if (loading) {
    const style = { position: "fixed", top: "50%", left: "50%",
     transform: "translate(-50%, -50%)" };

    return ( 
    <Loader type="Circles" 
    style={style} 
    color="#00BFFF" 
    height={"100%"} 
    width={"100%"}  /> 
    );
  } }

  const handleChange = e => {
    setSearch(e.target.value);
    //setSearching(true);
  };

  // Get current coins with or without manual pagination( uncomment lines )
  // const indexOfLastCoin = currentPage * postsPerPage;
  // const indexOfFirstCoin = indexOfLastCoin - postsPerPage;
  const currentCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()));
  // .slice(indexOfFirstCoin, indexOfLastCoin);

  const displayCoins = currentCoins
  .slice(pagesVisited, pagesVisited + postsPerPage)
  .map((coin) => {
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
  });

  // Change page for manual pagination
  // const paginate = pageNumber => setCurrentPage(pageNumber)

  const pageCount = Math.ceil(currentCoins.length / postsPerPage);
  const onPageChange = ({selected}) => {
    setPageNumber(selected);
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
      
      {/* 
      Uncomment for manual pagination.
      
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
      })} */}


      {displayCoins}
      <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"} 
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttns"}
        nextLinkClassName={"nextBttns"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />


      {/* 
      manual pagination container

      <Pagination
            postsPerPage={postsPerPage}
            totalPosts={coins.length}
            paginate={paginate}
          />
       */}


      <div className="footer">
        <Typography.Title level={5}>
              All Rights Reserved @Cryptoscout Inc. 
        </Typography.Title>
      </div>
      
    </div>
    
  );
}

export default App;
