import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import CollectionItem from "../collection-item";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./styles";
import { Collection } from "../../interfaces";

const CollectionPreview = ({
  title,
  items,
  history,
  match,
  routeName,
}: Collection & RouteComponentProps) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((_item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
