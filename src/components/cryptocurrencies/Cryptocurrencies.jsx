import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./cryptocurrencies.css";

import { useGetCryptosQuery } from "../../services/cryptoApi";

import CryptoCard from "../cryptoCard/CryptoCard";
import Loader from "../Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
    const fliteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(fliteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;
  return (
    <div>
      {!simplified && (
        <div className="search-crypto">
          <input
            type="text"
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <div className="cryptocurrencies">
        {cryptos?.map((coin) => (
          <div key={coin.uuid} className="coins-container">
            <Link
              key={coin.uuid}
              to={`/crypto/${coin.uuid}`}
              style={{ textDecoration: "none" }}
            >
              <CryptoCard
                name={coin.name}
                price={coin.price}
                icon={coin.iconUrl}
                marketCap={coin.marketCap}
                change={coin.change}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
