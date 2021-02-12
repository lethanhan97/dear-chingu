import { Link } from 'react-router-dom';
import './header.css';
import { FaShoppingCart } from 'react-icons/fa';
import BadgedIcon from './BadgedIcon';
import { useCart } from '../../context/cart';

function Header() {
  const cart = useCart();

  return (
    <header className="header-wrapper">
      <Link to="/">
        <h1>Deer Pinku</h1>
      </Link>
      <Link to="/check-out">
        <BadgedIcon count={cart.totalOrders}>
          <FaShoppingCart size={30}></FaShoppingCart>
        </BadgedIcon>
      </Link>
    </header>
  );
}

export default Header;
