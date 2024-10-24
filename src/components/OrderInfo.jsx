import React from 'react';

const OrderInfo = () => {
  return (
    <div>
      <h2>Order Summary</h2>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="pricing">
        <img className="icon" src="/images/icon-music.svg" alt="Music Icon" />
        <div className='plan'>
          <h3 >Annual Plan</h3>
          <h3 className="price">$59.99/year</h3>
        </div>
        <a href="#">Change</a>
      </div>
    </div>
  );
};

export default OrderInfo;
