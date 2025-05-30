import React from 'react';

// This component handles user input to select or enter a crypto coin
const CryptoSelector = ({ onSelect }) => {
    return (
        <div className="crypto-selector">
            {/* Dropdown to select a coin from a preset list */}
            <label htmlFor="coin-dropdown">Choose a coin: </label>
            <select id="coin-dropdown" onChange={(e) => onSelect(e.target.value)}>
                <option value="">-- Select --</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
                <option value="dogecoin">Dogecoin</option>
                {/* Add more options as needed */} 
            </select>

            {/* Text input for entering a symbol manually */}
            <div style={{ marginTop: '1rem' }}>
                <label htmlFor="symbol-input">Or enter symbol: </label>
                <input
                    type="text"
                    id="symbol-input"
                    placeholder="e.g. btc"
                    // Calls onSelect when input loses focus
                    onBlur={(e) => onSelect(e.target.value.toLowerCase())}
                />
            </div>
        </div>
    );
};

export default CryptoSelector;
