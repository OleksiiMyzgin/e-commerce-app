import React from "react";

import { CustomButtonContainer } from "./styles";

type Props = {
  children: React.ReactNode;
  type?: string;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
};

const CustomButton = ({
  children,
  ...props
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
