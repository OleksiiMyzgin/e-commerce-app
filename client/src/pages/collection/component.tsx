import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { RootState, Collection } from "../../interfaces";

import CollectionItem from "../../components/collection-item";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

type Props = {
  collection: Collection | null;
};

const CollectionPage = ({ collection }: Props): JSX.Element | null => {
  if (!collection) {
    return null;
  }

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
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
