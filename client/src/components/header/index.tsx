import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Dispatch } from "redux";

import { RootState, UserData } from "../../interfaces";

import CartIcon from "../cart-icon";
import CartDropdown from "../cart-dropdown";
import { selectCartHidden } from "../../redux/cart/selectors";
import { selectCurrentUser } from "../../redux/user/selectors";
import { signOutStart } from "../../redux/user/actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./styles";

type Props = {
  currentUser: UserData | null;
  hidden: boolean;
  signOutStart(): void;
};

const Header = ({ currentUser, hidden, signOutStart }: Props) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

type Selector = {
  currentUser: ReturnType<typeof selectCurrentUser>;
  hidden: ReturnType<typeof selectCartHidden>;
};

const mapStateToProps = createStructuredSelector<RootState, Selector>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
