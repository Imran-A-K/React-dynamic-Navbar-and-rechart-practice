import React from "react";
import { useState, useEffect } from "react";
import PriceCard from "./PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((response) => response.json())
      .then((apiData) => setPrices(apiData));
  }, []);
  return (
    <div className="mx-12">
      <h2 className="text-6xl bg-purple-400 text-center font-bold">
        Awesome Affordable Prices
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price} />
        ))}
      </div>
    </div>
  );
};

export default PriceList;
