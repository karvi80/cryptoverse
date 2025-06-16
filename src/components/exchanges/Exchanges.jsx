import React from "react";
import millify from "millify";
import { useGetCryptoExchangesQuery } from "../../services/cryptoApi";

import "./Exchanges.css";
import Loader from "../Loader";

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery();
  const exchangesList = data?.data;

  console.log(exchangesList);
  if (isFetching) return <Loader />;

  return (
    <div className="crypto-exchanges">
      {exchangesList ? (
        <div>
          <h1>Top 10 Crypto Exchanges</h1>
          <table className="exchanges-table">
            <thead>
              <th className="exchange-header">Exchanges</th>
              <th className="exchange-header">24h Trading Volume</th>
              <th className="exchange-header">Market</th>
              <th className="exchange-header">Price</th>
              <th className="exchange-header">Recommended</th>
              <th className="exchange-header">Read More</th>
            </thead>

            {exchangesList?.map((exchange) => (
              <tbody key={exchange.uuid}>
                <td className="exchange-body">
                  {exchange.rank}.
                  <img
                    src={exchange.iconUrl}
                    alt="coin-icon"
                    className="coin-icon"
                  />{" "}
                  {exchange.name}
                </td>
                <td className="exchange-body">
                  ${millify(exchange["24hVolume"])}
                </td>
                <td className="exchange-body">{exchange.numberOfMarkets}</td>
                <td className="exchange-body">{millify(exchange.price)}</td>
                <td className="exchange-body">
                  {exchange.recommended === true
                    ? "Recommended to Invest"
                    : "Not Recoomended"}
                </td>
                <td className="exchange-body">
                  <a
                    href={exchange.coinrankingUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/icons/ling.svg"
                      alt="link"
                      className="exchange-body-icon"
                    />
                  </a>
                </td>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <div className="no-data">
          <h1>Sorry this option is not available at the moment</h1>
        </div>
      )}
    </div>
  );
};

export default Exchanges;
