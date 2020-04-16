import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { RootState, TCartItem } from "../../interfaces";

import CheckoutItem from "../../components/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button";

import { selectCartItems, selectCartTotal } from "../../redux/cart/selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./styles";

type Props = {
  cartItems: TCartItem[];
  total: number;
};

const CheckoutPage = ({ cartItems, total }: Props) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

type Selector = {
  cartItems: ReturnType<typeof selectCartItems>;
  total: ReturnType<typeof selectCartTotal>;
};

const mapStateToProps = createStructuredSelector<RootState, Selector>({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
