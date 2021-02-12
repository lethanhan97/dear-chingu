import './header.css';
import { FaShoppingCart } from 'react-icons/fa';
import BadgedIcon from './BadgedIcon';
import { useCart } from '../context/cart';

function Header() {
  const cart = useCart();

  return (
    <header className="header-wrapper">
      <h1>Deer Pinku</h1>
      <BadgedIcon count={cart.totalOrders}>
        <FaShoppingCart size={30}></FaShoppingCart>
      </BadgedIcon>
    </header>
  );
}

export default Header;
