import React from "react";

import Spinner from "../spinner";

type LoadingProps = {
  isLoading: boolean;
};

const WithSpinner = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P & LoadingProps> => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...(otherProps as P)} />;
};

export default WithSpinner;
