import React from "react";

import { TCartItem } from "../../interfaces";

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./styles";

type Props = {
  item: TCartItem;
};

const CartItem = ({ item: { name, price, imageUrl, quantity } }: Props) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x {price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
