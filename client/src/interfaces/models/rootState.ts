import { User, Shop, Cart } from "../index";

export interface RootState {
  user: User;
  shop: Shop;
  cart: Cart;
}
