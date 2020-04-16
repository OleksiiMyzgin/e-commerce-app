import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Dispatch } from "redux";

import { RootState } from "../../interfaces";

import { toggleCartHidden } from "../../redux/cart/actions";
import { selectCartItemsCount } from "../../redux/cart/selectors";

import { CartContainer, ShoppingIcon, ItemCountContainer } from "./styles";

type Props = {
  toggleCartHidden(): void;
  itemCount: number;
};

const CartIcon = ({ toggleCartHidden, itemCount }: Props) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

type Selector = {
  itemCount: ReturnType<typeof selectCartItemsCount>;
};

const mapStateToProps = createStructuredSelector<RootState, Selector>({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
