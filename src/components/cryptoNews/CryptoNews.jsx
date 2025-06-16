import React, { useState, useEffect } from "react";
import CryptoNewsCard from "./CryptoNewsCard";
import Loader from "../Loader";
import "./CryptoNews.css";

import {
  useGetCryptoNewsQuery,
  useGetCryptocoinsListPairsQuery,
} from "../../services/cryptoNewsApi";


const CryptoNews = ({ simplified }) => {
  const [page, setPage] = useState(1);

  // Initialize cryptoName with the pair_ID of the first cryptocurrency
  const { data: coins } = useGetCryptocoinsListPairsQuery();
  const initialCryptoName =
    coins?.data[0]?.screen_data?.pairs_data[0]?.pair_ID || "";
  const [cryptoName, setCryptoName] = useState(initialCryptoName);

  // Fetch crypto news based on cryptoName
  const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery({
    page: page,
    cryptoName: cryptoName,
  });

  useEffect(() => {
    // Fetch crypto news when cryptoName changes
    // This ensures that the news is updated when a different cryptocurrency is selected
    // You may also want to add a check to avoid making the request when cryptoName is empty or null
    if (cryptoName) {
      // You can add a loading indicator here if needed
    }
  }, [cryptoName]);

  if (isLoading) return <Loader />;

  return (
    <div className="news">
      <h2>Latest Crypto News</h2>
      {!simplified && (
        <div className="selection">
          <select
            value={cryptoName} // Set the value to the selected cryptoName state
            className="select-crypto"
            placeholder="Select a Crypto"
            onChange={(event) => setCryptoName(event.target.value)}
          >
            {coins?.data[0]?.screen_data?.pairs_data?.map((coin) => {
              const parts = coin.exchange_name.split(" ");
              const currencyName = parts[parts.length - 1];
              return (
                <option key={coin.pair_ID} value={coin.pair_ID}>
                  {currencyName}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <div className="crypto-card-container">
        {cryptoNews &&
          cryptoNews?.data[0]?.screen_data?.news.map((news) => (
            <CryptoNewsCard
              key={news.news_ID}
              news_link={news.news_link}
              third_party_url={news.third_party_url}
              news_ID={news.news_ID}
              related_image={news.related_image}
              HEADLINE={news.HEADLINE}
              news_provider_name={news.news_provider_name}
              last_updated={news.last_updated}
            />
          ))}
      </div>
      {cryptoNews && !simplified && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            style={{
              backgroundColor: "#001529",
              color: "#fff",
              borderRadius: "10px",
              cursor: "pointer",
              width: "140px",
              height: "40px",
            }}
          >
            Load next Page &gt;&gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default CryptoNews;
