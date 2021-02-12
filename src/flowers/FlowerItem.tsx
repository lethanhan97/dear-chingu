import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../context/cart';
import { Item } from '../models/CartItem';
import './flower-item.css';

function FlowerItem({ details }: FlowerItemProps) {
  const { displayName, imageUrl, price, id } = details;
  const cart = useCart();

  const addItem = () => {
    cart.addOrder(id);
  };

  const removeItem = () => {
    const currentItem = cart.orders[id];
    if (currentItem?.quantity > 0) {
      cart.removeOrder(id);
    }
  };

  return (
    <article className="flower-item-wrapper">
      <img src={imageUrl} alt="Girl in a jacket" />
      <h4>{displayName}</h4>
      <p>{price.toFixed(2)} SGD</p>

      <div className="flower-item-counter">
        <FaMinus onClick={removeItem}></FaMinus>
        <span className="spacer"></span>
        {cart.orders[id]?.quantity || '0'}
        <span className="spacer"></span>
        <FaPlus onClick={addItem}></FaPlus>
      </div>
    </article>
  );
}

interface FlowerItemProps {
  details: Item;
}

export default FlowerItem;
