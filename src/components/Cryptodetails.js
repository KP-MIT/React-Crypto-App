import React, {useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Row, Col, Statistic, Space } from 'antd';
import axios from 'axios';
import Loader from "react-loader-spinner";

const { Title } = Typography;

const Cryptodetails = () => {
  
  const { coinId } = useParams();
  const [coinDetail, setCoinDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  
  

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&community_data=false&developer_data=false`);
      setCoinDetail(res?.data);
      console.log(res.data);
      setLoading(false);
    };

    fetchDetails();
  }, [coinId]);

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
  
  const data = coinDetail;
  const style = {display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', 
      justifyContent: 'space-evenly', textAlign: 'center', marginBottom: '3%'};

  return (
      
    <div style={style}>
        <Title level={2} className="heading">
          {data?.name}
        </Title>
        <Row style={style} gutter={[12, 12]}>
          <Col  span={12}>
            <p> Genesis Date : <Statistic value={data?.genesis_date} /> </p>
          </Col>
          <Col  span={12}>
             <p> Market Cap Rank : <Statistic
              value={data.market_cap_rank}
            /> </p> 
          </Col>
          <Col span={12}>
            <p> Coingecko Rank : <Statistic value={data?.coingecko_rank} /> </p>
          </Col>
                  <Col span={12}>
                    <p> Community Score :
                    <Statistic
                      value={data?.community_score}
                    />
                    </p>
                  </Col>
                  <Col span={12}>
                    <p> Categories : 
                    <Statistic
                      value={data?.categories}
                    />
                    </p>
                  </Col>
                  <Col span={12}>
                    <p> Sentiment Up % :
                    <Statistic
                      value={data?.sentiment_votes_up_percentage}
                    />
                    </p>
                  </Col>
          
        </Row>
        <Space>
            <Link to="/"> Show less </Link>
        </Space>
    </div>
  );
};

export default Cryptodetails;
