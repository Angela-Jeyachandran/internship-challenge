import React, { useState } from 'react';
import CryptoSelector from './components/CryptoSelector';
import CryptoData from './components/CryptoData';
import PriceChart from './components/PriceChart';

// Main app component: controls state and renders child components
function App() {
  // State to track user selection and data
  const [selectedCoin, setSelectedCoin] = useState('');
  const [price, setPrice] = useState(null);
  const [volume, setVolume] = useState(null);
  const [chartData, setChartData] = useState([]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Crypto Asset Dashboard</h1>

      {/* Step 1: Let the user choose or enter a coin */}
      <CryptoSelector onSelect={setSelectedCoin} />

      {/* Step 2: Show price and volume (only if data exists) */}
      <CryptoData coinName={selectedCoin} price={price} volume={volume} />

      {/* Step 3: Show bonus chart (only if data exists) */}
      <PriceChart chartData={chartData} />
    </div>
  );
}

export default App;
