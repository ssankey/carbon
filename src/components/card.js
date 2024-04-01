import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bitcoinLogo from '../assets/bitcoin.jpg';

const Card = ({ btcPriceUSD, btcPriceEUR }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Bitcoin (BTC)</h2>
          <p className="text-gray-200">Current Prices</p>
        </div>
        <img src={bitcoinLogo} alt="Bitcoin Logo" className="w-12 h-12" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
            <span className="text-white font-bold">$</span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">USD Price</h3>
            <p className="text-gray-600">{btcPriceUSD}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-white font-bold">€</span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">EUR Price</h3>
            <p className="text-gray-600">{btcPriceEUR}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BitcoinPrices = () => {
  const [btcPriceUSD, setBtcPriceUSD] = useState(null);
  const [btcPriceEUR, setBtcPriceEUR] = useState(null);

  useEffect(() => {
    const fetchDataCoin = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = response.data;
        const { USD, EUR } = data.bpi;
        setBtcPriceUSD(USD.rate);
        setBtcPriceEUR(EUR.rate);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataCoin();
  }, []);

  return <Card btcPriceUSD={btcPriceUSD} btcPriceEUR={btcPriceEUR} />;
};

export default BitcoinPrices;