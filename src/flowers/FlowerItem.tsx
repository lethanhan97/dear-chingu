import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../context/cart';
import { Item } from '../models/CartItem';
import './flower-item.css';

function FlowerItem({ details }: FlowerItemProps) {
  const { displayName, imageUrl, price, id } = details;
  const [count, setCount] = useState(0);
  const cart = useCart();

  const addItem = () => {
    setCount(count + 1);
    cart.addOrder(id);
  };

  const removeItem = () => {
    if (count > 0) {
      setCount(count - 1);
      cart.removeOrder(id);
    }
  };

  return (
    <article className="flower-item-wrapper">
      <img src={imageUrl} alt="Girl in a jacket" />
      <h4>{displayName}</h4>
      <p>{price} SGD</p>

      <div className="flower-item-counter">
        <FaMinus onClick={removeItem}></FaMinus>
        <span className="spacer"></span>
        {count}
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
