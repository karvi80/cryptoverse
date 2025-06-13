import React from "react";
import millify from "millify";

import "./CryptoCard.css";

const CryptoCard = ({ name, icon, price, marketCap, change }) => {
  return (
    <div className="coins-card">
      <div className="coin-card-header">
        <h4>{name}</h4>
        <img src={icon} alt="coin icon" className="coin-icon" />
      </div>
      <div className="coin-card-body">
        <h5>
          Price: <span className="span">${millify(price)}</span>
        </h5>
        <h5>
          Market Cap: <span className="span">${millify(marketCap)}</span>
        </h5>
        <h5>
          Daily Change: <span className="span">{change}%</span>
        </h5>
      </div>
    </div>
  );
};

export default CryptoCard;
