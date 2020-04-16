import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { RootState } from "../../interfaces";

import { selectIsCollectionFetching } from "../../redux/shop/selectors";
import WithSpinner from "../with-spinner/";
import CollectionsOverview from "./component";

type Selector = {
  isLoading: ReturnType<typeof selectIsCollectionFetching>;
};

const mapStateToProps = createStructuredSelector<RootState, Selector>({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose<React.FC>(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;
