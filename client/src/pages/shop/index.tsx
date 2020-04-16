import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { fetchCollectionsStart } from "../../redux/shop/actions";
import Spinner from "../../components/spinner";

const CollectionsOverview = lazy(() =>
  import("../../components/collections-overview"),
);
const CollectionPageContainer = lazy(() => import("../collection"));

type Props = {
  fetchCollectionsStart(): void;
  match: {
    path: string;
  };
};

const ShopPage = ({ fetchCollectionsStart, match }: Props) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={Spinner}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
