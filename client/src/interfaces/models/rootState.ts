import { User, Shop, Cart, Directory } from "../index";

export interface RootState {
  user: User;
  shop: Shop;
  cart: Cart;
  directory: Directory;
}
