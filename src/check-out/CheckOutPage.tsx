import './check-out.css';
import { useCart } from '../context/cart';
import { Link } from 'react-router-dom';
import React from 'react';

function CheckOutPage() {
  const cart = useCart();
  const orderIDs = Object.keys(cart.orders);

  if (orderIDs.length === 0) {
    return (
      <div>
        Your cart is empty. Click <Link to="/">here</Link> to continue shopping!
        :)
      </div>
    );
  }

  return (
    <section>
      <h2>Your order summary</h2>
      <div className="receipt-wrapper">
        <h3>Item Name</h3>
        <h3 className="center-text">Quantity</h3>
        <h3 className="center-text">Price</h3>

        {orderIDs.map((id) => {
          const { displayName, quantity, price } = cart.orders[id];
          return (
            <React.Fragment key={id}>
              <p>{displayName}</p>
              <p className="center-text">{quantity}</p>
              <p className="center-text">{(price * quantity).toFixed(2)}</p>
            </React.Fragment>
          );
        })}

        <h3
          className="two-col right-text"
          style={{ fontWeight: 300, marginTop: '5rem' }}
        >
          Total
        </h3>
        <h3 className="center-text" style={{ marginTop: '5rem' }}>
          {cart.totalPrice.toFixed(2)} SGD
        </h3>

        <div className="btn-wrapper">
          <button className="submit-btn">Submit Order</button>
        </div>
      </div>
    </section>
  );
}

export default CheckOutPage;
