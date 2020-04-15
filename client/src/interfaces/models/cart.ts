export type CartItem = {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
  quantity: number;
};

export type DocData = {
  title: string;
  items: CartItem[];
};

export type Collection = {
  routeName: string;
  id: string;
  title: string;
  items: CartItem[];
};

export type Collections = {
  [key: string]: Collection;
};

export type Cart = {
  hidden: boolean;
  cartItems: CartItem[];
};
