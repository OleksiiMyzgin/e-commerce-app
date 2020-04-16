import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { createStructuredSelector } from "reselect";

import { RootState, UserData } from "./interfaces";

import Header from "./components/header";
import Spinner from "./components/spinner";
import ErrorBoundary from "./components/error-boundary";

import { GlobalStyle } from "./global.styles";

import { selectCurrentUser } from "./redux/user/selectors";
import { checkUserSession } from "./redux/user/actions";

const HomePage = lazy(() => import("./pages/homepage"));
const ShopPage = lazy(() => import("./pages/shop"));
const CheckoutPage = lazy(() => import("./pages/checkout"));
const SignInAndSignUpPage = lazy(() => import("./pages/sign-in-and-sign-up"));

type Props = {
  checkUserSession(): void;
  currentUser: UserData | null;
};

const App = ({ checkUserSession, currentUser }: Props) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

type Selector = {
  currentUser: ReturnType<typeof selectCurrentUser>;
};

const mapStateToProps = createStructuredSelector<RootState, Selector>({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
