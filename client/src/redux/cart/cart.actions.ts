import { CartActionTypes } from "./cart.types";

import { CartItem } from "../../interfaces";

export type ToggleCartHidden = {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
};

export type AddItem = {
  type: CartActionTypes.ADD_ITEM;
  payload: CartItem;
};

export type RemoveItem = {
  type: CartActionTypes.REMOVE_ITEM;
  payload: CartItem;
};

export type ClearItemFromCart = {
  type: CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: CartItem;
};

export type ClearCart = {
  type: CartActionTypes.CLEAR_CART;
};

export const toggleCartHidden = (): ToggleCartHidden => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: CartItem): AddItem => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item: CartItem): RemoveItem => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item: CartItem): ClearItemFromCart => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = (): ClearCart => ({
  type: CartActionTypes.CLEAR_CART,
});

export type Action =
  | ToggleCartHidden
  | AddItem
  | RemoveItem
  | ClearItemFromCart
  | ClearCart;
