import { createContext, useContext, useState } from 'react';
import { CartItem, Item } from '../models/CartItem';
import data from '../data/data.json';

const initialData: CartData = {
  orders: {},
  totalOrders: 0,
  addOrder: () => {},
  removeOrder: () => {},
};

const CartContext = createContext(initialData);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState({} as { [id: string]: CartItem });
  const [totalOrders, setTotalOrders] = useState(0);

  const addOrder = (id: string) => {
    if (orders[id]) {
      // Order exists
      const orderItem: CartItem = orders[id];
      orderItem.quantity = orderItem.quantity + 1;

      setOrders(orders);
      setTotalOrders(totalOrders + 1);
    } else {
      // Order doesnt exist
      const item: Item | undefined = data.find((item) => item.id === id);
      if (item) {
        const newOrderItem: CartItem = { ...item, quantity: 1 };
        orders[id] = newOrderItem;

        setOrders(orders);
        setTotalOrders(totalOrders + 1);
      } else {
        console.warn('Item dont exist');
      }
    }

    console.log(orders);
  };
  const removeOrder = (id: string) => {
    if (orders[id]) {
      // Order exists
      const currentQty = orders[id].quantity;
      if (currentQty === 1) {
        delete orders[id];
      } else {
        orders[id].quantity = currentQty - 1;
      }

      setOrders(orders);
      setTotalOrders(totalOrders - 1);
    } else {
      console.warn('Order ID dont exist');
    }

    console.log(orders);
  };

  return (
    <CartContext.Provider
      value={{ orders, totalOrders, addOrder, removeOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

interface CartData {
  orders: {
    [id: string]: CartItem;
  };
  totalOrders: number;
  addOrder: (id: string) => void;
  removeOrder: (id: string) => void;
}

export { CartProvider, useCart };
