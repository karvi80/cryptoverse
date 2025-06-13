import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../../services/cryptoApi";

import { Cryptocurrencies, CryptoNews } from "../index";

import "./Home.css";
import Loader from "../Loader";

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <div className="home">
      <div className="crypto-status">
        <h2>Global Crypto Stats</h2>
        {globalStats && (
          <div className="cryptoMarket">
            <div className="cryptoMarket-section">
              <div className="cryptoMarket-card">
                <h5>Total Cryptocurrencies</h5>
                <h4>{millify(globalStats.totalCoins)}</h4>
              </div>

              <div className="cryptoMarket-card">
                <h5>Total Exchange</h5>
                <h4>{globalStats.totalExchanges}</h4>
              </div>
            </div>

            <div className="cryptoMarket-section">
              <div className="cryptoMarket-card">
                <h5>Total Market Cap</h5>
                <h4>{millify(globalStats.totalMarketCap)}</h4>
              </div>

              <div className="cryptoMarket-card">
                <h5>Total 24h Volum</h5>
                <h4>{millify(globalStats.total24hVolume)}</h4>
              </div>
            </div>

            <div className="cryptoMarket-section">
              <div className="cryptoMarket-card">
                <h5>Total Cryptocurrencies</h5>
                <h4>{globalStats.total}</h4>
              </div>

              <div className="cryptoMarket-card">
                <h5>Total Markets</h5>
                <h4>{millify(globalStats.totalMarkets)}</h4>
              </div>
            </div>
          </div>
        )}
      </div>

      <h1>Top 10 Crypto in the World</h1>
      <div className="cryptocurrencies">
        <Cryptocurrencies simplified />
      </div>

      <div className="see-more">
        <Link to="/cryptocurrencies" style={{ textDecoration: "none" }}>
          <div className="coin-see-more">
            <h2>Show More &gt;&gt;</h2>
          </div>
        </Link>
      </div>

      <div className="cryptocurrencies">
        <CryptoNews simplified />
      </div>

      <div className="see-more">
        <Link to="/news" style={{ textDecoration: "none" }}>
          <div className="coin-see-more">
            <h2>
              Show More <RxDoubleArrowRight />
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
