import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { RootState, Collection } from "../../interfaces";

import CollectionPreview from "../collection-preview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

type Props = {
  collections: Collection[];
};

const CollectionsOverview = ({ collections }: Props): JSX.Element => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

type Selector = {
  collections: ReturnType<typeof selectCollectionsForPreview>;
};

const mapStateToProps = createStructuredSelector<RootState, Selector>({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
