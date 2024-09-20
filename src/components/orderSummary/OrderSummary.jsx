import React from 'react'
import './orderSummary.css'

function OrderSummary() {
  return (
    <main className="order-summary">
        <img className="hero" src="images/hero.svg" alt="Hero" />
        <h2>Order Summary</h2>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on any
            device anywhere you like!
          </p>
    </main>
  )
}

OrderSummary.propTypes = {}

export default OrderSummary
