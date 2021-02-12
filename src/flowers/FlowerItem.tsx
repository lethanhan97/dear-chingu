import { Item } from '../models/CartItem';
import './flower-item.css';

function FlowerItem({ details }: FlowerItemProps) {
  const { displayName, imageUrl, price } = details;
  return (
    <article className="flower-item-wrapper">
      <img src={imageUrl} alt="Girl in a jacket" />
      <h4>{displayName}</h4>
      <p>{price} SGD</p>
    </article>
  );
}

interface FlowerItemProps {
  details: Item;
}

export default FlowerItem;
