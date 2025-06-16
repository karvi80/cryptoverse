import React from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";

import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";

import Loader from "../Loader";


import "./CryptoDetails.css";

const CryptoDetails = () => {
  const { coinId } = useParams();

  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);

  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader />;

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <img src="/icons/dollar.svg" alt="dollar" className="coin-stats-icon"/>,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <img src="/icons/hackerrank.svg" alt="hackerrank" className="coin-stats-icon" /> },
    {
      title: "24h Volume",
      value: `${millify(cryptoDetails?.["24hVolume"])}`,
      icon: <img src="/icons/electricalSensor.svg" alt="electricalSensor" className="coin-stats-icon" />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <img src="/icons/marketCap.svg" alt="marketCap" className="coin-stats-icon"  />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <img src="/icons/trophy.svg" alt="trophy" className="coin-stats-icon"  />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <img src="/icons/chart.svg" alt="chart" className="coin-stats-icon"  />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <img src="/icons/currencyExchange.svg" alt="currencyExchange" className="coin-stats-icon"  />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? "" : "",
      icon: <img src="/icons/check.svg" alt="check" className="coin-stats-icon"  />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <img src="/icons/global.svg" alt="global" className="coin-stats-icon"  />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <img src="/icons/neutralTrading.svg" alt="neutralTrading" className="coin-stats-icon" />,
    },
  ];

  return (
    <div className="cryptoDetails-page">
      {cryptoDetails && (
        <div className="cryptoDetails-container">
          <div className="cryptoDetails-header">
            <h2>
              Details for{" "}
              <span>
                {cryptoDetails.name} ({cryptoDetails.symbol})
              </span>
            </h2>
            <img
              src={cryptoDetails.iconUrl}
              alt="currency-icon"
              className="currency-icon"
            />
          </div>

          <p>
            <span className="coin-name">{cryptoDetails.name}</span> live price
            in US Dollar (USD). View value statistics, market cap and supply.
          </p>

          <div className="coin-description">
            <h2>
              What is <span className="coin-name">{cryptoDetails.name}</span>{" "}
            </h2>
            {HTMLReactParser(cryptoDetails.description)}
          </div>

          <div className="stats-container">
            <div className="coin-value-statistics">
              <div className="coin-value-statistics-heading">
                <h2>
                  <span className="coin-name">{cryptoDetails.name}</span> Value
                  Statistics
                </h2>
                <p>
                  An overview showing the statistics of{" "}
                  <span className="coin-name">{cryptoDetails.name}</span>, such
                  as the base and quote currency, the rank, and trading volume.
                </p>
              </div>
              {stats.map(({ icon, title, value }) => (
                <div key={title} className="coin-stats">
                  <div className="coin-stats-name">
                   
                      {icon} {title}
                    
                  </div>
                  <h4>{value}</h4>
                </div>
              ))}
            </div>

            <div className="coin-value-statistics">
              <div className="other-stats-info-heading">
                <h2>Other Statistics</h2>
                <p>
                  An overview showing the statistics of{" "}
                  <span className="coin-name">{cryptoDetails.name}</span> , such
                  as the base and quote currency, the rank, and trading volume.
                </p>
              </div>

              {genericStats.map(({ icon, title, value }) => (
                <div key={title} className="coin-stats">
                  <div className="coin-stats-name">
                  
                      {icon} {title}
                    
                  </div>
                  <h4>{value}</h4>
                </div>
              ))}
            </div>

            <div className="coin-value-statistics">
              <h3>
                <span className="coin-name">{cryptoDetails.name}</span> Links
              </h3>
              {cryptoDetails.links.map((link) => (
                <div key={link.name}>
                  <div className="coin-stats">
                    <h3>{link.type}</h3>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoDetails;
