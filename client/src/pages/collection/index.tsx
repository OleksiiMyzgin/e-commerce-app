import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { RootState } from "../../interfaces";

import { selectIsCollectionsLoaded } from "../../redux/shop/selectors";
import WithSpinner from "../../components/with-spinner/";
import CollectionPage from "./component";

type Selector = {
  isLoading: ReturnType<typeof selectIsCollectionsLoaded>;
};

const mapStateToProps = createStructuredSelector<RootState, Selector>({
  isLoading: (state: RootState) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose<React.FC>(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;
