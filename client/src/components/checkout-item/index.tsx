import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TCartItem } from "../../interfaces";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./styles";

type Props = {
  cartItem: TCartItem;
  clearItem(item: TCartItem): void;
  addItem(item: TCartItem): void;
  removeItem(item: TCartItem): void;
};

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }: Props) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItem: (item: TCartItem) => dispatch(clearItemFromCart(item)),
  addItem: (item: TCartItem) => dispatch(addItem(item)),
  removeItem: (item: TCartItem) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
