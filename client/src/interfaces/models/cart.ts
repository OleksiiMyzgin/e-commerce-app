export type CartItem = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
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
