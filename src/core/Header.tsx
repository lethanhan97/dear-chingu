import './header.css';
import { FaShoppingCart } from 'react-icons/fa';
import BadgedIcon from './BadgedIcon';

function Header() {
  return (
    <header className="header-wrapper">
      <h1>Deer Pinku</h1>
      <BadgedIcon count={10}>
        <FaShoppingCart size={30}></FaShoppingCart>
      </BadgedIcon>
    </header>
  );
}

export default Header;
