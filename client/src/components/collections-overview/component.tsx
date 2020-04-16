import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { RootState, Collection } from "../../interfaces";

import CollectionPreview from "../collection-preview";
import { selectCollectionsForPreview } from "../../redux/shop/selectors";

import { CollectionsOverviewContainer } from "./styles";

type Props = {
  collections: Collection[];
};

const CollectionsOverview = ({ collections }: Props): JSX.Element => (
  <CollectionsOverviewContainer>
    {collections.map((collection) => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </CollectionsOverviewContainer>
);

type Selector = {
  collections: ReturnType<typeof selectCollectionsForPreview>;
};

const mapStateToProps = createStructuredSelector<RootState, Selector>({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
