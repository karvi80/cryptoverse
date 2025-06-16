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
                <div className="cyptopMarket-card-content">
                  <img
                    src="/icons/dollar.svg"
                    alt="dollar"
                    className="cryptoMarket-card-content-icon"
                  />
                  <h4>{millify(globalStats.totalCoins)}</h4>
                </div>
              </div>

              <div className="cryptoMarket-card">
                <h5>Total Exchange</h5>

                <div className="cyptopMarket-card-content">
                  <img src="/icons/currencyExchange.svg" alt="currencyExchange" className="cryptoMarket-card-content-icon" />
                  <h4>{globalStats.totalExchanges}</h4>
                </div>
              </div>
            </div>

            <div className="cryptoMarket-section">
              <div className="cryptoMarket-card">
                <h5>Total Market Cap</h5>

                <div className="cyptopMarket-card-content">
                  <img src="/icons/marketCap.svg" alt="marketCap" className="cryptoMarket-card-content-icon"/>
                  <h4>{millify(globalStats.totalMarketCap)}</h4>
                </div>
              </div>

              <div className="cryptoMarket-card">
                <h5>Total 24h Volum</h5>

                <div className="cyptopMarket-card-content">
                  <img src="/icons/electricalSensor.svg" alt="electricalSensor" className="cryptoMarket-card-content-icon" />
                  <h4>{millify(globalStats.total24hVolume)}</h4>
                </div>
              </div>
            </div>

            <div className="cryptoMarket-section">
              <div className="cryptoMarket-card">
                <h5>Total Cryptocurrencies</h5>

                <div className="cyptopMarket-card-content">
                  <img src="/icons/global.svg" alt="global" className="cryptoMarket-card-content-icon" />
                  <h4>{globalStats.total}</h4>
                </div>
              </div>

              <div className="cryptoMarket-card">
                <h5>Total Markets</h5>

                <div className="cyptopMarket-card-content">
                  <img src="/icons/neutralTrading.svg" alt="neutralTrading" className="cryptoMarket-card-content-icon" />
                  <h4>{millify(globalStats.totalMarkets)}</h4>
                </div>
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
            <p>Show More &gt;&gt;</p>
          </div>
        </Link>
      </div>

      <div className="cryptocurrencies">
        <CryptoNews simplified />
      </div>

      <div className="see-more">
        <Link to="/news" style={{ textDecoration: "none" }}>
          <div className="coin-see-more">
            <p>Show More &gt;&gt;</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
