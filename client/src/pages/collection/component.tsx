import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { RootState, Collection } from "../../interfaces";

import CollectionItem from "../../components/collection-item";
import { selectCollection } from "../../redux/shop/selectors";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./styles";

type Props = {
  collection: Collection | null;
};

const CollectionPage = ({ collection }: Props): JSX.Element | null => {
  if (!collection) {
    return null;
  }

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

type TParams = { collectionId: string };

const mapStateToProps = (
  state: RootState,
  ownProps: Props & RouteComponentProps<TParams>,
) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
