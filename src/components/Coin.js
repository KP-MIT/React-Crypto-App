import React from 'react';
import './Coin.css';
import Loader from "react-loader-spinner";
import { Link } from 'react-router-dom';
import { Space } from 'antd';

const Coin = ({
  coinId,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  loading,
}) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (loading) {
    const style = { position: "fixed", top: "50%", left: "50%",
     transform: "translate(-50%, -50%)" };

    return <Loader type="Circles" 
    style={style} 
    color="#00BFFF" 
    height={"100%"} 
    width={"100%"}  /> ;
  } 

  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
          <Space>
            <Link key={coinId} onClick={scrollToTop} to={`/cryptodetails/${coinId}`}> Show more </Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Coin;
