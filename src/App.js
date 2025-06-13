import "./App.css";

import { Routes, Route } from "react-router-dom";

import {
  Home,
  Navbar,
  CryptoNews,
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Navbar />
      </div>

      <div className="main-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/news" element={<CryptoNews />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route path="/exchanges" element={<Exchanges />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
