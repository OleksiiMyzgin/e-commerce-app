import { CartActionTypes } from "./action-types";

import { TCartItem } from "../../interfaces";

export type ToggleCartHidden = {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
};

export type AddItem = {
  type: CartActionTypes.ADD_ITEM;
  payload: TCartItem;
};

export type RemoveItem = {
  type: CartActionTypes.REMOVE_ITEM;
  payload: TCartItem;
};

export type ClearItemFromCart = {
  type: CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: TCartItem;
};

export type ClearCart = {
  type: CartActionTypes.CLEAR_CART;
};

export const toggleCartHidden = (): ToggleCartHidden => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: TCartItem): AddItem => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item: TCartItem): RemoveItem => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item: TCartItem): ClearItemFromCart => ({
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
