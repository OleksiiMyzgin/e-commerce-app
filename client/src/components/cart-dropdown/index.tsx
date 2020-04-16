import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";

import { RootState, TCartItem } from "../../interfaces";

import CartItem from "../cart-item";
import { selectCartItems } from "../../redux/cart/selectors";
import { toggleCartHidden } from "../../redux/cart/actions";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./styles";

type Props = {
  cartItems: TCartItem[];
  history: RouteComponentProps["history"];
  dispatch: Dispatch;
};

const CartDropdown = ({ cartItems, history, dispatch }: Props) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

type Selector = {
  cartItems: ReturnType<typeof selectCartItems>;
};

const mapStateToProps = createStructuredSelector<RootState, Selector>({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
