import React from "react";
import moment from "moment";
import "./CryptoNews.css";

const CryptoNewsCard = ({
  news_link,
  third_party_url,
  news_ID,
  related_image,
  HEADLINE,
  news_provider_name,
  last_updated,
}) => {
  return (
    <div className="crypto-card">
      <a
        href={news_link ? news_link : third_party_url}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div key={news_ID}>
          <div className="cryptonewsCard-header">
            <img
              src={related_image}
              alt="news thumbnail"
              className="cryptonewsCard-thumbnail"
            />
            <h4>{HEADLINE}</h4>
          </div>

          <div className="cryptonewsCard-footer">
            <h4>{news_provider_name}</h4>
            <h4>{moment(last_updated).startOf("ss").fromNow()}</h4>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CryptoNewsCard;
