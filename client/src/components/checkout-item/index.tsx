import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TCartItem } from "../../interfaces";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

type Props = {
  cartItem: TCartItem;
  clearItem(item: TCartItem): void;
  addItem(item: TCartItem): void;
  removeItem(item: TCartItem): void;
};

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }: Props) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItem: (item: TCartItem) => dispatch(clearItemFromCart(item)),
  addItem: (item: TCartItem) => dispatch(addItem(item)),
  removeItem: (item: TCartItem) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
