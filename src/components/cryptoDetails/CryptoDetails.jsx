import React from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";

import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";

import Loader from "../Loader";

import {
  AiOutlineDollarCircle,
  AiOutlineTrophy,
  AiOutlineBarChart,
  AiOutlineCheck,
  AiOutlineGlobal,
} from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";
import {
  FcElectricalSensor,
  FcCurrencyExchange,
  FcNeutralTrading,
} from "react-icons/fc";
import { GrMoney } from "react-icons/gr";

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
      icon: <AiOutlineDollarCircle />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <FaHackerrank /> },
    {
      title: "24h Volume",
      value: `${millify(cryptoDetails?.["24hVolume"])}`,
      icon: <FcElectricalSensor />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <GrMoney />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <AiOutlineTrophy />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <AiOutlineBarChart />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <FcCurrencyExchange />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? "" : "",
      icon: <AiOutlineCheck />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <AiOutlineGlobal />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <FcNeutralTrading />,
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
                    <h4>
                      {icon} {title}
                    </h4>
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
                    <h4>
                      {icon} {title}
                    </h4>
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
