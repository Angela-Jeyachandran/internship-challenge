import React from 'react';

// This component displays the price and volume of the selected coin
const CryptoData = ({ coinName, price, volume }) => {
    // Don’t render anything if data is incomplete
    if (!coinName || price === null || volume === null) return null;

    return (
        <div
            className="crypto-data"
            style={{
                marginTop: '2rem',
                padding: '1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
            }}
        >
            {/* Display coin name with first letter capitalized */}
            <h2>{coinName.charAt(0).toUpperCase() + coinName.slice(1)}</h2>
            <p><strong>Price:</strong> ${price.toLocaleString()}</p>
            <p><strong>24h Volume:</strong> ${volume.toLocaleString()}</p>
        </div>
    );
};

export default CryptoData;
