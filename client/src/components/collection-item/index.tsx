import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./styles";
import { Dispatch } from "redux";
import { TCartItem } from "../../interfaces";

type Props = {
  item: TCartItem;
  addItem(item: TCartItem): void;
};

const CollectionItem = ({ item, addItem }: Props) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: TCartItem) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
