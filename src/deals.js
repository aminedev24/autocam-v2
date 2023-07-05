import React from 'react';
import './deals.css';

import alertimg from './alertimg.png';
import importantnotice from './importantnotice.png';
const dealsData = [
  {
    id: 1,
    imageSrc: 'https://autocj.co.jp/images/newimages/new.png?ver=39',
    title: 'New Stock',
  },
  {
    id: 2,
    imageSrc: 'https://autocj.co.jp/images/newimages/EARLYSUMMERSALE_mb.jpg?ver=39',
    title: 'EARLY SUMMER SALE',
  },
  {
    id: 3,
    imageSrc: 'https://autocj.co.jp/images/newimages/lowmileage.png?ver=39',
    title: 'Low Mileage',
  },
  {
    id: 4,
    imageSrc: 'https://autocj.co.jp/images/newimages/8seats.png?ver=39',
    title: 'Over 8 Seats',
  },
  // Add more deals data here...
];

function DealsSection() {
  return (
    <>
    <div className="deals-section">
      <h2 className="deals-title">Deals</h2>
      <div className="deals-container">
        {dealsData.map((deal) => (
          <div key={deal.id} className="deal-item">
            <img className="deal-image" src={deal.imageSrc} alt={deal.title} />
            <div className="deal-title">{deal.title}</div>
          </div>
        ))}
      </div>
    </div>

    <div className='alerts'>
        <div className="price-drop-alert-container">
        <h2 className="price-drop-heading">Price Drop Alert</h2>
        <img
            className="price-drop-image"
            src={alertimg}
            alt="Price Drop"
        />
        <p className="price-drop-text">
            For every vehicle you add to your favorite list or send us a request, you can receive a notification email when prices drop.
        </p>
        </div>

        <div className="important-notice-container">
        <div className="important-notice-heading">
            <img
            src={importantnotice}
            alt="Important Notice"
            className="notice-image"
            />
            <h2>Important Notice</h2>
        </div>
        <div className="important-notice-content">
            <div className="notice-text">
            <p>Important security notice for payment</p>
            </div>
            <div className="notice-text">
            <p>Our bank accounts are all in Japan and the beneficiary is always "Autocom Japan Inc"</p>
            <a href="#" className="read-more-link">Read more</a>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default DealsSection;
