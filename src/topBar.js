import React from 'react';
import './TopBar.css';
import CurrencyConverter from './CurrencyConverter';

function TopBar() {
  // Get current date and time in Japan Standard Time
  const now = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Tokyo',
    weekday: 'short',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  // Currency conversion rate
  const exchangeRate = 'USD/JPY - Dollar Yen 1$=¥131.67';

  return (
    <div className="top-bar">
      <div className="topbar-header">
        React App
      </div>
      <div className="date">{`Japan Standard Time ${now}`}</div>
      <div className="currency">{exchangeRate}</div>
      <CurrencyConverter />
    </div>
  );
}

export default TopBar;
