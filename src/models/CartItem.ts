export interface Item {
  id: string;
  displayName: string;
  price: number;
  imageUrl: string;
}

export interface CartItem extends Item {
  quantity: number;
}
