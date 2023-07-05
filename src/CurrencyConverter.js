import React, { useState } from 'react';
//import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [usdAmount, setUsdAmount] = useState(0);
  const conversionRate = 131.67;

  const handleUsdChange = (event) => {
    setUsdAmount(event.target.value);
  };

  const convertToYen = () => {
    return usdAmount * conversionRate;
  };

  return (
    <div className="currency-converter">
      <div className="input-container">
        <label htmlFor="usd-input">USD:</label>
        <input
          id="usd-input"
          type="number"
          value={usdAmount}
          onChange={handleUsdChange}
        />
      </div>
      <p className="result">
        Equivalent Yen: {convertToYen()}¥
      </p>
    </div>
  );
};

export default CurrencyConverter;
